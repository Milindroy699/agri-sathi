import { getCollection } from 'astro:content';
import type { Locale } from '../i18n/utils';
import { pick } from '../i18n/utils';
import { DIAGNOSTICS } from '../data/diagnostics';

export async function getCrops() {
  const crops = await getCollection('crops');
  return crops.sort((a, b) => {
    const byOrder = a.data.order - b.data.order;
    return byOrder !== 0 ? byOrder : a.data.name.en.localeCompare(b.data.name.en);
  });
}

/** Lightweight, localized crop list for search index + cards. */
export async function getCropIndex(locale: Locale) {
  const crops = await getCrops();
  return crops.map((crop) => ({
    id: crop.id,
    slug: crop.id,
    name: pick(crop.data.name, locale) ?? crop.data.name.en,
    nameEn: crop.data.name.en,
    nameHi: crop.data.name.hi ?? '',
    botanicalName: crop.data.botanicalName,
    emoji: crop.data.emoji,
    category: crop.data.category,
    seasons: crop.data.seasons,
    duration: crop.data.duration,
  }));
}

/** Compact, localized crop data for the client-side calendar + calculator. */
export async function getToolData(locale: Locale) {
  const crops = await getCrops();
  return crops.map((crop) => {
    const d = crop.data;
    return {
      id: crop.id,
      name: pick(d.name, locale) ?? d.name.en,
      emoji: d.emoji,
      duration: d.duration,
      basis: d.calendar.basis,
      seedRate: d.seedRate, // { value, unit }
      npk: d.nutrition.recommendedNpk,
      npkBasis: pick(d.nutrition.basisNote, locale) ?? '',
      sprayWaterLitresPerAcre: d.nutrition.sprayWaterLitresPerAcre,
      schedule: d.nutrition.schedule.map((s) => ({
        stage: pick(s.stage, locale) ?? s.stage.en,
        timing: pick(s.timing, locale) ?? s.timing.en,
        n: s.n,
        p: s.p,
        k: s.k,
      })),
      stages: d.calendar.stages.map((s) => ({
        key: s.key,
        name: pick(s.name, locale) ?? s.name.en,
        startDap: s.startDap,
        endDap: s.endDap,
        tasks: pick(s.tasks, locale) ?? s.tasks.en,
        watchFor: pick(s.watchFor, locale) ?? s.watchFor.en,
        irrigation: pick(s.irrigation, locale) ?? '',
      })),
    };
  });
}

/** Symptom-tagged pest / disease / disorder list for the Diagnosis tool. */
export async function getDiagnoseData(locale: Locale) {
  const crops = await getCrops();
  const line = (f: { en: string[]; hi?: string[] } | undefined) =>
    (f && (pick(f, locale) ?? f.en)) || [];

  const results: Array<{
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
  }> = [];

  for (const crop of crops) {
    const entries = DIAGNOSTICS[crop.id] ?? [];
    const d = crop.data;
    for (const [i, entry] of entries.entries()) {
      const needle = entry.match.toLowerCase();
      let name = '';
      let detail = '';
      let firstAction = '';
      let anchor = '';

      if (entry.kind === 'problem') {
        const hit = d.commonProblems.find((p) => p.symptom.en.toLowerCase().includes(needle));
        if (!hit) continue;
        name = pick(hit.symptom, locale) ?? hit.symptom.en;
        detail = pick(hit.likelyCause, locale) ?? hit.likelyCause.en;
        firstAction = pick(hit.action, locale) ?? hit.action.en;
        anchor = 'panel-problems';
      } else {
        const pool = entry.kind === 'pest' ? d.pests : d.diseases;
        const hit = pool.find((p) => p.name.en.toLowerCase().includes(needle));
        if (!hit) continue;
        name = pick(hit.name, locale) ?? hit.name.en;
        detail = pick(hit.identify, locale) ?? hit.identify.en;
        firstAction = line(hit.ipm)[0] || line(hit.chemical)[0] || '';
        anchor = 'panel-pests';
      }

      results.push({
        id: `${crop.id}-${i}`,
        cropId: crop.id,
        cropName: pick(d.name, locale) ?? d.name.en,
        cropEmoji: d.emoji,
        kind: entry.kind,
        name,
        detail,
        firstAction,
        url: `crops/${crop.id}/#${anchor}`,
        parts: entry.parts,
        signs: entry.signs,
      });
    }
  }
  return results;
}

/** Per-crop stage list keyed by day-after-sowing, for weather advisories. */
export async function getCropStageWindows(locale: Locale) {
  const crops = await getCrops();
  return crops.map((crop) => ({
    id: crop.id,
    name: pick(crop.data.name, locale) ?? crop.data.name.en,
    emoji: crop.data.emoji,
    basis: crop.data.calendar.basis,
    stages: crop.data.calendar.stages.map((s) => ({
      name: pick(s.name, locale) ?? s.name.en,
      startDap: s.startDap,
      endDap: s.endDap,
    })),
  }));
}

export async function getGlossary() {
  const items = await getCollection('glossary');
  return items.sort((a, b) => a.data.term.en.localeCompare(b.data.term.en));
}

export async function getFaqs() {
  const items = await getCollection('faq');
  return items.sort((a, b) => a.data.order - b.data.order);
}
