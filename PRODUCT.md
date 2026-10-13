# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: businesses deciding whether to bring in a small crew to build, advise on, or look after their AI-driven systems and technology. Confirmed as client-first.

Secondary: developers who reach the site through the crew's GitHub presence (github.com/rubakas) and judge the crew by how it works.

## Product Purpose

rubakas.com (this repo, rubakas/rubakas.github.io, published on GitHub Pages with a custom domain) is the public front door of Rubakas, a small crew that runs AI agents on real software work. It exists so a visitor can tell, quickly, who the crew is and what they can be hired for, and reach them by email (contact@rubakas.com). It is a single static page plus a branded not-found page, not an application.

## Positioning

A small crew with a big crew behind it: friends who spent years building for the web with Ruby on Rails and now run crews of AI agents, and build the tooling that keeps those agents disciplined (hardened specs, clear roles, honest review). Humans lead: agents draft, people decide. This is the account in the Identity Guidelines; the user chose to merge it with the existing services copy, leading with the crew identity and presenting the services as what the crew can be hired for.

## Operating Context

- Static SvelteKit site, prerendered and published to GitHub Pages at https://rubakas.com (custom domain, HTTPS enforced) by one GitHub Actions workflow, `.github/workflows/deploy.yml`, on every push to `main`. It uploads `build/` only; the older `static.yml`, which uploaded the whole repository, was removed because it raced the real deploy. No backend, no forms; contact is a `mailto:` link.
- Contact: contact@rubakas.com. Code and open-source presence: github.com/rubakas.
- The identity guide's footers cite rubakas.com, and the site is served there. The guide's own to-do list says trademark and domain checks are still outstanding.

## Capabilities and Constraints

Confirmed offerings the site may state:

- AI consulting and strategy: AI orchestration, development, consulting and strategy.
- Tech support or full maintenance.

Not confirmed for the site (undecided; do not state as fact until the user says so):

- `agent-notes`, the open-source tooling shown in the identity guide's sample applications (MIT, 19 agents, 3 tiers, `pipx install agent-notes`).
- Plugari (plugari.com), linked from the previous page as "our product". The rebuilt page does not link it, and whether it may return is undecided.
- The drafted page copy: the cover lede, the two offers, the crew paragraph, the three principles, the close and the not-found line were written for the rebuild and await the user's approval. "A small crew with a big crew behind it." is the guide's own line and is unverified for a business reader.

Terminology: "crew", "agents draft, people decide", "review". Avoid framing the work as autonomy or magic.

## Brand Commitments

- Name: Rubakas, from Russian рубака (rubaka), from рубить, "to hew": shaping raw output into clean work. The guide keeps the hew-and-carve reading and leaves blades out.
- Voice, per the guide: plain-spoken (short sentences, no hype about AI, no magic); convention over improvisation (the Rails habit applied to machines); humans lead (talk about review, not autonomy). Headings in sentence case.
- The user supplied the Identity Guidelines v1.0 (October 2026) as the reference for this rebrand. Both files are in `docs/brand/`: `rubakas-brand-guide.pdf` and `rubakas-identity-guidelines.dc.html`. The user confirmed the guide is the visual world for the site: its palette, typefaces, mark, lockups and tone are fixed, and the old amber CRT terminal look is retired.
- Favicon: `favicon.svg` and `favicon-32.png` carry the R, by the user's call. The guide's favicon line says "solid tile, no R" and drops the R from 16 to 23 px, so `favicon-16.png` stays the solid tile.
- Link preview card (1200 x 630): the day lockup in its primary form with `rubakas.com` bottom right. The guide specifies only the size.
- **Tagline: "The dice. Not the roll"**, set under the wordmark as in the newer PDF lockups (exported 14 Oct 2026). This supersedes the descriptor "agent crew · rails-born" from the earlier HTML (v1.0, 11 Oct 2026), which the user did not choose for the page. The PDF also shortlists two voice lines, "The human is the loop." and "Taste is load-bearing."; neither is confirmed for the site.

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
