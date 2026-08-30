# Agri Sathi 🌾

An **offline-first farming companion** for Indian farmers — a crop encyclopedia, a
stage-by-stage crop calendar, pest & disease management, and fertiliser/nutrition guidance,
in **English and Hindi**, that works on a cheap Android phone with a weak network.

Built as a static [Astro](https://astro.build) site that installs as a **PWA**: open it once
with internet and everything keeps working offline.

## What's inside

| Area | Route |
|---|---|
| Home + crop search | `/en/` · `/hi/` |
| Crop encyclopedia (8 crops) | `/en/crops/` → `/en/crops/rice/` … |
| Personal crop calendar (offline, on-device) | `/en/tools/calendar/` |
| Input & dose calculator | `/en/tools/calculator/` |
| Glossary | `/en/glossary/` |
| FAQ | `/en/faq/` |
| About, sources & disclaimer | `/en/about/` |

Crops in v1: **Rice, Wheat, Maize, Cotton, Sugarcane, Soybean, Mustard, Chickpea.**

## Develop

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # static output in dist/
npm run preview    # serve the built site
node scripts/make-icons.mjs   # regenerate PWA icons from public/favicon.svg
```

Node 18+ required.

## Project layout

```
src/
  content/
    config → ../content.config.ts   # Zod schemas — a bad crop entry fails the build
    crops/*.md                      # one file per crop (bilingual frontmatter + overview body)
    glossary.yaml  faq.yaml         # single-file collections
  i18n/            en.json  hi.json  utils.ts  routing.ts
  layouts/Base.astro
  components/                       # Header, Footer, CropCard, StageTimeline, NutritionTable, PestCard, CropSearch, DisclaimerBanner
  pages/[lang]/…                    # every page is generated for both locales
  scripts/         calendar.ts  calculator.ts     # the two interactive tools
  styles/          tokens.css  global.css          # tokens.css = all visual design
```

## Content accuracy

Crop entries are compiled from **ICAR / State Agricultural University Package of Practices,
KVK advisories and CIB&RC-approved pesticide labels**. Every entry carries `sources` and a
`lastReviewed` date, and the app shows a standing disclaimer telling farmers to confirm
doses and pesticides with their local KVK before acting.

**Agronomic review by a qualified agronomist is required before this is promoted to farmers
for real decisions.** See [CONTRIBUTING.md](CONTRIBUTING.md).

## Deploy (GitHub Pages)

Push to `main`. The workflow in `.github/workflows/deploy.yml` builds and deploys to
`https://<user>.github.io/<repo>/`. In the repo, enable **Settings → Pages → Source →
GitHub Actions**.

For a custom domain or a `<user>.github.io` repo, set `SITE_URL` to your domain and
`BASE_PATH` to `/` in the workflow.

## Re-theming

All colours, type, spacing and radii live in [`src/styles/tokens.css`](src/styles/tokens.css).
See [THEME.md](THEME.md) for how to ask for a new look.
