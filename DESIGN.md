---
name: Rubakas
description: Taste is load-bearing. A small crew running AI agents on real software work.
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
    fontSize: "clamp(1.25rem, 1rem + 0.9vw, 1.5rem)"
    fontWeight: 600
    lineHeight: 1.25
  body:
    fontFamily: "Montserrat, system-ui, sans-serif"
    fontSize: "clamp(1.0625rem, 1rem + 0.35vw, 1.25rem)"
    fontWeight: 400
    lineHeight: 1.6
  body-sm:
    fontFamily: "Montserrat, system-ui, sans-serif"
    fontSize: "clamp(1.0625rem, 1rem + 0.25vw, 1.1875rem)"
    fontWeight: 400
    lineHeight: 1.6
  lede:
    fontFamily: "Montserrat, system-ui, sans-serif"
    fontSize: "clamp(1.125rem, 0.95rem + 0.6vw, 1.375rem)"
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
    fontSize: "max(19px, 1.1875rem)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.12em"
rounded:
  button: "0"
spacing:
  gutter: "clamp(20px, 5vw, 64px)"
  col-gap: "clamp(20px, 2.5vw, 40px)"
  band-y: "clamp(72px, 11vw, 144px)"
  rule-gap: "clamp(40px, 6vw, 72px)"
  button-x: "36px"
  button-cut: "15.7px"
components:
  selection:
    backgroundColor: "{colors.slate-light}"
    textColor: "{colors.soot}"
  button:
    backgroundColor: "{colors.red}"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    rounded: "{rounded.button}"
    padding: "14px 36px"
    height: "60px"
  button-hover:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.soot}"
  button-active:
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
    textColor: "{colors.paper}"
    typography: "{typography.lede}"
  cover-wordmark:
    textColor: "{colors.paper}"
    typography: "{typography.wordmark}"
  footer-wordmark:
    textColor: "{colors.paper}"
    typography: "{typography.wordmark-small}"
  running-marker:
    backgroundColor: "{colors.red}"
    size: "24px"
---

# Design System: Rubakas

## Overview

**Creative North Star: "The Lock-in"**

A cube, drawn as a red line, tumbles on the cover, overshoots, and locks into the cut tile, where the R fills in. That is the system in one motion: discipline and convention settling into a single result. The cut tile remains the mark, now drawn as a line with a solid R inside; the Lock-in is the idea that organises everything around it. The page is a sequence of flat grounds, soot (night) and paper (day), joined by one-pixel rules, and it ends where it began, on the mark.

The voice is confident and sparse. Boldness comes from omission: red only in the mark and the one call to action, large empty grounds, nothing decorative. With the words removed, what remains is a black band, a red outlined tile with a red R, and one tracked wordmark. The system is the Rubakas Identity Guidelines v1.0, built as the guide's world, with a few recorded departures (see Open items).

Confirmed rejections: no cards, shadows, gradients, icons or imagery apart from the mark; no kickers or eyebrows; the old amber CRT terminal look is retired. Montserrat is used under an Impeccable overused-font ignore (`.impeccable/config.json`) because the guide pins it and the user chose "the guide is the world". That is a sanctioned exception, not an endorsement of the face.

**Key Characteristics:**
- Two grounds only: soot night bands (cover, close, footer, not-found) and paper day bands.
- One red, in the mark, the focus ring and the call-to-action tile only.
- Montserrat 700 sentence-case headings; IBM Plex Mono capitals for the tagline and buttons only (the buttons in bold).
- Flat: 1px rules instead of cards or shadows; one solid red button, cut like the mark.
- One 12-column grid with shared edges at columns 1, 5 and 9.
- Motion exists once: the mark's Lock-in on the home cover. The one other movement is the browser's own smooth scroll when a running marker or the footer logo is pressed (see Running marker); it is the page getting somewhere, not decoration.

## Colors

Three brand colours, one of them red, plus four neutrals taken from the guide's own pages; nothing else is tinted.

