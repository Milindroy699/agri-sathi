import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

/* -----------------------------------------------------------------------------
 * Bilingual field helpers
 * Every farmer-facing string is stored as { en, hi }. `hi` is optional so the
 * build never blocks on a missing translation, but `pnpm run check:content`
 * (see scripts/) reports entries that still need Hindi.
 * -------------------------------------------------------------------------- */
const bi = z.object({ en: z.string(), hi: z.string().optional() });
/** A bilingual list of short strings: { en: [...], hi: [...] }. */
const biLines = z.object({
  en: z.array(z.string()),
  hi: z.array(z.string()).optional(),
});
const emptyLines = { en: [] as string[] };

const seasonEnum = z.enum(['kharif', 'rabi', 'zaid']);

const variety = z.object({
  name: z.string(),
  duration: z.number().int().positive().optional(),
  region: z.string().optional(),
  notes: bi.optional(),
});

const stage = z.object({
  key: z.string(),
  name: bi,
  startDap: z.number().int().min(0), // days after sowing / transplant
  endDap: z.number().int().min(0),
  tasks: biLines,
  watchFor: biLines.default(emptyLines),
  irrigation: bi.optional(),
});

const nutrientDose = z.object({
  n: z.number().min(0),
  p: z.number().min(0), // P2O5
  k: z.number().min(0), // K2O
});

const nutritionSchedule = z.object({
  stage: bi,
  timing: bi,
  n: z.number().min(0),
  p: z.number().min(0),
  k: z.number().min(0),
});

const pestOrDisease = z.object({
  name: bi,
  identify: bi,
  damage: bi,
  ipm: biLines.default(emptyLines),
  chemical: biLines.default(emptyLines),
  note: bi.optional(),
});

const commonProblem = z.object({
  symptom: bi,
  likelyCause: bi,
  action: bi,
});

const crops = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/crops' }),
  schema: z.object({
    id: z.string(),
    name: bi,
    order: z.number().int().default(100),
    botanicalName: z.string(),
    family: bi,
    category: z.enum(['cereal', 'pulse', 'oilseed', 'fibre', 'sugar', 'vegetable', 'other']),
    seasons: z.array(seasonEnum).min(1),
    duration: z.number().int().positive(), // total crop duration in days
    photo: z.string().optional(),
    emoji: z.string().default('🌱'),

    climate: bi,
    soil: bi,
    waterRequirement: bi,
    majorStates: z.array(z.string()).default([]),

    seedRate: z.object({
      value: z.number().positive(),
      unit: z.enum(['kg/ha', 'q/ha']).default('kg/ha'),
      method: bi.optional(),
    }),

    varieties: z.array(variety).default([]),

    calendar: z.object({
      basis: z.enum(['sowing', 'transplant']).default('sowing'),
      stages: z.array(stage).min(1),
    }),

    nutrition: z.object({
      recommendedNpk: nutrientDose,
      basisNote: bi.optional(),
      sprayWaterLitresPerAcre: z.number().positive().default(200),
      schedule: z.array(nutritionSchedule).default([]),
      organic: biLines.default(emptyLines),
      soilTestNote: bi.optional(),
    }),

    pests: z.array(pestOrDisease).default([]),
    diseases: z.array(pestOrDisease).default([]),
    commonProblems: z.array(commonProblem).default([]),

    sources: z.array(z.string()).min(1),
    lastReviewed: z.coerce.date(),
    reviewedBy: z.string().optional(),
  }),
});

const glossary = defineCollection({
  loader: file('src/content/glossary.yaml'),
  schema: z.object({
    id: z.string(),
    term: bi,
    definition: bi,
    relatedCrops: z.array(z.string()).default([]),
  }),
});

const faq = defineCollection({
  loader: file('src/content/faq.yaml'),
  schema: z.object({
    id: z.string(),
    question: bi,
    answer: bi,
    topic: z.enum(['general', 'soil', 'water', 'nutrition', 'pest', 'seed', 'weather', 'scheme']).default('general'),
    order: z.number().int().default(100),
  }),
});

export const collections = { crops, glossary, faq };
