---
name: hectorchan.com
description: Personal site and blog of Hector Chan, founder of Dawn Studio. Dark, large type, one amber light.
colors:
  dawn-amber: "#f5a623"
  dawn-amber-soft: "rgba(245, 166, 35, 0.12)"
  amber-ink: "#14100a"
  night: "#0b0d12"
  night-surface: "#12151d"
  night-raised: "#171b25"
  starlight: "#eceef4"
  prose-grey: "#c9cfdd"
  dusk-grey: "#9aa1b5"
  faint-grey: "#7e859b"
  hairline: "rgba(255, 255, 255, 0.08)"
typography:
  display:
    fontFamily: "Manrope, Noto Sans TC, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(2.5rem, 7.5vw, 4.5rem)"
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Manrope, Noto Sans TC, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(2rem, 4.5vw, 2.5rem)"
    fontWeight: 700
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Manrope, Noto Sans TC, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(1.5rem, 3.5vw, 2rem)"
    fontWeight: 700
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Manrope, Noto Sans TC, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(1rem, 1.2vw + 0.9rem, 1.25rem)"
    fontWeight: 400
    lineHeight: 1.65
  lede:
    fontFamily: "Manrope, Noto Sans TC, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(1.125rem, 2.4vw, 1.5rem)"
    fontWeight: 400
rounded:
  sm: "4px"
  md: "8px"
  lg: "16px"
  avatar: "24px"
  pill: "999px"
spacing:
  gutter: "clamp(1.25rem, 4vw, 2.5rem)"
  section: "clamp(4rem, 10vh, 6.5rem)"
  card: "clamp(1.5rem, 4vw, 2.5rem)"
  container: "1020px"
  container-narrow: "720px"
components:
  button-primary:
    backgroundColor: "{colors.dawn-amber}"
    textColor: "{colors.amber-ink}"
    rounded: "{rounded.pill}"
    padding: "0.85rem 1.7rem"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.starlight}"
    rounded: "{rounded.pill}"
    padding: "0.85rem 1.7rem"
  button-ghost-hover:
    textColor: "{colors.dawn-amber}"
  tag:
    backgroundColor: "{colors.dawn-amber}"
    textColor: "{colors.amber-ink}"
    rounded: "{rounded.pill}"
    padding: "0.2rem 0.75rem"
  tag-dim:
    backgroundColor: "{colors.hairline}"
    textColor: "{colors.dusk-grey}"
    rounded: "{rounded.pill}"
    padding: "0.2rem 0.75rem"
  card:
    backgroundColor: "{colors.night-raised}"
    rounded: "{rounded.lg}"
    padding: "{spacing.card}"
  app-card:
    backgroundColor: "{colors.night-raised}"
    rounded: "{rounded.lg}"
    padding: "1.5rem"
  stat:
    backgroundColor: "{colors.night}"
    textColor: "{colors.dawn-amber}"
    rounded: "{rounded.lg}"
    padding: "1.5rem 1rem"
  nav:
    height: "64px"
---

# Design System: hectorchan.com

## Overview

**Creative North Star: "Dawn Over Dark"**

The night is almost over. Everything sits on a deep blue-black, and the only warm light in the room is Dawn Amber, the colour of first light and the name of the studio behind the work. Text is cool starlight on night; the amber appears only where the eye should go next: the primary action, a link underline, a flagship tag, a peak number.

The system is quiet and precise. Big, tight-tracked Manrope headlines carry the voice; everything else steps back into muted greys and hairline borders. Surfaces separate by small tonal steps of night, not by shadows or colour. Motion is short and soft: a 2–3px lift, a colour fade, a reveal on scroll that switches off under reduced motion.

It is a dark-only site. There is no light theme, and none should be implied.

**Key Characteristics:**
- Dark-only, blue-black night base with tonal surface steps.
- One accent, Dawn Amber, used sparingly as light, never as fill for large areas.
- Large display type with negative tracking; body copy in muted grey.
- Hairline borders (8% white) instead of shadows to define edges.
- Pill-shaped actions and tags; 16px-rounded cards.
- Small, eased motion that never moves more than a few pixels.

## Colors

One warm light on a cool night: a single amber accent against a family of blue-tinted near-blacks and greys.

