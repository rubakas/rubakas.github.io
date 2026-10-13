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
  wordmark-small:
    fontFamily: "Montserrat, system-ui, sans-serif"
    fontSize: "15px"
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
  selection:
    backgroundColor: "{colors.slate-light}"
    textColor: "{colors.soot}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    rounded: "{rounded.button}"
    padding: "12px 28px"
    height: "48px"
  button-outline-hover:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.soot}"
  button-outline-active:
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
  lede-line:
    textColor: "{colors.slate-light}"
    typography: "{typography.lede}"
  cover-wordmark:
    textColor: "{colors.paper}"
    typography: "{typography.wordmark}"
  footer-wordmark:
    textColor: "{colors.paper}"
    typography: "{typography.wordmark-small}"
  running-marker:
    backgroundColor: "{colors.red}"
    size: "14px"
---

# Design System: Rubakas

## Overview

**Creative North Star: "The Lock-in"**

A cube tumbles on the cover, overshoots, and locks into the cut tile. That is the system in one motion: discipline and convention settling into a single result. The cut tile remains the mark; the Lock-in is the idea that organises everything around it. The page is a sequence of flat grounds, soot (night) and paper (day), joined by one-pixel rules, and it ends where it began, on the finished tile.

The voice is confident and sparse. Boldness comes from omission: one red moment, large empty grounds, nothing decorative. With the words removed, what remains is a black band, a red tile, and one tracked wordmark. The system is the Rubakas Identity Guidelines v1.0, built as the guide's world, with a few recorded departures (see Open items).

Confirmed rejections: no cards, shadows, gradients, icons or imagery apart from the mark; no kickers or eyebrows; the old amber CRT terminal look is retired. Montserrat is used under an Impeccable overused-font ignore (`.impeccable/config.json`) because the guide pins it and the user chose "the guide is the world". That is a sanctioned exception, not an endorsement of the face.

**Key Characteristics:**
- Two grounds only: soot night bands (cover, close, footer, not-found) and paper day bands.
- One red, in the mark and the focus ring only.
- Montserrat 700 sentence-case headings; IBM Plex Mono capitals for the tagline and buttons only.
- Flat: 1px rules instead of cards or shadows; outline-only buttons.
- One 12-column grid with shared edges at columns 1, 5 and 9.
- Motion exists once: the mark's Lock-in on the home cover.

## Colors

Three brand colours, one of them red, plus four neutrals taken from the guide's own pages; nothing else is tinted.

### Primary
- **Mark Red** (`{colors.red}`): the mark (cube, finished tile, the 14px running marker) and the `:focus-visible` outline. Nothing else.

### Neutral
- **Soot** (`{colors.soot}`): night ground; ink and 1px rules on day bands; the page background so overscroll never shows another colour; text inside selections.
- **Paper** (`{colors.paper}`): day ground; text and button outline on night bands.
- **Ink** (`{colors.ink}`): body copy on paper; the footer rule on soot; secondary text when printed.
- **Slate** (`{colors.slate}`): scrollbar thumb; the underline of the footer link.
- **Slate Light** (`{colors.slate-light}`): secondary text on soot (lede, close subline, not-found line, footer link); the selection highlight.
- **Hairline** (`{colors.hairline}`): the rule under the running marker on paper.

Selection is one component token, `selection`: Slate Light background with soot text (6.96:1 text contrast; the highlight stands clear of soot at 6.96:1 and of paper at 2.5:1). It replaces the earlier per-ground inversion, so no separate light and dark selection tokens exist. A single global `::selection` rule carries it, and a test guards it on both a night and a day element.

### Named Rules
**The One Red Rule.** Red is the mark and the focus ring. It is never a background, a button fill, a link colour or body text.

**The Two Grounds Rule.** Every band is soot with paper text or paper with soot text. No third ground, no tints between them.

**The One Selection Rule.** Selected text is Slate Light with soot text on every ground. Do not add a second selection colour per ground.

## Typography

**Display Font:** Montserrat (with system-ui, sans-serif), variable 100-900, self-hosted
**Body Font:** Montserrat
**Label/Mono Font:** IBM Plex Mono 400 (with ui-monospace, monospace), self-hosted

**Character:** A geometric sans carries the voice; a typewriter-plain mono serves the two places that behave like labels. Hierarchy comes from weight and size, never colour.

