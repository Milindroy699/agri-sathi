/* Input & dose calculator — client-side, no storage. */

interface ScheduleRow {
  stage: string;
  timing: string;
  n: number;
  p: number;
  k: number;
}
interface Crop {
  id: string;
  name: string;
  emoji: string;
  seedRate: { value: number; unit: 'kg/ha' | 'q/ha' };
  npk: { n: number; p: number; k: number };
  npkBasis: string;
  sprayWaterLitresPerAcre: number;
  schedule: ScheduleRow[];
}
interface Strings {
  results: string;
  seed: string;
  fertiliser: string;
  straight: string;
  urea: string;
  dap: string;
  mop: string;
  bags: string;
  kg: string;
  bagNote: string;
  sprayWater: string;
  litres: string;
  splitByStage: string;
  stage: string;
  timing: string;
  disclaimer: string;
  locale: string;
}

const ACRE_IN_HA = 0.404686;
const UREA_N = 0.46;
const DAP_N = 0.18;
const DAP_P = 0.46;
const MOP_K = 0.6;
const BAG_KG = 50;

const $ = <T extends Element>(sel: string) => document.querySelector<T>(sel);

const crops: Crop[] = JSON.parse($('#calc-crops')?.textContent || '[]');
const S: Strings = JSON.parse($('#calc-strings')?.textContent || '{}');

const form = $<HTMLFormElement>('[data-calc-form]');
const unitSel = form?.elements.namedItem('unit') as HTMLSelectElement;
const bighaField = $<HTMLElement>('[data-bigha]');
const output = $<HTMLElement>('[data-calc-output]');
const titleEl = $<HTMLElement>('[data-calc-title]');
const resultsEl = $<HTMLElement>('[data-calc-results]');
const splitEl = $<HTMLElement>('[data-calc-split]');

const nf = (n: number, digits = 0) =>
  n.toLocaleString(S.locale, { maximumFractionDigits: digits, minimumFractionDigits: 0 });

function areaInHectares(area: number, unit: string, bighaSqm: number): number {
  if (unit === 'hectare') return area;
  if (unit === 'bigha') return (area * bighaSqm) / 10_000;
  return area * ACRE_IN_HA;
}

function card(title: string, big: string, sub = '') {
  return `<div class="result-card"><h3>${escapeHtml(title)}</h3><p class="big">${escapeHtml(big)}</p>${sub ? `<p class="sub">${escapeHtml(sub)}</p>` : ''}</div>`;
}

function escapeHtml(str: string) {
  return str.replace(/[&<>"']/g, (c) =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!
  );
}

function calculate() {
  if (!form || !output || !resultsEl || !titleEl || !splitEl) return;
  const data = new FormData(form);
  const crop = crops.find((c) => c.id === String(data.get('crop')));
  const area = parseFloat(String(data.get('area') || '0'));
  const unit = String(data.get('unit') || 'acre');
  const bighaSqm = parseFloat(String(data.get('bigha') || '2529'));
  if (!crop || !area || area <= 0) return;

  const ha = areaInHectares(area, unit, bighaSqm);
  const acres = ha / ACRE_IN_HA;

  // Seed
  const ratePerHa = crop.seedRate.unit === 'q/ha' ? crop.seedRate.value * 100 : crop.seedRate.value;
  const seedKg = ratePerHa * ha;

  // Nutrients required (kg)
  const needN = crop.npk.n * ha;
  const needP = crop.npk.p * ha; // P2O5
  const needK = crop.npk.k * ha; // K2O

  // Straight fertilisers: DAP covers P (and some N), urea tops up N, MOP covers K
  const dapKg = needP > 0 ? needP / DAP_P : 0;
  const nFromDap = dapKg * DAP_N;
  const ureaKg = Math.max(0, needN - nFromDap) / UREA_N;
  const mopKg = needK > 0 ? needK / MOP_K : 0;

  const sprayL = crop.sprayWaterLitresPerAcre * acres;

  const bagLine = (kg: number) =>
    `${nf(kg / BAG_KG, 1)} ${S.bags} (${nf(kg)} ${S.kg})`;

  titleEl.textContent = `${crop.emoji} ${crop.name} · ${nf(area, 2)} ${unitLabel(unit)} ≈ ${nf(acres, 2)} ${unitLabel('acre')}`;

  resultsEl.innerHTML = [
    card(S.seed, `${nf(seedKg, 1)} ${S.kg}`, `${nf(ratePerHa)} kg/ha`),
    card(S.urea, bagLine(ureaKg), `${S.bagNote} · N ${nf(needN)} kg`),
    card(S.dap, bagLine(dapKg), `P₂O₅ ${nf(needP)} kg`),
    card(S.mop, bagLine(mopKg), `K₂O ${nf(needK)} kg`),
    card(S.sprayWater, `${nf(sprayL)} ${S.litres}`, `${crop.sprayWaterLitresPerAcre} L/${unitLabel('acre')}`),
  ].join('');

  // Split by stage (scaled to this field's total need)
  if (crop.schedule.length) {
    const totalSched = crop.schedule.reduce(
      (acc, r) => ({ n: acc.n + r.n, p: acc.p + r.p, k: acc.k + r.k }),
      { n: 0, p: 0, k: 0 }
    );
    const rows = crop.schedule
      .map((r) => {
        const nKg = totalSched.n ? (r.n / totalSched.n) * needN : 0;
        const pKg = totalSched.p ? (r.p / totalSched.p) * needP : 0;
        const kKg = totalSched.k ? (r.k / totalSched.k) * needK : 0;
        const ureaS = nKg / UREA_N;
        const dapS = pKg / DAP_P;
        const mopS = kKg / MOP_K;
        const parts = [
          dapS > 1 ? `${S.dap} ${nf(dapS)} ${S.kg}` : '',
          ureaS > 1 ? `${S.urea} ${nf(ureaS)} ${S.kg}` : '',
          mopS > 1 ? `${S.mop} ${nf(mopS)} ${S.kg}` : '',
        ].filter(Boolean);
        return `<tr><td>${escapeHtml(r.stage)}</td><td>${escapeHtml(r.timing)}</td><td>${parts.map(escapeHtml).join('<br>') || '—'}</td></tr>`;
      })
      .join('');
    splitEl.innerHTML = `<h3>${escapeHtml(S.splitByStage)}</h3><div class="table-wrap"><table><thead><tr><th>${escapeHtml(S.stage)}</th><th>${escapeHtml(S.timing)}</th><th>${escapeHtml(S.fertiliser)}</th></tr></thead><tbody>${rows}</tbody></table></div><p class="sub" style="font-size:var(--text-xs);color:var(--color-text-soft)">${escapeHtml(S.straight)}. ${escapeHtml(crop.npkBasis)}</p>`;
  } else {
    splitEl.innerHTML = '';
  }

  output.hidden = false;
  output.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function unitLabel(unit: string): string {
  const sel = form?.querySelector(`option[value="${unit}"]`);
  return sel?.textContent?.trim() || unit;
}

unitSel?.addEventListener('change', () => {
  if (bighaField) bighaField.hidden = unitSel.value !== 'bigha';
});

form?.addEventListener('submit', (e) => {
  e.preventDefault();
  calculate();
});

// Deep link: /tools/calculator/?crop=wheat
const preCrop = new URLSearchParams(location.search).get('crop');
if (preCrop && crops.some((c) => c.id === preCrop)) {
  const sel = form?.elements.namedItem('crop') as HTMLSelectElement | null;
  if (sel) sel.value = preCrop;
}