### Primary
- **Dawn Amber** (`dawn-amber`): primary buttons, flagship tag, link underlines, timeline dots and dates, stat numbers, hover colour for links and titles, focus ring, `mark` highlights in prose.
- **Dawn Amber Soft** (`dawn-amber-soft`): faint amber wash for rare emphasis backgrounds.
- **Amber Ink** (`amber-ink`): text on any amber fill. Never put white or starlight on amber.

### Neutral
- **Night** (`night`): page background; also the inset background of stat tiles inside an alt section.
- **Night Surface** (`night-surface`): alternating section bands and chart containers.
- **Night Raised** (`night-raised`): cards and app cards.
- **Starlight** (`starlight`): headings, primary text, link text.
- **Prose Grey** (`prose-grey`): long-form blog paragraphs, softer than starlight for reading.
- **Dusk Grey** (`dusk-grey`): ledes, descriptions, nav links at rest, secondary copy.
- **Faint Grey** (`faint-grey`): dates, meta, footer, captions.
- **Hairline** (`hairline`): every border and divider; dim tag fill.

### Named Rules
**The One Light Rule.** Dawn Amber is the only chromatic colour. It marks what to read or click next and stays a small share of any screen. Amber borders on hover or featured cards sit at 35–40% opacity, not full strength.

**The Amber Ink Rule.** Anything filled with Dawn Amber uses Amber Ink for its text.

