---
name: Rubakas
description: The dice. Not the roll. A small crew running AI agents on real software work.
colors:
  soot: "#161616"
  paper: "#FAFAF8"
  red: "#EE1E1E"
  ink: "#3D3D3D"
  slate: "#6A7282"
  slate-light: "#99A1AF"
  hairline: "#E2E8F0"
typography:
  wordmark:
    fontFamily: "Montserrat, system-ui, sans-serif"
    fontSize: "calc(var(--h) * 0.414)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.2em"
  headline:
    fontFamily: "Montserrat, system-ui, sans-serif"
    fontSize: "clamp(2rem, 1rem + 4.2vw, 3.75rem)"
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Montserrat, system-ui, sans-serif"
    fontSize: "clamp(1.375rem, 1rem + 1.2vw, 1.875rem)"
    fontWeight: 600
    lineHeight: 1.2
  title-sm:
    fontFamily: "Montserrat, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.25
  body:
    fontFamily: "Montserrat, system-ui, sans-serif"
    fontSize: "clamp(1.0625rem, 1rem + 0.35vw, 1.25rem)"
    fontWeight: 400
    lineHeight: 1.6
  body-sm:
    fontFamily: "Montserrat, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  lede:
    fontFamily: "Montserrat, system-ui, sans-serif"
    fontSize: "clamp(1rem, 0.9rem + 0.5vw, 1.25rem)"
    fontWeight: 400
    lineHeight: 1.5
  tagline:
    fontFamily: "IBM Plex Mono, ui-monospace, monospace"
    fontSize: "max(11px, calc(var(--h) * 0.157))"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "0.12em"
  label:
    fontFamily: "IBM Plex Mono, ui-monospace, monospace"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "0.12em"
rounded:
  button: "6px"
spacing:
  gutter: "clamp(20px, 5vw, 64px)"
  col-gap: "clamp(20px, 2.5vw, 40px)"
  band-y: "clamp(72px, 11vw, 144px)"
  rule-gap: "clamp(40px, 6vw, 72px)"
  button-x: "28px"
components:
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    rounded: "{rounded.button}"
    padding: "0 28px"
    height: "48px"
  button-outline-hover:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.soot}"
  night-band:
    backgroundColor: "{colors.soot}"
    textColor: "{colors.paper}"
  day-band:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.soot}"
    padding: "clamp(72px, 11vw, 144px) 0"
  offer-row:
    textColor: "{colors.soot}"
    padding: "40px 0"
  offer-body:
    textColor: "{colors.ink}"
    typography: "{typography.body}"
  running-marker:
    backgroundColor: "{colors.red}"
    size: "14px"
---

# Design System: Rubakas

## Overview

**Creative North Star: "The Cut Tile"**

The system is the Rubakas Identity Guidelines v1.0, built as written. A page is a sequence of flat bands, soot (night) and paper (day), joined by one-pixel rules. The only saturated thing on the page is the mark: a red tile with two corners cut at 45 degrees and an R knocked out of it. With the words removed, what remains is a black band, a red hexagon, and one tracked wordmark.

It is plain, flat and quiet. No cards, no shadows, no gradients, no icons, no imagery apart from the mark. Structure comes from a single twelve-column grid, soot hairlines and generous vertical bands. Motion exists once: the mark's lock-in on the cover.

Montserrat is the guide's pinned face. It sits under an Impeccable overused-font ignore (`.impeccable/config.json`) because the user chose "the guide is the world". That is a sanctioned exception, not an endorsement of the face.

**Key Characteristics:**
- Two grounds only: soot night bands (cover, close, footer) and paper day bands.
- One red, in the mark and the focus ring only.
- Montserrat 700 sentence-case headings; IBM Plex Mono capitals for tagline and button only.
- Flat: soot 1px rules instead of cards or shadows.
- One 12-column grid with shared edges at columns 1, 5 and 9.

## Colors

Three brand colours, one of them red, plus four neutrals taken from the guide's own pages.

