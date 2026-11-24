# hectorchan.com — Icon Sweep Audit (Wave 2, 2026-11-23)

Law: Dawn-Design.md §8 v1.6 — every UI label an icon can carry must be an icon; quantities/content stay text; every icon keeps an accessible name; NO STRETCH (fixed geometry).

Icon system found: **none** — no icon font, no SVG sprite. The site's only icon-like control is the CSS hamburger (`.menu-btn`, 3 spans, `aria-label="Menu"`). Conversions therefore use **simple same-style inline SVG** (24×24 viewBox, `stroke="currentColor"`, stroke-width 2, fill none — Feather/Lucide-style line icons) added only where a glyph was missing, per the sweep rules.

This is a personal site: nav links name distinct pages/sections. Per the wave brief, page-name nav stays text where an icon would be ambiguous; controls whose meaning an icon genuinely carries are converted.

## Converted (text label → icon, accessible name kept)

| Surface | Control | Before | After | Icon |
|---|---|---|---|---|
| `index.html` app cards (×9 cards) | "Visit site →" / "Visit →" external links | text + arrow character | **icon-only** fixed 36×36 link, `aria-label="Visit <site> (opens in new tab)"` + `title` | external-link (inline SVG) |
| `index.html` app cards (×7 cards) | "GitHub →" links | text + arrow character | **icon-only** fixed 36×36 link, `aria-label="GitHub — <repo> (opens in new tab)"` + `title` | GitHub mark (inline SVG, Feather path) |
| `index.html` contact section | "GitHub" ghost button | text button | **icon-only** fixed 44×44 button, `aria-label` + `title` | GitHub mark |

## Icon-first (icon added, text retained)

| Surface | Control | Icon added | Why text stays |
|---|---|---|---|
| `index.html` hero | "See my work" CTA | arrow-down | Primary page CTA; the words are the offer, the arrow carries direction |
| `index.html` hero | "Get in touch" CTA | mail | Primary page CTA; mail glyph reinforces, words name the action |

## Already compliant (no change)

- Mobile menu button on every page — pure icon control (CSS bars) with `aria-label="Menu"`, `aria-expanded` state. ✓
- Blog post rows — the trailing "→" is a glyph affordance on a content row (date + title are content). ✓

## Stays text — and why

- **Top nav (Studio / Apps / Hackathon / About / Blog / Contact)** on all pages — page/section names; a glyph per section would be ambiguous (what icon uniquely means "Hackathon"?) and would degrade usability on a personal site. Kept per the wave brief's borderline rule.
- **Blog post end-of-article link rows** ("realufo.org → · GitHub →") — inline prose links inside article content; the destination names are the content.
- **"← All posts" back-links** — already arrow-led; the destination name is content.
- **"Read the full story →"** — content link to an article, arrow glyph already present.
- **Email address big-link (hello@hectorchan.com)** — the address itself is the content being communicated.
- **Stats numbers + labels, timeline dates, headings, paragraphs, footer "Privacy"** — content / quantities / legal page name, not control labels.
- **`admin/index.html`** — private, unlinked console; its list entries are named destinations with descriptions (content links), no controls to convert.
- **`404.html` / `privacy.html`** — no interactive controls beyond the shared nav (kept, above).

## NO STRETCH compliance

New `.icon-link` controls are fixed 36×36 px with a fixed 20×20 px SVG inside; `.btn` SVGs are fixed 18×18 px. Nothing sizes to its content; card-link rows keep their flex layout with fixed-size children.
