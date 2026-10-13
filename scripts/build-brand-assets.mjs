// Renders the web brand assets listed in the Identity Guidelines v1.0 (docs/brand):
// favicon.svg, favicon-16/32.png, apple-touch-icon.png, icon-512.png, og-1200x630.png.
// Run with `npm run brand:assets`. Output goes to static/.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from '@playwright/test';
import { MARK } from '../src/lib/mark.js';

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

const mark = (size, extra = '') =>
	`<svg width="${size}" height="${size}" viewBox="0 0 100 100" ${extra}><path d="${MARK}" fill="${RED}" fill-rule="evenodd"/></svg>`;

/**
 * The 16px favicon is the solid tile with no R: the guide drops the R below 24px. The 32px PNG and
 * the SVG carry the R (the owner's call; the guide's favicon line says "solid tile, no R").
 * Small sizes snap the 45 degree cut to whole pixels.
 */
function solidTile(size) {
	const cut = { 16: 4 }[size] ?? Math.round(size * 0.2612);
	const s = size;
	const points = [
		[cut, 0],
		[s, 0],
		[s, s - cut],
		[s - cut, s],
		[0, s],
		[0, cut]
	]
		.map((p) => p.join(','))
		.join(' ');
	return `<svg width="${s}" height="${s}" viewBox="0 0 ${s} ${s}"><polygon points="${points}" fill="${RED}"/></svg>`;
}

const pages = {
	'favicon-16.png': { w: 16, h: 16, transparent: true, body: solidTile(16) },
	'favicon-32.png': { w: 32, h: 32, transparent: true, body: mark(32) },
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
		<span style="font:400 30px/1 'IBM Plex Mono';letter-spacing:.12em;text-transform:uppercase;color:${SOOT}">The dice. Not the roll</span>
	</div>
</div>
<span style="position:absolute;right:120px;bottom:64px;font:400 26px/1 'IBM Plex Mono';letter-spacing:.06em;color:${SLATE}">rubakas.com</span>`
	}
};

fs.writeFileSync(
	path.join(out, 'favicon.svg'),
	`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="${MARK}" fill="${RED}" fill-rule="evenodd"/></svg>\n`
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