### Primary
- **Mark Red** (`{colors.red}`): the mark (cube, finished tile, 14px running marker) and the `:focus-visible` outline. Nothing else.

### Neutral
- **Soot** (`{colors.soot}`): night ground; ink on day bands; 1px rules on day bands; page background so overscroll never shows another colour.
- **Paper** (`{colors.paper}`): day ground; text and button outline on night bands.
- **Ink** (`{colors.ink}`): body copy on paper; the footer rule on soot.
- **Slate** (`{colors.slate}`): scrollbar thumb; the underline of the footer link.
- **Slate Light** (`{colors.slate-light}`): secondary text on soot (lede, close subline, footer link).
- **Hairline** (`{colors.hairline}`): the rule under the running marker on paper.

### Named Rules
**The One Red Rule.** Red is the mark and the focus ring. It is never a background, a button fill, a link colour or body text.

**The Two Grounds Rule.** Every band is soot with paper text or paper with soot text. No third ground, no tints between them.

## Typography

**Display Font:** Montserrat (system-ui, sans-serif), variable 100-900, self-hosted
**Body Font:** Montserrat
**Label/Mono Font:** IBM Plex Mono 400 (ui-monospace, monospace), self-hosted

**Character:** A geometric sans carrying the voice, with a typewriter-plain mono for the two places that behave like labels. Hierarchy comes from weight and size, never colour.

### Hierarchy
- **Wordmark** (700, 0.414 of tile height `--h`, line-height 1, +0.2em tracking, uppercase): the cover lockup; 15px in the footer. Left padding of 0.2em restores optical centre.
- **Headline** (700, clamp 2rem to 3.75rem, 1.08, -0.01em, max 18ch, balanced): band headings (h2), sentence case.
- **Title** (600, clamp 1.375rem to 1.875rem, 1.2): offer names.
- **Title Small** (600, 1.25rem, 1.25): principle headings (h3).
- **Body** (400, clamp 1.0625rem to 1.25rem, 1.6, ink, 46-56ch): offer and crew copy. Principle copy is 1.0625rem at 34ch.
- **Lede** (400, clamp 1rem to 1.25rem, 1.5, slate-light, 34ch): the single sentence under the lockup.
- **Tagline** (Plex Mono 400, 0.157 of `--h`, min 11px, +0.12em, uppercase): "The dice. Not the roll", once, in the lockup.
- **Label** (Plex Mono 400, 0.8125rem, +0.12em, uppercase): buttons; also the GitHub link in the footer (0.06em, lowercase).

### Named Rules
**The No Kicker Rule.** There are no eyebrows, kickers or labels above headings. Mono capitals are the tagline and buttons only.

**The Copyable Address Rule.** An email address on a button stays lowercase (0.04em tracking, no uppercase transform), because people copy it.

**The Sentence Case Rule.** Headings are sentence case; only the wordmark, tagline and buttons are uppercase.

## Layout

One twelve-column grid (column gap `{spacing.col-gap}`) runs through every band at 48rem and up; content width is min(100% minus two gutters, 72rem) with gutter `{spacing.gutter}`. Shared edges are columns 1, 5 and 9: offer name spans 1-4 and its description 5-12; principles are equal thirds (1, 5, 9); the close copy spans 1-8 and the mark 9-12; at 64rem the crew heading spans 1-8 and its paragraph 9-12. Below 48rem everything stacks to one column, and the close mark leads the copy.

Band rhythm: day bands pad `{spacing.band-y}` top and bottom; two consecutive day bands share one gap (the second drops its top padding). Running marker sits clamp(40px, 6vw, 72px) above the heading. Offer rows pad 28px (40px at 48rem+). The cover is 100svh, content centred; the lockup scales from tile height `--h` = clamp(88px, min(28vw, 30svh), 220px), with gap and top margin 0.257 of `--h`. Page order is cover (night), two day bands, close (night), footer (night).

## Elevation & Depth

Flat. No shadows, no blur, no gradients, no z-layers. Depth is only the alternation of soot and paper grounds and 1px rules: soot on paper, ink or hairline where the ground or role is quieter.

