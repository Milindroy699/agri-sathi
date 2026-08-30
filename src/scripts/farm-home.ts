/* Home page "My Farm this week" summary — compact, read-only. */
import { type Crop, readPlans, readChecks, statusFor } from './farm-core';

const el = <T extends Element>(s: string) => document.querySelector<T>(s);
const crops: Crop[] = JSON.parse(el('#farm-home-crops')?.textContent || '[]');
const S = JSON.parse(el('#farm-home-strings')?.textContent || '{}') as {
  currentStage: string;
  thisWeek: string;
  day: string;
  nothingThisWeek: string;
  locale: string;
};

const section = el<HTMLElement>('[data-farm-home]');
const listEl = el<HTMLElement>('[data-farm-home-list]');

function esc(str: string) {
  return str.replace(/[&<>"']/g, (c) =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!
  );
}

const plans = readPlans();
const checks = readChecks();
const active = plans
  .map((p) => statusFor(p, crops, checks))
  .filter((s): s is NonNullable<typeof s> => !!s && s.state === 'active');

if (section && listEl && active.length) {
  section.hidden = false;
  listEl.innerHTML = active
    .slice(0, 4)
    .map((st) => {
      const pending = st.thisWeek.filter((t) => !t.done);
      const shown = pending.slice(0, 3);
      const rest = pending.length - shown.length;
      const tasks = shown.length
        ? `<ul>${shown.map((t) => `<li>${esc(t.text)}</li>`).join('')}${
            rest > 0 ? `<li class="more">+${rest}</li>` : ''
          }</ul>`
        : `<ul><li class="more">${esc(S.nothingThisWeek)}</li></ul>`;
      const stageName = st.currentStage?.stage.name ?? '';
      return `<article class="farm-home__card">
        <h3>${esc(st.crop.emoji)} ${esc(st.crop.name)}</h3>
        <p class="fh-stage">${esc(S.day)} ${st.elapsed}${stageName ? ` · ${esc(stageName)}` : ''}</p>
        ${tasks}
      </article>`;
    })
    .join('');
}
