# Rubakas

**Taste is load-bearing.**

[![Deploy](https://github.com/rubakas/rubakas.github.io/actions/workflows/deploy.yml/badge.svg?branch=main)](https://github.com/rubakas/rubakas.github.io/actions/workflows/deploy.yml)
[![Site](https://img.shields.io/badge/site-rubakas.com-161616?style=flat-square)](https://rubakas.com)
[![SvelteKit](https://img.shields.io/badge/SvelteKit-3-ee1e1e?style=flat-square&logo=svelte&logoColor=white)](https://svelte.dev/docs/kit)
[![Node](https://img.shields.io/badge/node-%E2%89%A524-161616?style=flat-square&logo=nodedotjs&logoColor=white)](package.json)
[![Redeploy](https://img.shields.io/badge/redeploy-run_workflow-ee1e1e?style=flat-square&logo=githubactions&logoColor=white)](https://github.com/rubakas/rubakas.github.io/actions/workflows/deploy.yml)

The public front door of [Rubakas](https://rubakas.com), a small crew that runs AI agents on real software work. One static page and a branded not-found page. No backend, no forms; contact is a `mailto:` link.

The repository is `rubakas.github.io` and the site is hosted on GitHub Pages, but the primary domain is **rubakas.com**. See [Deploy](#deploy).

## Develop

Needs Node 24 or later (`engines.node` in `package.json`).

```bash
npm install
npm run dev
```

| Command                    | What it does                                             |
| -------------------------- | -------------------------------------------------------- |
| `npm run dev`              | Start the dev server                                     |
| `npm run build`            | Prerender the site into `build/`                         |
| `npm run preview`          | Serve the production build on port 4173                  |
| `npm run check`            | Type-check Svelte and JS with `svelte-check`             |
| `npm run lint`             | Prettier check and ESLint                                |
| `npm run format`           | Format everything with Prettier                          |
| `npm run test`             | Playwright integration tests, then Vitest                |
| `npm run test:integration` | Playwright only (builds and previews the site first)     |
| `npm run brand:assets`     | Regenerate the favicons, link-preview card and app icons |

Playwright needs its browsers once: `npx playwright install`.

## Layout

```
src/routes/+page.svelte      the homepage: markup, copy and scoped styles
src/routes/404/              the branded not-found page
src/lib/Mark.svelte          the Rubakas mark and its lock-in animation
src/lib/mark.js              mark geometry and motion maths
src/app.css                  Tailwind 4 theme tokens, fonts, base styles, the button
static/                      fonts, favicons, link-preview card, web manifest, robots.txt, sitemap
scripts/                     brand asset generator
tests/                       Playwright tests
docs/brand/                  Rubakas Identity Guidelines v1.0
```

## Deploy

The site is hosted on GitHub Pages, and **[rubakas.com](https://rubakas.com) is its primary domain**. That is the address to share, link and test against. Every push to `main` builds the site and publishes `build/` to Pages, using `.github/workflows/deploy.yml`.

To redeploy without a new commit, use the **Redeploy** badge above. It opens the workflow page, where **Run workflow** on the `main` branch builds and publishes again. A README can't trigger the run itself, so the last click happens on GitHub.

### The domain

- The custom domain is set under Settings, Pages, not in the repo. A `CNAME` file does nothing here, because the site is published by the Actions workflow.
- The Pages source is **GitHub Actions**, with HTTPS enforced.
- Once the custom domain is set, GitHub Pages redirects the default `rubakas.github.io` address to it.
- The domain is written into the page itself: the canonical link and the Open Graph tags take it from the `site` constant in `src/routes/+page.svelte`, and the link-preview test in `tests/test.js` asserts it. The card image from `npm run brand:assets` also carries it, and so do `static/robots.txt` and `static/sitemap.xml`. If the domain ever changes, those are the places to update.
- Assets use absolute paths (`paths.relative: false` in `vite.config.js`), because Pages serves `404.html` at whatever address was mistyped.

## Brand and product

- [`PRODUCT.md`](PRODUCT.md) says who the site is for and what it may claim.
- [`DESIGN.md`](DESIGN.md) records the design system as built.
- [`docs/brand/`](docs/brand) holds the identity guide, which fixes the palette, type, mark and tone.

Montserrat and IBM Plex Mono are self-hosted under the SIL Open Font License; the licenses sit next to the font files in `static/fonts`.
