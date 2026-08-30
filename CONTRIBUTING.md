# Contributing to Agri Sathi

## The accuracy bar

Agri Sathi gives farmers advice that costs them money and affects their food and income.
Every agronomic claim must be traceable to a credible Indian source:

- ICAR institute or AICRP **Package of Practices** / production technology bulletins
- **State Agricultural University** POP for the relevant state and season
- **Krishi Vigyan Kendra (KVK)** advisories
- **CIB&RC** approved label claims for any pesticide reference
- ICRISAT / IIPR / IIWBR / DRMR / CICR / IIMR / NRRI / IISR etc. for crop-specific guidance

Pesticide entries deliberately stay at the level of **active ingredient + "follow the label
and local advisory"** — we do not print specific brand doses, because approved label claims
change and vary by state.

**Before a crop is promoted to farmers, a qualified agronomist must review its entry** and
be recorded in the `reviewedBy` field with the `lastReviewed` date updated.

## Adding or editing a crop

Each crop is one Markdown file in `src/content/crops/<id>.md`. The frontmatter schema is
enforced by Zod in [`src/content.config.ts`](src/content.config.ts) — **the build fails if
the data is malformed or a required field is missing**, so `npm run build` is your validator.

Bilingual fields come in two shapes:

```yaml
# single string
soil:
  en: "Well-drained loam, pH 6.0–7.5."
  hi: "अच्छे जल निकास वाली दोमट, pH 6.0–7.5।"

# a list of strings
tasks:
  en:
    - "First point."
    - "Second point."
  hi:
    - "पहला बिंदु।"
    - "दूसरा बिंदु।"
```

`hi` is optional everywhere — a missing Hindi string falls back to English at runtime, so
you can add a crop in English first and translate later. But a crop is not "done" until
Hindi is complete.

### Required per crop
- `id`, `name`, `botanicalName`, `family`, `category`, `seasons`, `duration`
- `climate`, `soil`, `waterRequirement`, `seedRate`
- `calendar.stages[]` — each with `startDap`/`endDap` (days after sowing or transplant),
  `tasks`, and ideally `watchFor` and `irrigation`
- `nutrition.recommendedNpk` (N, P₂O₅, K₂O per hectare) and `nutrition.sprayWaterLitresPerAcre`
- `sources` (at least one) and `lastReviewed`

### YAML gotchas
- Don't start a list item with a `"` — `- "text" more text` is invalid. Rephrase.
- Keep `—` (em dash) rather than `: ` inside plain scalars, or quote the whole string.

## Adding a glossary term or FAQ

Edit `src/content/glossary.yaml` or `src/content/faq.yaml` — add an entry anywhere with a
unique `id`. Glossary sorts alphabetically; FAQ sorts by `order`.

## UI strings

Add the key to **both** `src/i18n/en.json` and `src/i18n/hi.json`.

## Before opening a PR

```bash
npm run build      # must pass — this is the content + type check
npm run preview    # click through both languages at a narrow (320px) width
```