### Primary
- **Mark Red** (`{colors.red}`): the mark (the contour and its R, the cube line in the intro, the solid mark in the footer and in the running markers), the `:focus-visible` outline and the call-to-action tile. Nothing else.

### Neutral
- **Soot** (`{colors.soot}`): night ground; ink and 1px rules on day bands; the page background so overscroll never shows another colour; text inside selections.
- **Paper** (`{colors.paper}`): day ground; text on night bands (the lede included), the call-to-action label and its hover fill.
- **Ink** (`{colors.ink}`): body copy on paper; the footer rule on soot; secondary text when printed.
- **Slate** (`{colors.slate}`): scrollbar thumb; the underline of the footer link.
- **Slate Light** (`{colors.slate-light}`): secondary text on soot (close subline, not-found line, footer link, the wordmark on hover); the selection highlight. The lede is paper, not Slate Light: it is the one sentence that says what the crew does.
- **Hairline** (`{colors.hairline}`): the rule under the running marker on paper.

Selection is one component token, `selection`: Slate Light background with soot text (6.96:1 text contrast; the highlight stands clear of soot at 6.96:1 and of paper at 2.5:1). It replaces the earlier per-ground inversion, so no separate light and dark selection tokens exist. A single global `::selection` rule carries it, and a test guards it on both a night and a day element.

### Named Rules
**The One Red Rule.** Red is the mark, the focus ring and the call-to-action tile. It is never a band ground, a link colour or body text. Paper on that tile is 4.15:1, which is why its label is large bold text (see Buttons).

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
- **Title Small** (600, clamp 1.25rem to 1.5rem, 1.25): principle headings.
- **Body** (400, clamp 1.0625rem to 1.25rem, 1.6, ink, 46-56ch): offer and crew copy. **Body Small** (400, clamp 1.0625rem to 1.1875rem, 1.6, 34ch) for principles.
- **Lede** (400, clamp 1.125rem to 1.375rem, 1.5, paper, 34ch): the single sentence under the lockup, set at full strength.
- **Tagline** (Plex Mono 400, 0.157 of `--h` with an 11px floor, +0.12em, uppercase): "Taste is load-bearing", once, in the lockup.
- **Label** (Plex Mono 700, `max(19px, 1.1875rem)`, +0.12em, uppercase): buttons; see Buttons for why it must stay bold and large. The footer GitHub link is a separate step, Plex Mono 400 at 0.8125rem and +0.06em, lowercase, as a link rather than a label.

### Named Rules
**The No Kicker Rule.** There are no eyebrows, kickers or labels above headings. Mono capitals are the tagline and buttons only.

**The All-Caps Button Rule.** Every button is set in capitals, the email address too. The caps come from CSS, so the text in the page stays lowercase and the `mailto:` link is unchanged; addresses are not case-sensitive in practice.

**The Sentence Case Rule.** Headings are sentence case; only the wordmark, tagline and buttons are uppercase.

## Layout

One twelve-column grid (gap `{spacing.col-gap}`) runs through every band from 48rem up. Content width is min(100% minus two gutters, 72rem) with gutter `{spacing.gutter}`. Shared edges are columns 1, 5 and 9: an offer name spans 1-4 and its description 5-12; principles are equal thirds starting at 1, 5, 9; the close copy spans 1-8 and the mark 9-12; from 64rem the crew heading spans 1-8 and its paragraph 9-12. Below 48rem everything stacks to one column and the close mark leads the copy. Long words and the address wrap (`overflow-wrap: anywhere`) rather than widen the page when text is enlarged.

Band order: cover, the crew band (who we are, with the principles), the offers band (what the crew can be hired for), the close. Band rhythm: day bands pad `{spacing.band-y}` top and bottom, and two consecutive day bands share one gap (the second drops its top padding). The running marker sits `{spacing.rule-gap}` above the heading. Offer rows pad 28px (40px from 48rem). The close pads clamp(72px, 11vw, 144px) above and clamp(56px, 8vw, 96px) below. Page order: cover (night), two day bands, close (night), footer (night).