### Hierarchy
- **Wordmark** (`{typography.wordmark}`; 700, 0.414 of tile height `--h`, line-height 1, +0.2em tracking, uppercase): the cover lockup. 0.2em of left padding restores optical centre.
- **Wordmark Small** (`{typography.wordmark-small}`; 700, 15px, +0.2em, uppercase): the documented footer step, set beside the 32px mark.
- **Headline** (700, clamp 2rem to 3.75rem, 1.08, -0.01em, max 18ch, balanced): band headings and the not-found heading, sentence case.
- **Title** (600, clamp 1.375rem to 1.875rem, 1.2): offer names.
- **Title Small** (600, 1.25rem, 1.25): principle headings.
- **Body** (400, clamp 1.0625rem to 1.25rem, 1.6, ink, 46-56ch): offer and crew copy. **Body Small** (400, 1.0625rem, 1.6, 34ch) for principles.
- **Lede** (400, clamp 1rem to 1.25rem, 1.5, slate-light, 34ch): the single sentence under the lockup.
- **Tagline** (Plex Mono 400, 0.157 of `--h` with an 11px floor, +0.12em, uppercase): "The dice. Not the roll", once, in the lockup.
- **Label** (Plex Mono 400, 0.8125rem, +0.12em, uppercase): buttons. The footer GitHub link uses the same face and size at +0.06em, lowercase, as a link rather than a label.

### Named Rules
**The No Kicker Rule.** There are no eyebrows, kickers or labels above headings. Mono capitals are the tagline and buttons only.

**The Copyable Address Rule.** An email address on a button stays lowercase (+0.04em tracking, no uppercase transform), because people copy it.

**The Sentence Case Rule.** Headings are sentence case; only the wordmark, tagline and buttons are uppercase.

## Layout

One twelve-column grid (gap `{spacing.col-gap}`) runs through every band from 48rem up. Content width is min(100% minus two gutters, 72rem) with gutter `{spacing.gutter}`. Shared edges are columns 1, 5 and 9: an offer name spans 1-4 and its description 5-12; principles are equal thirds starting at 1, 5, 9; the close copy spans 1-8 and the mark 9-12; from 64rem the crew heading spans 1-8 and its paragraph 9-12. Below 48rem everything stacks to one column and the close mark leads the copy. Long words and the address wrap (`overflow-wrap: anywhere`) rather than widen the page when text is enlarged.

Band rhythm: day bands pad `{spacing.band-y}` top and bottom, and two consecutive day bands share one gap (the second drops its top padding). The running marker sits `{spacing.rule-gap}` above the heading. Offer rows pad 28px (40px from 48rem). The close pads clamp(72px, 11vw, 144px) above and clamp(56px, 8vw, 96px) below. Page order: cover (night), two day bands, close (night), footer (night).

The cover is 100svh with the lockup centred. It scales from tile height `--h` = clamp(88px, min(28vw, 30svh), max(220px, 15vw)): 220px up to about 1466px wide, then growing (288px at 1920, 576px at 4K). Wordmark, tagline, and the 0.257 gap and top margin all derive from `--h`.

**Short screens** (under 32rem tall, a phone on its side): `--h` = clamp(64px, 22svh, 120px), cover padding 20px, a 56ch lede and tighter spacing so the button stays on the first screen.

**Print:** every band becomes soot on white, secondary text becomes ink, outlined buttons turn soot, the mark keeps its red (`print-color-adjust: exact`), and headings, rows and principles do not break across pages.

**Forced colors:** no author overrides are written; the browser's forced-colors mode collapses every ground to system colours, while the 1px rules, button borders and focus outline remain visible because they are borders and outlines, not fills. Checked in Chromium's forced-colors emulation: everything stays legible, and the red mark keeps its fill (SVG fills are not overridden). Not checked in Windows high-contrast mode itself.

**Touch:** the footer GitHub link keeps a 44px minimum height; buttons are 48px.

## Elevation & Depth

Flat. No shadows, no blur, no gradients, no z-layers. Depth is only the alternation of soot and paper grounds and 1px rules: soot on paper, ink on the footer, hairline under the running marker.

### Named Rules
**The No Card Rule.** Content is separated by a 1px rule above or below it, never by a box, fill or shadow.

## Shapes

Geometry comes from the mark: a 100x100 square with the top-left and bottom-right corners cut at 45 degrees, and a Montserrat ExtraBold R as an evenodd hole that takes the ground colour. It is the only non-rectangular shape. The 14px running marker is the tile alone (the `solid` form). Everything else is rectangular with hard hairlines; the only radius is the buttons' 6px.

The favicon follows the mark: `favicon.svg` and the 32px PNG carry the R, the 16px PNG is the solid tile; apple-touch-icon, 512px icon and the 1200x630 link card (showing rubakas.com) come from `scripts/build-brand-assets.mjs`.

## Components

Restrained: outline-only, never a fill at rest.

### Mark
Signature component. The finished mark (tile with R hole) appears on the cover, in the close (88px stacked; fills columns 9-12 from 48rem), in the 32px footer lockup, and on the not-found page (96px). The `solid` tile is used only for the 14px running marker.

