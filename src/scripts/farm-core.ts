/* Shared logic for "My Farm" — used by the My Farm page and the home summary. */

export interface Stage {
  key: string;
  name: string;
  startDap: number;
  endDap: number;
  tasks: string[];
  watchFor: string[];
  irrigation: string;
}
export interface Crop {
  id: string;
  name: string;
  emoji: string;
  duration: number;
  basis: 'sowing' | 'transplant';
  stages: Stage[];
}
export interface Plan {
  crop: string;
  date: string;
}

export const PLANS_KEY = 'agri-sathi:calendar:plans:v1';
export const CHECKS_KEY = 'agri-sathi:calendar:checks:v1';

export function readPlans(): Plan[] {
  try {
    const v = JSON.parse(localStorage.getItem(PLANS_KEY) || '[]');
    return Array.isArray(v) ? v : [];
  } catch {
    return [];
  }
}

export function readChecks(): Record<string, boolean> {
  try {
    return JSON.parse(localStorage.getItem(CHECKS_KEY) || '{}') || {};
  } catch {
    return {};
  }
}

export function writeCheck(key: string, value: boolean) {
  try {
    const all = readChecks();
    all[key] = value;
    localStorage.setItem(CHECKS_KEY, JSON.stringify(all));
  } catch {
    /* storage unavailable */
  }
}

export function removePlan(plan: Plan) {
  try {
    const kept = readPlans().filter((p) => !(p.crop === plan.crop && p.date === plan.date));
    localStorage.setItem(PLANS_KEY, JSON.stringify(kept));
  } catch {
    /* ignore */
  }
}

export function daysSince(iso: string): number {
  const start = new Date(iso + 'T00:00:00');
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return Math.floor((today.getTime() - start.getTime()) / 86_400_000);
}

export function addDays(iso: string, days: number): Date {
  const d = new Date(iso + 'T00:00:00');
  d.setDate(d.getDate() + days);
  return d;
}

export interface FarmStatus {
  plan: Plan;
  crop: Crop;
  elapsed: number;
  state: 'not-started' | 'active' | 'finished';
  planId: string;
  currentStage?: { stage: Stage; index: number };
  nextStage?: Stage;
  /** Tasks whose stage window overlaps roughly this week, with a stable check key. */
  thisWeek: Array<{ text: string; key: string; done: boolean }>;
  watchNow: string[];
}

export function statusFor(plan: Plan, crops: Crop[], checks: Record<string, boolean>): FarmStatus | null {
  const crop = crops.find((c) => c.id === plan.crop);
  if (!crop) return null;
  const elapsed = daysSince(plan.date);
  const planId = `${plan.crop}__${plan.date}`;
  const lastDap = crop.stages[crop.stages.length - 1]?.endDap ?? crop.duration;

  let state: FarmStatus['state'] = 'active';
  if (elapsed < 0) state = 'not-started';
  else if (elapsed > lastDap) state = 'finished';

  let currentStage: FarmStatus['currentStage'];
  let nextStage: Stage | undefined;
  crop.stages.forEach((stage, index) => {
    if (elapsed >= stage.startDap && elapsed <= stage.endDap && !currentStage) {
      currentStage = { stage, index };
    }
    if (!nextStage && stage.startDap > elapsed) nextStage = stage;
  });

  const thisWeek: FarmStatus['thisWeek'] = [];
  const watchNow: string[] = [];
  crop.stages.forEach((stage, index) => {
    const overlaps = stage.endDap >= elapsed - 2 && stage.startDap <= elapsed + 7;
    if (state === 'active' && overlaps) {
      stage.tasks.forEach((text, j) => {
        const key = `${planId}__${index}__${j}`;
        thisWeek.push({ text, key, done: !!checks[key] });
      });
      stage.watchFor.forEach((w) => watchNow.push(w));
    }
  });

  return { plan, crop, elapsed, state, planId, currentStage, nextStage, thisWeek, watchNow };
}