The GitHub-style blue (#1f6feb) in the hackathon bar chart is a data-visualisation colour borrowed from GitHub's contribution charts, not a system colour.

## Typography

**Display Font:** Manrope (with Noto Sans TC, -apple-system, Segoe UI, sans-serif)
**Body Font:** Manrope (same stack)

**Character:** One geometric-humanist sans in four weights (400/500/600/700) does all the work. Hierarchy comes from size and tracking, not from a second family. Noto Sans TC covers Traditional Chinese.

### Hierarchy
- **Display** (700, `clamp(2.5rem, 7.5vw, 4.5rem)`, 1.08): hero h1 only. Blog post h1 uses a smaller step (`clamp(2rem, 6vw, 3.5rem)`, 1.12, −0.025em).
- **Headline** (700, `clamp(2rem, 4.5vw, 2.5rem)`): section h2.
- **Title** (700, `clamp(1.5rem, 3.5vw, 2rem)`): featured card h3; app cards use 1.35rem, post rows `clamp(1.2rem, 2.6vw, 1.5rem)`.
- **Lede** (400, `clamp(1.125rem, 2.4vw, 1.5rem)`): hero and section intros in Dusk Grey, max 34ch.
- **Body** (400, fluid 1–1.25rem, 1.65): paragraphs capped at 60–68ch.
- **Tag label** (700, 0.8rem, 0.05em, uppercase): card tags only. There are no kickers or eyebrow labels above headings; headings carry their own weight and post dates sit below the h1 as meta.

### Named Rules
**The Tight Headline Rule.** Every heading at title size or above is weight 700 with negative letter-spacing (−0.01em to −0.03em) and `text-wrap: balance`.

**The One Family Rule.** Manrope only. Do not add a serif, mono, or display face.

## Layout

Single centred column. Main container is 1020px; reading pages (blog posts, privacy, about) narrow to 720px. Side gutter is fluid, `clamp(1.25rem, 4vw, 2.5rem)`.

Sections stack vertically with generous fluid padding (`clamp(4rem, 10vh, 6.5rem)`); every other section can switch to the Night Surface band with hairline top and bottom borders. The hero gets extra top room (`clamp(7rem, 16vh, 10rem)`) to clear the fixed 64px nav.

Grids are simple: apps in two equal columns, stats in four, feature lists in two. At 760px and below everything collapses: apps and feature lists go to one column, stats to two, post rows drop the arrow and put the date on its own line, the studio row stacks, and the nav becomes a hamburger drawer. Horizontal overflow is clipped on `html, body`.

## Elevation & Depth

Flat by default. Depth comes from three tonal steps of night (Night, Night Surface, Night Raised) and hairline borders. The only true shadow is under the hero avatar. The nav gains a translucent night background with a 12px backdrop blur only after the page scrolls.

### Shadow Vocabulary
- **Avatar lift** (`box-shadow: 0 12px 48px rgba(0, 0, 0, 0.5)`): hero avatar only.

### Named Rules
**The Tonal Step Rule.** Separate surfaces with the next night tone and a hairline, never with a drop shadow.

## Shapes

Soft but not bubbly. Cards, stat tiles, chart containers and the studio logo share a 16px radius; the avatar is 24px. Every action and tag is a full pill (999px). Small details use 4px (focus ring, `mark`, chart cells 3px) and 8px (skip link). Timeline dots are circles. Edges are always 1px hairlines; accent underlines on links are 2px (3px on the contact big-link).

## Components

### Buttons
Pill-shaped, bold, compact. Quiet until touched.
- **Shape:** full pill (999px), 2px border.
- **Primary:** Dawn Amber fill, Amber Ink text, weight 700, 1.05rem, padding 0.85rem × 1.7rem.
- **Ghost:** transparent with a hairline border and Starlight text; on hover the border and text turn Dawn Amber.
- **Hover / Focus:** 2px upward lift over 0.15s. Focus-visible is a 2px Dawn Amber outline offset 3px.

### Chips (tags)
- **Style:** uppercase 0.8rem / 700 / 0.05em, pill shape. Flagship tag is Dawn Amber with Amber Ink; secondary tag ("Open source") is a hairline fill with Dusk Grey text.

### Cards / Containers
- **Corner Style:** 16px.
- **Background:** Night Raised with a hairline border.
- **Shadow Strategy:** none (see Elevation).
- **Hover:** border warms to Dawn Amber at 40% and the card lifts 3px over 0.5s on the site easing curve; app cards press to 98% scale on active.
- **Featured card:** amber border at 35% at rest, a row of tags, a two-column feature list with amber arrows, and amber-underlined links.
- **Internal Padding:** fluid `clamp(1.5rem, 4vw, 2.5rem)` for featured cards, 1.5rem for app cards.

### Navigation
- Fixed, 64px tall, transparent at the top of the page. Once scrolled, it gets a 82%-opaque night background, 12px backdrop blur and a hairline bottom border.
- Brand mark "H." at 1.6rem / 700 on the left; links at 1rem / 500 in Dusk Grey, Starlight on hover and when active.
- At 760px and below: a three-bar hamburger that morphs into an X, opening a full-width night drawer with larger 1.1rem links.

### Post Row
Blog list entry: a three-column grid (date, title, arrow) separated by hairlines. Date in Faint Grey, title at title size, arrow in Dawn Amber. The whole row is the link; hovering turns the title amber.

### Stat Tile and Timeline
Story components for build-in-public numbers. Stat tiles are Night-on-Night-Surface boxes with large amber tabular numbers over a Dusk Grey label. The timeline is a hairline rail with amber dots, bold amber dates (0.04em tracking), and muted body text.

### Big Link
The contact email set at `clamp(1.6rem, 5vw, 2.6rem)` / 700 with a 3px amber underline. Used once, as the single contact action.

## Do's and Don'ts

### Do:
- **Do** keep every page dark on Night (`#0b0d12`) with Starlight text.
- **Do** reserve Dawn Amber for the next action or the key number; use Amber Ink on amber fills.
- **Do** separate surfaces with the next night tone plus a hairline (8% white).
- **Do** set headings in Manrope 700 with negative tracking and balanced wrapping.
- **Do** keep motion to small lifts (2–3px) and fades on `cubic-bezier(0.22, 1, 0.36, 1)`, and disable reveals under `prefers-reduced-motion`.
- **Do** keep reading text at 60–68ch and long-form prose in Prose Grey.
- **Do** keep every text colour at 4.5:1 or better on all three night tones; Faint Grey is the floor.

### Don't:
- **Don't** introduce a second accent colour or a light theme.
- **Don't** add drop shadows to cards or sections; the avatar is the only shadowed element.
- **Don't** fill large areas with Dawn Amber or put white text on it.
- **Don't** add another typeface.
- **Don't** use square-cornered buttons or tags; actions are pills.
- **Don't** put an uppercase kicker or eyebrow label above a heading.