The cover is 100svh with the lockup centred. It scales from tile height `--h` = clamp(88px, min(28vw, 30svh), max(220px, 15vw)): 220px up to about 1466px wide, then growing (288px at 1920, 576px at 4K). Wordmark, tagline, and the 0.257 gap and top margin all derive from `--h`.

**Short screens** (under 32rem tall, a phone on its side): `--h` = clamp(64px, 22svh, 120px), cover padding 20px, a 56ch lede and tighter spacing so the button stays on the first screen.

**Print:** every band becomes soot on white, secondary text becomes ink, buttons become a soot-bordered rectangle, the mark keeps its red (`print-color-adjust: exact`), and headings, rows and principles do not break across pages.

**Forced colors:** no author overrides are written; the browser's forced-colors mode collapses every ground to system colours, while the 1px rules, button borders and focus outline remain visible because they are borders and outlines, not fills. Checked in Chromium's forced-colors emulation: everything stays legible, and the red mark keeps its fill (SVG fills are not overridden). Not checked in Windows high-contrast mode itself.

**Touch:** the footer GitHub link and the footer logo keep a 44px minimum height, the running markers have a 44px target around the 24px mark, and buttons are 60px.

## Elevation & Depth

Flat. No shadows, no blur, no gradients, no z-layers. Depth is only the alternation of soot and paper grounds and 1px rules: soot on paper, ink on the footer, hairline under the running marker.

### Named Rules
**The No Card Rule.** Content is separated by a 1px rule above or below it, never by a box, fill or shadow.

## Shapes

Geometry comes from the mark: a 100x100 square with the top-left and bottom-right corners cut at 45 degrees, and a Montserrat ExtraBold R. The mark on the page is that tile drawn as a 7-unit red line, half a stroke inside the tile edge so its outer edge is the tile's, with the R as a solid red letter inside it. The guide's own form, the tile filled with the R cut out of it as an evenodd hole, survives in the footer and in the 24px running markers, where a line would thin to a hairline (the guide keeps the R from 24px up, so the R is cut out there too). It is the only non-rectangular shape. Everything else is rectangular with hard hairlines, and nothing has a radius: the buttons borrow the mark's cut instead (see Buttons).

The favicon follows the mark: `favicon.svg` and the 32px PNG are the contour with the R on a 12-unit line, the 16px PNG is an 18-unit line with no R; apple-touch-icon, 512px icon and the 1200x630 link card (the contour with the R on a 7-unit line) (showing rubakas.com) come from `scripts/build-brand-assets.mjs`.

## Components

Restrained: one button, a solid red tile cut like the mark.

### Mark
Signature component. The mark (the contour with a solid R) appears on the cover, in the close (88px stacked; fills columns 9-12 from 48rem) and on the not-found page (96px). The `solid` form, the guide's filled tile with the R cut out, is for the 32px footer lockup and the 24px running markers. From 32px up the standard line and the R hold; below that they thin out, so use the solid form there.

The Lock-in plays only on the home cover: the intro flag is set in the document head only on pathname `/` and only if motion is welcome. From 0.3s a red line in the shape of a cube (the tile's cabinet-projection silhouette, a convex hull of a rotated cube, drawn at the contour's scale so that it lands on the contour) tumbles two turns about X and one about Y with an in-out-back ease, locks at 2.7s, and the R fills in with a 4% scale pulse (0.36s, cubic-bezier(0.16, 1, 0.3, 1)). Reduced-motion and no-JS visitors get the finished mark at once. The flag holds a 3.5s failsafe timer id that restores the finished mark if hydration stalls; the component cancels it on mount and clears the flag if it unmounts mid-intro. Text and buttons are visible from first paint; motion never gates content.

