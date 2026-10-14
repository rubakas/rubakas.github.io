# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: businesses deciding whether to bring in a small crew to build or advise on their AI-driven systems and technology (the earlier "or look after" was dropped from the page on 14 Oct 2026, see Capabilities). Confirmed as client-first.

Secondary: developers who reach the site through the crew's GitHub presence (github.com/rubakas) and judge the crew by how it works.

## Product Purpose

rubakas.com (this repo, rubakas/rubakas.github.io, published on GitHub Pages with a custom domain) is the public front door of Rubakas, a small crew that runs AI agents on real software work. It exists so a visitor can tell, quickly, who the crew is and what they can be hired for, and reach them by email (contact@rubakas.com). It is a single static page plus a branded not-found page, not an application.

## Positioning

A small crew with a big crew behind it: friends who spent years building for the web with Ruby on Rails and now run crews of AI agents, and build the tooling that keeps those agents disciplined (hardened specs, clear roles, honest review). Humans lead: agents draft, people decide. This is the account in the Identity Guidelines; the user chose to merge it with the existing services copy, leading with the crew identity and presenting the services as what the crew can be hired for.

**The proposition the page argues (the user's insight, 14 Oct 2026).** Agentic coding is beneficial, but the question is how its gain is spent. Most teams take the speed as more of the same output and get the same results with the bottleneck moved to goal-setting, quality, handover and coordination. The old assembly line (the handovers between specialists) was built around the limit of how much one person can write; agents lift that limit, so the parts of the line that exist only because of it stop being needed. The parts that need judgment stay with people. The answer to handover is a holistic approach, a small crew holding the work together instead of passing it along. Tone: the assembly line was sensible for its time and the page does not mock it, and only the parts built around one person's output limit are said to dissolve.

Two limits on how the page may say it. The user confirmed the holistic crew "in theory", so the page states it as the crew's starting point ("we start from there") and not as a proven practice ("we hold the whole job", "the same crew that built it" stay off the page until the user confirms them). The forecast that assembly lines may go away is postponed and stays off the page. The page uses "assembly line", the user's choice over "conveyor belt".

## Operating Context

- Static SvelteKit site, prerendered and published to GitHub Pages at https://rubakas.com (custom domain, HTTPS enforced) by one GitHub Actions workflow, `.github/workflows/deploy.yml`, on every push to `main`. It uploads `build/` only; the older `static.yml`, which uploaded the whole repository, was removed because it raced the real deploy. No backend, no forms; contact is a `mailto:` link.
- Contact: contact@rubakas.com. Code and open-source presence: github.com/rubakas.
- The identity guide's footers cite rubakas.com, and the site is served there. The guide's own to-do list says trademark and domain checks are still outstanding.

## Capabilities and Constraints

Confirmed offerings the site may state:

- AI consulting and strategy: AI orchestration, development, consulting and strategy. The user names three engagements within it (14 Oct 2026): an agentic capability maturity assessment, organisational change curation, and discovery and prototyping spikes.
- Agentic-first apps and platforms: the user's stated goal and focus (14 Oct 2026). The page defines it and makes no claim of delivered work.

No longer on the page, by the user's call (14 Oct 2026): tech support or full maintenance. The user dropped it from the focus list; whether the crew still does it is not confirmed, so the page does not state it.

Not confirmed for the site (undecided; do not state as fact until the user says so):

- `agent-notes`, the open-source tooling shown in the identity guide's sample applications (MIT, 19 agents, 3 tiers, `pipx install agent-notes`).
- Plugari (plugari.com), linked from the previous page as "our product". The rebuilt page does not link it, and whether it may return is undecided.
- The drafted page copy: the cover lede, the two offers, the close and the not-found line were written for the rebuild and await the user's approval. The crew band (headline "Building faster is the small win. Redrawing the value chain is the big one.", the paragraph and the three items Human _is_ the loop, Main thing, Collaboration is a must) was drafted from the user's proposition above and awaits final approval of its wording. "A small crew with a big crew behind it." is the guide's own line; the page no longer uses it as a headline, and it was unverified for a business reader. The offers band is headed "What is in our focus" (the user's wording; it echoes the "Main thing" item, and carries no full stop, like the item headings). Its two rows: "AI consulting and strategy", a confirmed offering whose description now lists its three engagements, from the user's concepts (an assessment of the organisation's agentic capability maturity, curation of organisational change, discovery and prototyping "spikes"), in the assistant's plain words: assess how far along the client is with agents, choose which changes in how people and teams work come first and guide them, run short prototypes that answer one question before anything big is built; and "Agentic-first apps and platforms", the user's wording in place of "Tech support and maintenance" (the description, written by the assistant, says it is software designed around agents from the start, in the sense of the crew band's definition). The band ends with the two rows and carries no closing statement. The earlier items "Plain-spoken" and "Convention over improvisation" are voice rules, not client-facing items, and are off the page. The user gave the concepts for the items and the assistant wrote the words, so the wording awaits approval. The band's heading and paragraph carry the user's wider concept (14 Oct 2026): AI agents enable disruptive innovation by rearranging the value-creation chain, and the reader may not know that new software differs from old. The user wants insights, not filler, and wants the copy written from the concepts, never quoting them. The paragraph's claims, in the assistant's wording: software teams are shaped like factories because writing (code, specs, tickets, documents) was scarce; every pass between specialists cost time and meaning; agents make writing cheap, and software made with them is grown and corrected, not specified once and shipped (the assistant's definition of "different", awaiting correction); running the old routine faster captures a fraction of the gain; the rest goes to whoever reorganises the work around cheap writing, and a small crew has less to unlearn. These are the crew's theses, in the present tense, without a forecast. The three items, from the user's concepts: Human _is_ the loop (one person builds much more, repetitive work runs itself, skill gets more room), Main thing (keeping focus, from a person to an organisation), Collaboration is a must (without a fixed sequence the routine hand-offs are automated and coordination centres on a shared record of specs, code and decisions; the heading is the user's, the examples are the assistant's). The line about a person reviewing what agents produce is no longer on the page, so the word "review" is gone from it.

