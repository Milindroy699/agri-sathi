/* My Farm — renders each saved crop plan with its current stage and this-week tasks. */
import {
  type Crop,
  readPlans,
  readChecks,
  writeCheck,
  removePlan,
  statusFor,
  addDays,
} from './farm-core';

interface Strings {
  empty: string;
  emptyCta: string;
  addCrop: string;
  thisWeek: string;
  watchNow: string;
  currentStage: string;
  day: string;
  dayOf: string;
  sownOn: string;
  transplantedOn: string;
  nextUp: string;
  finished: string;
  notStarted: string;
  openFull: string;
  openGuide: string;
  remove: string;
  nothingThisWeek: string;
  days: string;
  locale: string;
  calendarBase: string;
  cropsBase: string;
}

const el = <T extends Element>(s: string) => document.querySelector<T>(s);
const crops: Crop[] = JSON.parse(el('#farm-crops')?.textContent || '[]');
const S: Strings = JSON.parse(el('#farm-strings')?.textContent || '{}');

const list = el<HTMLElement>('[data-farm-list]');
const empty = el<HTMLElement>('[data-farm-empty]');
const addRow = el<HTMLElement>('[data-farm-add]');

function esc(str: string) {
  return str.replace(/[&<>"']/g, (c) =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!
  );
}
const fmt = (d: Date) =>
  d.toLocaleDateString(S.locale, { day: 'numeric', month: 'short', year: 'numeric' });

function render() {
  if (!list || !empty || !addRow) return;
  const plans = readPlans();
  const checks = readChecks();

  if (plans.length === 0) {
    list.innerHTML = '';
    empty.hidden = false;
    addRow.hidden = true;
    return;
  }
  empty.hidden = true;
  addRow.hidden = false;

  const cards = plans
    .map((plan) => {
      const st = statusFor(plan, crops, checks);
      if (!st) return '';
      const { crop } = st;
      const sownLabel = crop.basis === 'transplant' ? S.transplantedOn : S.sownOn;
      const dayLine =
        st.state === 'active'
          ? `<span class="farm-stage">${esc(S.day)} ${st.elapsed} <span>${esc(S.dayOf)} ${crop.duration} ${esc(S.days)}</span></span>`
          : '';

      let banner = '';
      if (st.state === 'not-started') banner = `<p class="farm-banner">${esc(S.notStarted)}</p>`;
      else if (st.state === 'finished') banner = `<p class="farm-banner">${esc(S.finished)}</p>`;

      let stageBlock = '';
      if (st.state === 'active' && st.currentStage) {
        const s = st.currentStage.stage;
        const from = fmt(addDays(plan.date, s.startDap));
        const to = fmt(addDays(plan.date, s.endDap));
        stageBlock = `<p class="farm-stage">${esc(S.currentStage)}: ${esc(s.name)} <span>· ${from} – ${to}</span></p>`;
        if (s.irrigation) stageBlock += `<p class="farm-next">💧 ${esc(s.irrigation)}</p>`;
      }

      let tasksBlock = '';
      if (st.state === 'active') {
        if (st.thisWeek.length) {
          tasksBlock = `<div class="farm-tasks"><h3>${esc(S.thisWeek)}</h3>${st.thisWeek
            .map(
              (t) =>
                `<label class="farm-check"><input type="checkbox" data-ckey="${t.key}" ${t.done ? 'checked' : ''}><span class="${t.done ? 'done' : ''}">${esc(t.text)}</span></label>`
            )
            .join('')}</div>`;
        } else {
          tasksBlock = `<p class="farm-next">${esc(S.nothingThisWeek)}</p>`;
        }
        if (st.watchNow.length) {
          tasksBlock += `<div class="farm-watch"><h3>⚠️ ${esc(S.watchNow)}</h3><ul>${st.watchNow
            .map((w) => `<li>${esc(w)}</li>`)
            .join('')}</ul></div>`;
        }
      }

      const nextBlock =
        st.state === 'active' && st.nextStage
          ? `<p class="farm-next">${esc(S.nextUp)}: ${esc(st.nextStage.name)} · ${fmt(addDays(plan.date, st.nextStage.startDap))}</p>`
          : '';

      return `<article class="farm-crop" data-plan="${esc(plan.crop)}|${esc(plan.date)}">
        <div class="farm-crop__head">
          <span class="farm-crop__emoji" aria-hidden="true">${esc(crop.emoji)}</span>
          <div>
            <p class="farm-crop__title">${esc(crop.name)}</p>
            <p class="farm-crop__sub">${esc(sownLabel)}: ${fmt(new Date(plan.date + 'T00:00:00'))}</p>
            ${dayLine}
          </div>
        </div>
        <div class="farm-crop__body">
          ${banner}
          ${stageBlock}
          ${tasksBlock}
          ${nextBlock}
          <div class="farm-actions">
            <a href="${S.calendarBase}?crop=${esc(plan.crop)}">${esc(S.openFull)}</a>
            <a href="${S.cropsBase}${esc(plan.crop)}/">${esc(S.openGuide)}</a>
            <button type="button" data-remove>${esc(S.remove)}</button>
          </div>
        </div>
      </article>`;
    })
    .join('');

  list.innerHTML = cards;

  list.querySelectorAll<HTMLInputElement>('input[data-ckey]').forEach((box) => {
    box.addEventListener('change', () => {
      writeCheck(box.dataset.ckey!, box.checked);
      box.nextElementSibling?.classList.toggle('done', box.checked);
    });
  });
  list.querySelectorAll<HTMLButtonElement>('[data-remove]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const card = btn.closest<HTMLElement>('[data-plan]');
      const [crop, date] = (card?.dataset.plan || '').split('|');
      if (crop && date) {
        removePlan({ crop, date });
        render();
      }
    });
  });
}

render();