### Buttons
One shared button in `src/app.css`; pages add only margins.
- **Shape:** the mark's cut: the top-left and bottom-right corners cut at 45 degrees, by 26.12% of the button height (15.7px on the 60px button), the tile's own ratio. 60px minimum height, 36px side padding (20px under 24rem, so the address breaks at its space and never inside the word). The fill is one clipped layer behind the label (`::before`), because a fill cannot take the cut with a radius and `clip-path` on the button would clip its focus ring. Print and forced colours drop backgrounds, so they fall back to a plain 1px bordered rectangle.
- **Style:** red `{colors.red}` fill, paper label in Plex Mono 700, uppercase, +0.12em (+0.06em under 24rem), `max(19px, 1.1875rem)`. Paper on this red is 4.15:1, below the 4.5:1 small text needs, so the label must stay bold and at least 18.66px, where WCAG asks 3:1; a test guards both. Do not shrink the label or drop its weight.
- **Hover and press:** the red fill inverts to paper with a soot label (17.3:1) over 0.18s cubic-bezier(0.16, 1, 0.3, 1). Hover applies only where a pointer can hover (`(hover: hover)`); on touch the same inversion shows as `:active`, so it never sticks.
- **Focus:** the global red ring (2px solid red, 3px offset), a rectangle around the cut shape.

### Spec-sheet rows (offers)
A definition list between two 1px soot rules; each row pairs an offer name (Title) with its description (Body, ink). Two columns on the 1/5 edges from 48rem, stacked below.

### Principles
Three items (Human *is* the loop, Main thing, Collaboration is a must), each topped by a 1px soot rule with 20px padding, a Title Small heading and a 34ch Body Small paragraph; equal thirds from 48rem. "Human *is* the loop" comes first: it is the claim a competitor cannot copy, so it takes the first column. Its "is" is set in `<em>`, italic, the page's one italic: Montserrat's italic is an oblique (a slanted upright), so the browser's synthesized slant stands in for it and no italic file is loaded. They answer the headline above them, which states the proposition (building faster is the small win, a redrawn value chain the big one; the items are how the crew runs the redrawn chain). The headline runs three lines at desktop, and the 46ch paragraph beside it is the longest text block on the page.

