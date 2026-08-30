/* Problem Diagnosis — client-side symptom matching, fully offline. */

interface Entry {
  id: string;
  cropId: string;
  cropName: string;
  cropEmoji: string;
  kind: 'pest' | 'disease' | 'problem';
  name: string;
  detail: string;
  firstAction: string;
  url: string;
  parts: string[];
  signs: string[];
}
interface Strings {
  results: string;
  noneYet: string;
  noMatch: string;
  match: string;
  firstStep: string;
  seeFull: string;
  kindPest: string;
  kindDisease: string;
  kindProblem: string;
  cropsBase: string;
}

const el = <T extends Element>(s: string) => document.querySelector<T>(s);
const entries: Entry[] = JSON.parse(el('#dx-entries')?.textContent || '[]');
const S: Strings = JSON.parse(el('#dx-strings')?.textContent || '{}');

const form = el<HTMLFormElement>('[data-dx]');
const out = el<HTMLElement>('[data-dx-results]');

const kindLabel = (k: Entry['kind']) =>
  k === 'pest' ? S.kindPest : k === 'disease' ? S.kindDisease : S.kindProblem;

function esc(str: string) {
  return str.replace(/[&<>"']/g, (c) =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!
  );
}

function selected(name: string): string[] {
  return Array.from(form?.querySelectorAll<HTMLInputElement>(`input[name="${name}"]:checked`) ?? []).map(
    (i) => i.value
  );
}

function run() {
  if (!form || !out) return;
  const crop = selected('crop')[0];
  const parts = selected('part');
  const signs = selected('sign');

  if (!crop || signs.length === 0) {
    out.innerHTML = `<p class="dx-hint">${esc(S.noneYet)}</p>`;
    return;
  }

  const scored = entries
    .filter((e) => e.cropId === crop)
    .map((e) => {
      const signHits = signs.filter((s) => e.signs.includes(s)).length;
      const partHit = parts.length === 0 || parts.some((p) => e.parts.includes(p));
      // relative confidence: how many of the farmer's chosen symptoms this entry explains
      const signScore = signHits / signs.length;
      const partScore = parts.length === 0 ? 0.15 : partHit ? 0.3 : 0;
      const score = signScore * 0.7 + partScore;
      return { e, score, signHits, partHit };
    })
    .filter((r) => r.signHits > 0 && (parts.length === 0 || r.partHit))
    .sort((a, b) => b.score - a.score)
    .slice(0, 6);

  if (scored.length === 0) {
    out.innerHTML = `<p class="dx-hint">${esc(S.noMatch)}</p>`;
    return;
  }

  const max = scored[0].score || 1;
  out.innerHTML =
    `<h2>${esc(S.results)}</h2>` +
    scored
      .map(({ e, score }) => {
        const pct = Math.round((score / max) * 100);
        return `<article class="dx-card">
          <div class="dx-card__head">
            <span class="dx-card__kind" data-k="${e.kind}">${esc(kindLabel(e.kind))}</span>
            <span class="dx-card__name">${esc(e.name)}</span>
            <span class="dx-card__crop">${esc(e.cropEmoji)} ${esc(e.cropName)}</span>
          </div>
          <div class="dx-meter" aria-label="${pct}% ${esc(S.match)}"><i style="width:${pct}%"></i></div>
          <p class="dx-card__detail">${esc(e.detail)}</p>
          ${e.firstAction ? `<p class="dx-card__action"><strong>${esc(S.firstStep)}:</strong> ${esc(e.firstAction)}</p>` : ''}
          <a href="${S.cropsBase}${e.url}">${esc(S.seeFull)} →</a>
        </article>`;
      })
      .join('');
}

form?.addEventListener('change', run);
el<HTMLButtonElement>('[data-dx-reset]')?.addEventListener('click', () => {
  form?.reset();
  run();
});

// Deep link: /tools/diagnose/?crop=rice
const preCrop = new URLSearchParams(location.search).get('crop');
if (preCrop) {
  const input = form?.querySelector<HTMLInputElement>(`input[name="crop"][value="${preCrop}"]`);
  if (input) input.checked = true;
}
