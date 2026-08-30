/* Personal crop calendar — fully client-side, offline, stored in localStorage. */

interface Stage {
  key: string;
  name: string;
  startDap: number;
  endDap: number;
  tasks: string[];
  watchFor: string[];
  irrigation: string;
}
interface Crop {
  id: string;
  name: string;
  emoji: string;
  duration: number;
  basis: 'sowing' | 'transplant';
  stages: Stage[];
}
interface Strings {
  today: string;
  todayTasks: string;
  nothingToday: string;
  stageNow: string;
  upcoming: string;
  past: string;
  tasks: string;
  watchFor: string;
  saved: string;
  savedPlans: string;
  delete: string;
  reset: string;
  day: string;
  afterSowing: string;
  afterTransplant: string;
  locale: string;
}

const PLANS_KEY = 'agri-sathi:calendar:plans:v1';
const CHECKS_KEY = 'agri-sathi:calendar:checks:v1';

const $ = <T extends Element>(sel: string, root: ParentNode = document) =>
  root.querySelector<T>(sel);

const crops: Crop[] = JSON.parse($('#cal-crops')?.textContent || '[]');
const S: Strings = JSON.parse($('#cal-strings')?.textContent || '{}');

const form = $<HTMLFormElement>('[data-cal-form]');
const output = $<HTMLElement>('[data-cal-output]');
const todayBox = $<HTMLElement>('[data-cal-today]');
const timeline = $<HTMLElement>('[data-cal-timeline]');
const savedWrap = $<HTMLElement>('[data-cal-saved]');
const savedList = $<HTMLElement>('[data-cal-saved-list]');

function readStore<T>(key: string, fallback: T): T {
  try {
    return JSON.parse(localStorage.getItem(key) || '') as T;
  } catch {
    return fallback;
  }
}
function writeStore(key: string, value: unknown) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    /* storage unavailable — the calendar still renders for this session */
  }
}

const addDays = (iso: string, days: number) => {
  const dt = new Date(iso + 'T00:00:00');
  dt.setDate(dt.getDate() + days);
  return dt;
};
const fmt = (dt: Date) =>
  dt.toLocaleDateString(S.locale, { day: 'numeric', month: 'short', year: 'numeric' });
const daysBetween = (a: Date, b: Date) =>
  Math.floor((b.getTime() - a.getTime()) / 86_400_000);

function planId(cropId: string, date: string) {
  return `${cropId}__${date}`;
}

function render(cropId: string, date: string) {
  const crop = crops.find((c) => c.id === cropId);
  if (!crop || !output || !timeline || !todayBox) return;

  const start = new Date(date + 'T00:00:00');
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const elapsed = daysBetween(start, today);
  const basisLabel = crop.basis === 'transplant' ? S.afterTransplant : S.afterSowing;
  const checks = readStore<Record<string, boolean>>(CHECKS_KEY, {});
  const id = planId(cropId, date);

  // Today box
  const activeStages = crop.stages.filter(
    (s) => elapsed >= s.startDap && elapsed <= s.endDap
  );
  const todoNow = activeStages.flatMap((s) => s.tasks.concat(s.watchFor.map((w) => `⚠️ ${w}`)));
  todayBox.innerHTML =
    `<h2>${S.todayTasks} · ${fmt(today)}</h2>` +
    (todoNow.length
      ? `<ul>${todoNow.map((x) => `<li>${escapeHtml(x)}</li>`).join('')}</ul>`
      : `<p>${escapeHtml(S.nothingToday)}</p>`);

  // Timeline
  timeline.innerHTML = crop.stages
    .map((stage, i) => {
      const from = fmt(addDays(date, stage.startDap));
      const to = fmt(addDays(date, stage.endDap));
      const state =
        elapsed > stage.endDap ? 'past' : elapsed >= stage.startDap ? 'now' : 'future';
      const stateLabel =
        state === 'past' ? S.past : state === 'now' ? S.stageNow : S.upcoming;
      const taskItems = stage.tasks
        .map((task, j) => {
          const ckey = `${id}__${i}__${j}`;
          const checked = checks[ckey] ? 'checked' : '';
          return `<label class="cal-check"><input type="checkbox" data-ckey="${ckey}" ${checked}><span>${escapeHtml(task)}</span></label>`;
        })
        .join('');
      const warn = stage.watchFor.length
        ? `<p class="cal-warn">${escapeHtml(S.watchFor)}</p><ul>${stage.watchFor
            .map((w) => `<li>${escapeHtml(w)}</li>`)
            .join('')}</ul>`
        : '';
      const irr = stage.irrigation
        ? `<p>💧 ${escapeHtml(stage.irrigation)}</p>`
        : '';
      return `<div class="cal-stage" data-state="${state}">
        <div class="cal-stage__head">
          <h3>${i + 1}. ${escapeHtml(stage.name)}</h3>
          <span class="cal-stage__state" data-s="${state}">${escapeHtml(stateLabel)}</span>
        </div>
        <p class="cal-stage__dates">${from} – ${to} · ${S.day} ${stage.startDap}–${stage.endDap} ${escapeHtml(basisLabel)}</p>
        ${irr}
        <p class="cal-warn" style="color:var(--color-text-soft)">${escapeHtml(S.tasks)}</p>
        ${taskItems}
        ${warn}
      </div>`;
    })
    .join('');

  timeline.querySelectorAll<HTMLInputElement>('input[data-ckey]').forEach((box) => {
    box.addEventListener('change', () => {
      const store = readStore<Record<string, boolean>>(CHECKS_KEY, {});
      store[box.dataset.ckey!] = box.checked;
      writeStore(CHECKS_KEY, store);
    });
  });

  output.hidden = false;
  output.scrollIntoView({ behavior: 'smooth', block: 'start' });

  savePlan(cropId, date);
}