### Running marker
A 24px solid mark (the `solid` form, R cut out) above day-band headings on a 1px hairline rule. It is a link to its own section (`href="#work"`, `href="#crew"`), and pressing it scrolls that section to the top: the marker lands `--land` from the top of the screen (`clamp(28px, 4vw, 56px)`, the same for both sections, so the second band's lack of top padding does not show). The target is 44px, with the mark centred in it; on hover and press the tile turns soot, as the button turns paper; focus is the global red ring around the target. The page glides there with the browser's own smooth scroll, only for visitors who have not asked for reduced motion; they, and visitors without JavaScript, get a plain jump. Smooth scrolling is requested only while an in-page link has just been pressed (`html[data-glide]`, set in `+page.svelte` for two seconds), never for the whole page: otherwise a reload would run the restored scroll position down from the top. Each link is named for its heading, for example "Scroll to the top of this section: What is in our focus".

### Footer lockup
A 32px solid red mark (the guide's tile with the R cut out), 14px gap, and the 15px wordmark on the left, the two together one link to the top of the page (`href="#top"`, the wordmark turns slate-light on hover where a pointer can hover, 44px target, the global red focus ring);  the mono GitHub link (slate-light, underlined in slate, paper on hover where a pointer can hover) on the right, over a 1px ink rule.

### Not-found page
A night page at `/404`, built to `404.html` for GitHub Pages: the mark at 96px, a Headline "Page not found.", one Body line in slate-light, and a red button home. It is `noindex`, plays no intro, and uses absolute asset paths (`paths.relative: false`) so it renders at any mistyped depth. It also has print rules (soot on white).

### Focus and selection
`:focus-visible` is a 2px red outline at 3px offset on every surface. Selection is the single `selection` token (see Colors).

## Do's and Don'ts

### Do:
- **Do** keep red to the mark and the focus ring.
- **Do** alternate soot and paper bands and divide content with 1px rules.
- **Do** set headings in Montserrat 700 sentence case, body in 400, titles in 600.
- **Do** align new content to the shared grid edges at columns 1, 5 and 9.
- **Do** derive the lockup from tile height `--h`; use the solid mark, not the line, for the 24px marker, and keep the marker a link to its own section.
- **Do** set every button in capitals, the email address included, and keep them bold, at least 19px.
- **Do** show the finished mark at once for reduced motion and without JavaScript, and jump instead of gliding when a marker or the footer logo is pressed.
- **Do** put pointer-only hover styles behind `(hover: hover)` and pair them with `:active`.
- **Do** keep the one selection colour (Slate Light with soot text) on every ground.

### Don't:
- **Don't** fill a link, text or a band with red. The mark and the call-to-action tile are the only red fills.
- **Don't** add cards, shadows, gradients, icons or illustrations.
- **Don't** put eyebrows, kickers or mono labels above headings.
- **Don't** add neutrals beyond the six named above and the two brand grounds.
- **Don't** bring back terminal or CRT effects from the old site.
- **Don't** let motion gate content or buttons.
- **Don't** set `scroll-behavior: smooth` on the whole page: it animates the scroll restored after a reload.

## Open items and recorded departures

- **Sanctioned exception:** Montserrat under the overused-font ignore, because the guide pins it and the user chose "the guide is the world".
- **Awaiting approval:** the drafted copy (cover lede, offers, crew band, close, not-found line) awaits the user's approval. The crew band comes from the user's proposition (see PRODUCT.md) and awaits final wording.
- **Departure, headline:** the guide's line "A small crew with a big crew behind it." is no longer the crew band's headline; the band argues the proposition instead. The guide's HTML still shows the line.
- **Departure, favicon:** the guide says "solid tile, no R" and drops the R from 16 to 23px. The favicons are the contour now; by the owner's call the SVG and 32px PNG carry the R, and the 16px PNG is the heavy line with no R.
- **Not a departure, lockup proportions:** the guide's clear-space page gives the primary (horizontal) lockup as wordmark 0.47 H, tile-to-wordmark gap 0.3 H, descriptor 0.17 H, and the 1200x630 link card follows those. The cover uses the guide's stacked lockup, with 0.414 H wordmark, 0.257 H gaps and 0.157 H descriptor, as measured from the guide's stacked artwork. Two lockups, two sets of proportions.
- **Departure, descriptor and tagline:** the guide's HTML descriptor "agent crew · rails-born" and the newer PDF lockups' "The dice. Not the roll" are replaced by "Taste is load-bearing", the owner's choice. It is one of the guide's own shortlisted voice lines, spelled hyphenated as there. The link card carries it too.
- **Departure, button shape and colour:** the guide shows no button. The owner asked for the mark's cut corners, and chose a solid red tile over the paper outline after seeing four options side by side (paper outline, red fill, red outline, paper fill). It spends the page's only extra red and costs contrast (paper on red is 4.15:1), paid for by the large bold label. The guide's rule that red is never body text stands.
- **Departure, body size:** the guide's body is 15/24; the page sets 17-20px at 1.6.
- **Not adopted from the guide's own page:** red link underlines and a red link hover. This is deliberate: the guide itself says red is never body text, and the build keeps links out of red.
- **Departure, the mark is a contour:** the guide has one mark, the solid red tile with the R cut out. By the owner's request, to keep red from being spent on the logo, the logos on the cover, the close and the not-found page, the favicons, the app icons and the link card are the tile as a red line with the R as a solid red letter (geometry in `src/lib/mark.js`, drawing in `Mark.svelte`). The line is 7 units of the 100-unit tile (about half the R's stem), so the outer edge is exactly the solid tile's and any form can stand in for another at the same size. The footer keeps the guide's solid tile and is a link to the top of the page, and the two 24px running markers are the same solid mark, both also by the owner's request (the markers began at 14px and read as stray dots). The intro cube is drawn as the same line.
- **Provenance:** `npm run brand:assets` regenerates the rasters and drops their embedded provenance; rerun `impeccable embed-prompt` afterwards.