Terminology: "crew", "agents draft, people decide", "review". Avoid framing the work as autonomy or magic.

## Brand Commitments

- Name: Rubakas, from Russian рубака (rubaka), from рубить, "to hew": shaping raw output into clean work. The guide keeps the hew-and-carve reading and leaves blades out.
- Voice, per the guide: plain-spoken (short sentences, no hype about AI, no magic); convention over improvisation (the Rails habit applied to machines); humans lead (talk about review, not autonomy). Headings in sentence case.
- The user supplied the Identity Guidelines v1.0 (October 2026) as the reference for this rebrand. Both files are in `docs/brand/`: `rubakas-brand-guide.pdf` and `rubakas-identity-guidelines.dc.html`. The user confirmed the guide is the visual world for the site: its palette, typefaces, mark, lockups and tone are fixed, and the old amber CRT terminal look is retired.
- Favicon: the mark is now the contour (the tile as a red line, with a solid red R inside), by the user's call, so red is not spent on the logo. `favicon.svg` and `favicon-32.png` carry the R. The guide's favicon line says "solid tile, no R" and drops the R from 16 to 23 px, so `favicon-16.png` is the heavier line with no R. The footer logo keeps the guide's solid tile and links to the top of the page.
- Link preview card (1200 x 630): the day lockup in its primary form with `rubakas.com` bottom right. The guide specifies only the size.
- **Tagline: "Taste is load-bearing"**, set under the wordmark in the lockup. The user chose it on 14 Oct 2026, in place of "The dice. Not the roll", which the newer PDF lockups (exported 14 Oct 2026) carry. The spelling follows the guide's voice-line shortlist ("Taste is load-bearing."), hyphenated, and the lockup sets it without the full stop, as it did the earlier tagline. That shortlist also holds "The human is the loop."; it is not the tagline, but the user took its idea for the crew band's first item, "Human _is_ the loop" (14 Oct 2026, with the stress on "is"). The earlier descriptor "agent crew · rails-born" (HTML guide, v1.0, 11 Oct 2026) was never chosen for the page. The guide's own lockups still show "The dice. Not the roll": that is a recorded departure.

## Evidence on Hand

- Retired copy from the previous page, kept for traceability and not on the page now: three lines (TYPE: AI Orchestration, development, consulting & strategy; SCOPE: Any business, any industry; RECORD: Tech support or full maintenance) and "Your industry, your scale — We turn AI strategy into working production systems — for any business." "Any business, any industry" was dropped in the rebuild and does not return unless the user says so.
- Links on the page now: email (`mailto:`, on the cover and in the close band) and github.com/rubakas in the footer. The rebuild removed the Plugari link and a YouTube link that pointed to a well-known joke video (`dQw4w9WgXcQ`), so it was a placeholder and no real channel is confirmed.
- Assets in the repo: the web brand set in `static/` (favicon.svg, favicon-16/32.png, apple-touch-icon.png, icon-512.png, og-1200x630.png, manifest.webmanifest), generated by `scripts/build-brand-assets.mjs` (`npm run brand:assets`; regenerating drops the rasters' embedded provenance, so rerun `impeccable embed-prompt`); self-hosted Montserrat and IBM Plex Mono with their OFL licenses; and the identity guide in `docs/brand/`. The Berkeley Mono fonts, the old `static/images/` SVGs and `static/favicon.png` were removed.
- Not in the repo and not to be invented: client names, testimonials, case studies, pricing, benchmarks, demos or press. The guide's vector masters for the lockups are listed there as still to do.

## Product Principles

1. Say what the crew does, plainly. Short sentences; no AI hype.
2. Humans lead. Describe review and judgment, never autonomy.
3. Claim only what the crew can stand behind. Unconfirmed offerings and proof stay off the page until confirmed.
4. Client-first, developer-credible: a business visitor should get it at a glance, and an engineer should find nothing to wince at.
5. Convention over improvisation: one source of truth for identity (the guide), reused rather than reinvented.