function savePlan(cropId: string, date: string) {
  const plans = readStore<Array<{ crop: string; date: string }>>(PLANS_KEY, []);
  if (!plans.some((p) => p.crop === cropId && p.date === date)) {
    plans.unshift({ crop: cropId, date });
    writeStore(PLANS_KEY, plans.slice(0, 12));
  }
  renderSaved();
}

function renderSaved() {
  if (!savedWrap || !savedList) return;
  const plans = readStore<Array<{ crop: string; date: string }>>(PLANS_KEY, []);
  if (!plans.length) {
    savedWrap.hidden = true;
    return;
  }
  savedWrap.hidden = false;
  savedList.innerHTML = plans
    .map((p) => {
      const crop = crops.find((c) => c.id === p.crop);
      const label = crop ? `${crop.emoji} ${crop.name}` : p.crop;
      return `<li>
        <button type="button" data-open data-crop="${p.crop}" data-date="${p.date}">${escapeHtml(label)} · ${fmt(new Date(p.date + 'T00:00:00'))}</button>
        <button type="button" data-remove data-crop="${p.crop}" data-date="${p.date}" aria-label="${escapeHtml(S.delete)}">✕</button>
      </li>`;
    })
    .join('');

  savedList.querySelectorAll<HTMLButtonElement>('[data-open]').forEach((btn) => {
    btn.addEventListener('click', () => {
      (form!.elements.namedItem('crop') as HTMLSelectElement).value = btn.dataset.crop!;
      (form!.elements.namedItem('date') as HTMLInputElement).value = btn.dataset.date!;
      render(btn.dataset.crop!, btn.dataset.date!);
    });
  });
  savedList.querySelectorAll<HTMLButtonElement>('[data-remove]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const plans2 = readStore<Array<{ crop: string; date: string }>>(PLANS_KEY, []).filter(
        (p) => !(p.crop === btn.dataset.crop && p.date === btn.dataset.date)
      );
      writeStore(PLANS_KEY, plans2);
      renderSaved();
    });
  });
}

function escapeHtml(str: string) {
  return str.replace(/[&<>"']/g, (c) =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!
  );
}

form?.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const cropId = String(data.get('crop') || '');
  const date = String(data.get('date') || '');
  if (cropId && date) render(cropId, date);
});

$<HTMLButtonElement>('[data-cal-reset]')?.addEventListener('click', () => {
  form?.reset();
  if (output) output.hidden = true;
});

// Deep link: /tools/calendar/?crop=rice
const params = new URLSearchParams(location.search);
const preCrop = params.get('crop');
if (preCrop && crops.some((c) => c.id === preCrop)) {
  const sel = form?.elements.namedItem('crop') as HTMLSelectElement | null;
  if (sel) sel.value = preCrop;
}

renderSaved();
