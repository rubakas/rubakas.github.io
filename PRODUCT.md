# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: businesses deciding whether to bring in a small crew to build, advise on, or look after their AI-driven systems and technology. Confirmed as client-first.

Secondary: developers who reach the site through the crew's GitHub presence (github.com/rubakas) and judge the crew by how it works.

## Product Purpose

rubakas.github.io is the public front door of Rubakas, a small crew that runs AI agents on real software work. It exists so a visitor can tell, quickly, who the crew is and what they can be hired for, and reach them by email (contact@rubakas.com). It is a single static page, not an application.

## Positioning

A small crew with a big crew behind it: friends who spent years building for the web with Ruby on Rails and now run crews of AI agents, and build the tooling that keeps those agents disciplined (hardened specs, clear roles, honest review). Humans lead: agents draft, people decide. This is the account in the Identity Guidelines; the user chose to merge it with the existing services copy, leading with the crew identity and presenting the services as what the crew can be hired for.

## Operating Context

- Static SvelteKit site, prerendered and published to GitHub Pages by a GitHub Actions workflow on every push to `main`. No backend, no forms; contact is a `mailto:` link.
- Contact: contact@rubakas.com. Code and open-source presence: github.com/rubakas.
- The identity guide's footers cite rubakas.com. The guide's own to-do list says trademark and domain checks are still outstanding.

## Capabilities and Constraints

Confirmed offerings the site may state:

- AI consulting and strategy: AI orchestration, development, consulting and strategy.
- Tech support or full maintenance.

Not confirmed for the site (undecided; do not state as fact until the user says so):

- `agent-notes`, the open-source tooling shown in the identity guide's sample applications (MIT, 19 agents, 3 tiers, `pipx install agent-notes`).
- Plugari (plugari.com), currently linked from the page as "our product".

Terminology: "crew", "agents draft, people decide", "review". Avoid framing the work as autonomy or magic.

## Brand Commitments

- Name: Rubakas, from Russian рубака (rubaka), from рубить, "to hew": shaping raw output into clean work. The guide keeps the hew-and-carve reading and leaves blades out.
- Voice, per the guide: plain-spoken (short sentences, no hype about AI, no magic); convention over improvisation (the Rails habit applied to machines); humans lead (talk about review, not autonomy). Headings in sentence case.
- The user supplied the Identity Guidelines v1.0 (October 2026) as the reference for this rebrand. Both files are in `docs/brand/`: `rubakas-brand-guide.pdf` and `rubakas-identity-guidelines.dc.html`. How far the guide binds the visual world is decided in new-work, not here.
- **Open conflict between the two files.** The HTML (v1.0, 11 Oct 2026) sets the descriptor "agent crew · rails-born" under the wordmark. The newer PDF (exported 14 Oct 2026) uses the tagline "The dice. Not the roll" in its lockups and lists two shortlisted lines, "The human is the loop." and "Taste is load-bearing." Which line is current is undecided.

## Evidence on Hand

- Current page copy: three lines (TYPE: AI Orchestration, development, consulting & strategy; SCOPE: Any business, any industry; RECORD: Tech support or full maintenance) and "Your industry, your scale — We turn AI strategy into working production systems — for any business."
- Links on the current page: GitHub, email, Plugari, and a YouTube link that points to a well-known joke video (`dQw4w9WgXcQ`), so it is a placeholder and no real channel is confirmed.
- Assets in the repo: `static/favicon.png`, `static/images/` (YouTube, GitHub, Telegram and tractor SVGs; Telegram is unused), and the identity guide in `docs/brand/`.
- Not in the repo and not to be invented: client names, testimonials, case studies, pricing, benchmarks, demos or press. The guide's vector masters for the lockups are listed there as still to do.

## Product Principles

1. Say what the crew does, plainly. Short sentences; no AI hype.
2. Humans lead. Describe review and judgment, never autonomy.
3. Claim only what the crew can stand behind. Unconfirmed offerings and proof stay off the page until confirmed.
4. Client-first, developer-credible: a business visitor should get it at a glance, and an engineer should find nothing to wince at.
5. Convention over improvisation: one source of truth for identity (the guide), reused rather than reinvented.
