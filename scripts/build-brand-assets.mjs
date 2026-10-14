// Renders the web brand assets listed in the Identity Guidelines v1.0 (docs/brand):
// favicon.svg, favicon-16/32.png, apple-touch-icon.png, icon-512.png, og-1200x630.png.
// Run with `npm run brand:assets`. Output goes to static/.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from '@playwright/test';
import { contourPath, CONTOUR_W, CONTOUR_SMALL_W, R_LETTER } from '../src/lib/mark.js';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const out = path.join(root, 'static');

const SOOT = '#161616';
const PAPER = '#FAFAF8';
const RED = '#EE1E1E';
const SLATE = '#6A7282';

const fontData = (file) => fs.readFileSync(path.join(out, 'fonts', file)).toString('base64');
const fontCss = `
@font-face{font-family:'Montserrat';font-weight:100 900;src:url(data:font/woff2;base64,${fontData('montserrat/montserrat-latin-wght-normal.woff2')}) format('woff2')}
@font-face{font-family:'IBM Plex Mono';font-weight:400;src:url(data:font/woff2;base64,${fontData('ibm-plex-mono/ibm-plex-mono-latin-400-normal.woff2')}) format('woff2')}
*{margin:0;box-sizing:border-box}`;

/**
 * The mark: the cut tile as a red line, with the R inside it as a solid red letter. `w` is the line
 * in tile units; `letter: false` leaves the R out, for the smallest sizes where it would smudge.
 */
const mark = (size, extra = '', { w = CONTOUR_W, letter = true } = {}) =>
	`<svg width="${size}" height="${size}" viewBox="0 0 100 100" ${extra}><path d="${contourPath(w)}" fill="none" stroke="${RED}" stroke-width="${w}" stroke-linejoin="miter" stroke-miterlimit="4"/>${
		letter ? `<path d="${R_LETTER}" fill="${RED}" fill-rule="evenodd"/>` : ''
	}</svg>`;

/** Between 24 and 63px the line goes heavier so it still holds; the R stays. */
const MEDIUM_W = 12;

const pages = {
	// The 16px favicon takes the heavy line and no R, as the guide drops the R below 24px. The 32px
	// PNG and the SVG carry the R (the owner's call) on a line that is heavier than the large forms'.
	'favicon-16.png': {
		w: 16,
		h: 16,
		transparent: true,
		body: mark(16, '', { w: CONTOUR_SMALL_W, letter: false })
	},
	'favicon-32.png': { w: 32, h: 32, transparent: true, body: mark(32, '', { w: MEDIUM_W }) },
	// soot ground, mark at 60% (180) and 54% (512), as the guide specifies
	'apple-touch-icon.png': {
		w: 180,
		h: 180,
		bg: SOOT,
		body: mark(108, 'style="position:absolute;left:36px;top:36px"')
	},
	'icon-512.png': {
		w: 512,
		h: 512,
		bg: SOOT,
		body: mark(276, 'style="position:absolute;left:118px;top:118px"')
	},
	// link preview: day lockup, primary form, with the site address bottom right
	'og-1200x630.png': {
		w: 1200,
		h: 630,
		bg: PAPER,
		body: `
<div style="position:absolute;left:120px;top:0;height:630px;display:flex;align-items:center;gap:54px">
	${mark(180)}
	<div style="display:flex;flex-direction:column;gap:24px">
		<span style="font:700 83.5px/1 Montserrat;letter-spacing:.2em;color:${SOOT}">RUBAKAS</span>
		<span style="font:400 30px/1 'IBM Plex Mono';letter-spacing:.12em;text-transform:uppercase;color:${SOOT}">Taste is load-bearing</span>
	</div>
</div>
<span style="position:absolute;right:120px;bottom:64px;font:400 26px/1 'IBM Plex Mono';letter-spacing:.06em;color:${SLATE}">rubakas.com</span>`
	}
};

fs.writeFileSync(
	path.join(out, 'favicon.svg'),
	`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="${contourPath(MEDIUM_W)}" fill="none" stroke="${RED}" stroke-width="${MEDIUM_W}" stroke-linejoin="miter" stroke-miterlimit="4"/><path d="${R_LETTER}" fill="${RED}" fill-rule="evenodd"/></svg>\n`
);

fs.writeFileSync(
	path.join(out, 'manifest.webmanifest'),
	JSON.stringify(
		{
			name: 'Rubakas',
			short_name: 'Rubakas',
			description: 'A small crew that runs AI agents on real software work.',
			start_url: '/',
			theme_color: SOOT,
			background_color: SOOT,
			icons: [
				{ src: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
				{ src: '/icon-512.png', sizes: '512x512', type: 'image/png' }
			]
		},
		null,
		'\t'
	) + '\n'
);

const browser = await chromium.launch();
for (const [file, { w, h, bg, transparent, body }] of Object.entries(pages)) {
	const page = await browser.newPage({ viewport: { width: w, height: h }, deviceScaleFactor: 1 });
	await page.setContent(
		`<!doctype html><style>${fontCss}html,body{width:${w}px;height:${h}px;overflow:hidden;background:${bg ?? 'transparent'}}</style><body>${body}</body>`
	);
	await page.evaluate(() => document.fonts.ready);
	await page.screenshot({ path: path.join(out, file), omitBackground: !!transparent });
	await page.close();
	console.log('wrote static/' + file);
}
await browser.close();
