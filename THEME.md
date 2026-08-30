# Re-theming Agri Sathi

The entire visual design of the app is controlled by **one file**:
[`src/styles/tokens.css`](src/styles/tokens.css). Components never hard-code a colour or a
size — they reference tokens like `var(--color-brand)` or `var(--space-4)`. So changing the
look means editing that one file, and every screen updates together.

## How to ask Claude for a new theme

Open this project in Claude Code and describe what you want. Useful things to say:

- **Mood / direction** — e.g. "warmer and more traditional", "clean and modern like a
  banking app", "high-energy, bright", "calm and minimal", "match the colours of our NGO's
  logo (attach it)".
- **Primary colour** — the green is `--color-brand`. Give a hex or a description.
- **Contrast / readability** — this audience often uses cheap screens in bright sun, so the
  default is deliberately high-contrast with large text. Say if you want to keep that or
  relax it.
- **Light / dark** — v1 is light-only with a dark palette stubbed out. Ask to "enable the
  dark theme" to turn it on.
- **Type size** — `--text-base` is 17px (larger than usual on purpose). Ask to change the
  scale if you want denser text.
- **Corners** — `--radius` controls roundness; ask for "sharper" or "pill-shaped" etc.

Example prompt:

> "Re-theme Agri Sathi: primary colour a deep indigo (#3538CD), warmer off-white
> background, slightly larger corner radius, and turn on the dark theme. Keep the
> caution/danger amber and red for pest warnings."

## What a theme change touches

| Token group | Controls |
|---|---|
| `--color-brand*`, `--color-accent` | Buttons, links, headings, active states |
| `--color-caution*`, `--color-danger*`, `--color-ok*`, `--color-info*` | Pest warnings, disclaimers, callouts |
| `--color-bg`, `--color-surface*`, `--color-border`, `--color-text*` | Page and card backgrounds, text |
| `--color-kharif/rabi/zaid` | Season chips on crop cards |
| `--font-sans`, `--font-hi`, `--text-*`, `--weight-*` | Typography |
| `--space-*`, `--radius-*`, `--shadow-*` | Spacing, roundness, elevation |
| `--tap-target`, `--content-max`, `--wide-max` | Touch sizing, page width |

## Structural / layout changes

Bigger changes — a different navigation pattern, a redesigned crop page, a home-screen
dashboard — are component edits, not token edits. Just describe the change; the components
are small, single-purpose `.astro` files in `src/components/` and `src/pages/`.

## Icons

The PWA icon and favicon come from [`public/favicon.svg`](public/favicon.svg). Edit that SVG
(or ask for a new one), then run `node scripts/make-icons.mjs` to regenerate the PNGs. Keep
the icon recognisable at 48px.