The Lock-in plays only on the home cover: the intro flag is set in the document head only on pathname `/` and only if motion is welcome. From 0.3s a flat red cube (the tile's cabinet-projection silhouette, a convex hull of a rotated cube) tumbles two turns about X and one about Y with an in-out-back ease, locks at 2.7s, and the R cuts in with a 4% scale pulse (0.36s, cubic-bezier(0.16, 1, 0.3, 1)). Reduced-motion and no-JS visitors get the finished mark at once. The flag holds a 3.5s failsafe timer id that restores the finished mark if hydration stalls; the component cancels it on mount and clears the flag if it unmounts mid-intro. Text and buttons are visible from first paint; motion never gates content.

### Buttons
One shared outline button in `src/app.css`; pages add only margins and the address variant.
- **Shape:** 6px radius, 48px minimum height, 28px side padding, 1px currentColor border.
- **Style:** paper outline on soot, Plex Mono 0.8125rem uppercase, +0.12em. No fill at rest.
- **Hover and press:** inverts to a paper fill with soot text over 0.18s cubic-bezier(0.16, 1, 0.3, 1). Hover applies only where a pointer can hover (`(hover: hover)`); on touch the same inversion shows as `:active`, so it never sticks.
- **Focus:** the global red ring (2px solid red, 3px offset).
- **Address variant:** the lowercase email, +0.04em tracking.

### Spec-sheet rows (offers)
A definition list between two 1px soot rules; each row pairs an offer name (Title) with its description (Body, ink). Two columns on the 1/5 edges from 48rem, stacked below.

### Principles
Three items, each topped by a 1px soot rule with 20px padding, a Title Small heading and a 34ch Body Small paragraph; equal thirds from 48rem.

### Running marker
A 14px solid tile above day-band headings on a 1px hairline rule. Wordless and decorative (`aria-hidden`).

### Footer lockup
A 32px finished mark, 14px gap, and the 15px wordmark on the left; the mono GitHub link (slate-light, underlined in slate, paper on hover where a pointer can hover) on the right, over a 1px ink rule.

### Not-found page
A night page at `/404`, built to `404.html` for GitHub Pages: the finished mark at 96px, a Headline "Page not found.", one Body line in slate-light, and an outlined button home. It is `noindex`, plays no intro, and uses absolute asset paths (`paths.relative: false`) so it renders at any mistyped depth. It also has print rules (soot on white).

### Focus and selection
`:focus-visible` is a 2px red outline at 3px offset on every surface. Selection is the single `selection` token (see Colors).

## Do's and Don'ts

### Do:
- **Do** keep red to the mark and the focus ring.
- **Do** alternate soot and paper bands and divide content with 1px rules.
- **Do** set headings in Montserrat 700 sentence case, body in 400, titles in 600.
- **Do** align new content to the shared grid edges at columns 1, 5 and 9.
- **Do** derive the lockup from tile height `--h`; use the tile-only mark for the 14px marker.
- **Do** keep button addresses lowercase and buttons outlined.
- **Do** show the finished mark at once for reduced motion and without JavaScript.
- **Do** put pointer-only hover styles behind `(hover: hover)` and pair them with `:active`.
- **Do** keep the one selection colour (Slate Light with soot text) on every ground.

### Don't:
- **Don't** fill a button, background, link or text with red.
- **Don't** add cards, shadows, gradients, icons or illustrations.
- **Don't** put eyebrows, kickers or mono labels above headings.
- **Don't** add neutrals beyond the six named above and the two brand grounds.
- **Don't** bring back terminal or CRT effects from the old site.
- **Don't** let motion gate content or buttons.

## Open items and recorded departures

- **Sanctioned exception:** Montserrat under the overused-font ignore, because the guide pins it and the user chose "the guide is the world".
- **Awaiting approval:** "A small crew with a big crew behind it." is the guide's own line; it and the rest of the drafted copy (cover lede, offers, crew paragraph, principles, close, not-found line) await the user's approval.
- **Departure, favicon:** the guide says "solid tile, no R" and drops the R from 16 to 23px; by the owner's call the SVG and 32px PNG carry the R. The 16px PNG stays solid.
- **Not a departure, lockup proportions:** the guide's clear-space page gives the primary (horizontal) lockup as wordmark 0.47 H, tile-to-wordmark gap 0.3 H, descriptor 0.17 H, and the 1200x630 link card follows those. The cover uses the guide's stacked lockup, with 0.414 H wordmark, 0.257 H gaps and 0.157 H descriptor, as measured from the guide's stacked artwork. Two lockups, two sets of proportions.
- **Departure, descriptor and tagline:** the guide's HTML descriptor "agent crew · rails-born" is replaced by "The dice. Not the roll" per the newer PDF lockups.
- **Departure, body size:** the guide's body is 15/24; the page sets 17-20px at 1.6.
- **Not adopted from the guide's own page:** red link underlines and a red link hover. This is deliberate: the guide itself says red is never body text, and the build keeps links out of red.
- **Provenance:** `npm run brand:assets` regenerates the rasters and drops their embedded provenance; rerun `impeccable embed-prompt` afterwards.