### Named Rules
**The No Card Rule.** Content is separated by a 1px soot rule above or below it, never by a box, fill or shadow.

## Shapes

Geometry comes from the mark: a 100x100 square with the top-left and bottom-right corners cut at 45 degrees, and a Montserrat ExtraBold R as an evenodd hole that takes the ground colour. It is the only non-rectangular shape on the page. The 14px running marker is the tile alone (the R-less `solid` form, reserved for small sizes). Everything else is rectangular with hard hairlines; the only radius is the buttons' 6px.

## Components

### Mark
Signature component. `finished` (tile with R hole) at the cover, the close (88px, fills columns 9-12 at 48rem+) and the 32px footer lockup; `solid` (tile only) at 14px as the running marker. On the cover it plays the Lock-in: from 0.3s a flat red cube (the tile's cabinet-projection silhouette, convex hull of a rotated cube) tumbles two turns about X and one about Y with easeInOutBack, locks at 2.7s, and the R cuts in with a 4% scale pulse (0.36s, cubic-bezier(0.16, 1, 0.3, 1)). Reduced-motion and no-JS visitors get the finished mark immediately; a 3.5s failsafe timer in the document head restores it if hydration stalls. Text and button are visible from first paint; motion never gates content.

### Buttons
- **Shape:** 6px radius, 48px minimum height, 28px side padding, 1px currentColor border.
- **Style:** outline only, paper on soot, Plex Mono 0.8125rem uppercase +0.12em. No fill, ever.
- **Hover:** inverts to paper fill with soot text over 0.18s cubic-bezier(0.16, 1, 0.3, 1).
- **Focus:** the global red ring (2px solid red, 3px offset).
- **Address variant:** lowercase, +0.04em tracking.

### Spec-sheet rows (offers)
A `dl` between two 1px soot rules; each row is name (Title) and description (Body, ink). Two columns at 48rem+ on the 1/5 edges; stacked below.

### Principles
Three items, each topped by a 1px soot rule with 20px padding, a Title Small heading and 34ch Body Small copy; equal thirds at 48rem+.

### Running marker
A 14px solid tile on a 1px hairline rule above day-band headings. Wordless and decorative (aria-hidden).

### Footer lockup
32px finished mark, 14px gap, 15px wordmark on the left; the mono GitHub link (slate-light, underlined in slate, paper on hover) on the right, over a 1px ink rule.

### Focus and selection
`:focus-visible` is a 2px red outline at 3px offset on every surface. Text selection inverts the ground: soot on paper bands with paper text, paper on soot bands.

## Do's and Don'ts

### Do:
- **Do** keep red to the mark and the focus ring.
- **Do** alternate soot and paper bands and divide content with 1px rules.
- **Do** set headings in Montserrat 700 sentence case, body in 400, titles in 600.
- **Do** align new content to the shared grid edges at columns 1, 5 and 9.
- **Do** derive the lockup from tile height `--h` and use the tile-only mark for sizes this small (14px).
- **Do** keep button addresses lowercase and buttons outlined.
- **Do** honour reduced motion by showing the finished mark at once.

### Don't:
- **Don't** fill a button, background or text with red.
- **Don't** add cards, shadows, gradients, icons or illustrations.
- **Don't** put eyebrows, kickers or mono labels above headings.
- **Don't** add neutrals beyond the four above.
- **Don't** bring back terminal or CRT effects from the old site.
- **Don't** let motion gate content or buttons.

## Open items and recorded exceptions

- **Sanctioned exception:** Montserrat under the overused-font ignore, because the Identity Guidelines v1.0 pin it and the user chose "the guide is the world".
- **Awaiting user approval:** the line "A small crew with a big crew behind it." is the guide's own and is unverified for a business reader. Copy was drafted from the guide's voice; no new claims are invented.
- **Provenance:** `npm run brand:assets` regenerates the rasters (favicon-16/32, apple-touch-icon, icon-512, og-1200x630) and drops their embedded provenance; run `impeccable embed-prompt` afterwards.
