import { expect, test } from '@playwright/test';

/**
 * The button's fill is drawn on its ::before layer, so the fill is read from there.
 * @param {import('@playwright/test').Locator} button
 */
const fillOf = (button) =>
	button.evaluate((el) => getComputedStyle(el, '::before').backgroundColor);

test('index page has expected h1', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByRole('heading', { level: 1, name: 'RUBAKAS' })).toBeVisible();
	await expect(page.locator('.cover .tagline')).toHaveText('Taste is load-bearing');
});

test('the first viewport offers one way to reach the crew', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByRole('link', { name: 'Talk with us' })).toHaveAttribute(
		'href',
		'mailto:contact@rubakas.com'
	);
});

test('the lede keeps "AI agents" on one line', async ({ page }) => {
	for (const size of [
		{ width: 1440, height: 900 },
		{ width: 390, height: 844 },
		{ width: 320, height: 640 }
	]) {
		await page.setViewportSize(size);
		await page.goto('/');
		const lines = await page.locator('.lede').evaluate((el) => {
			const text = /** @type {Text} */ (el.firstChild);
			const start = (text.textContent ?? '').indexOf('AI');
			const range = document.createRange();
			range.setStart(text, start);
			range.setEnd(text, start + 'AI agents'.length);
			return range.getClientRects().length;
		});
		expect(lines).toBe(1);
	}
});

test('the buttons are cut like the mark', async ({ page }) => {
	await page.goto('/');
	const button = page.locator('.cover .button');
	const box = await button.boundingBox();
	expect(box?.height).toBe(60);
	const clip = await button.evaluate((el) => getComputedStyle(el, '::before').clipPath);
	expect(clip).toMatch(/^polygon\(/);
});

test('the button label stays large bold text, since paper on red is under 4.5:1', async ({
	page
}) => {
	await page.goto('/');
	for (const selector of ['.cover .button', '.close .button']) {
		const label = await page.locator(selector).evaluate((el) => {
			const style = getComputedStyle(el);
			return {
				size: parseFloat(style.fontSize),
				weight: Number(style.fontWeight),
				color: style.color
			};
		});
		expect(label.size).toBeGreaterThanOrEqual(18.66);
		expect(label.weight).toBeGreaterThanOrEqual(700);
		expect(label.color).toBe('rgb(250, 250, 248)');
	}
	await expect(page.locator('.cover .button')).toHaveCSS('font-family', /IBM Plex Mono/);
});

test('the email address never breaks inside the word', async ({ page }) => {
	for (const width of [390, 360, 320]) {
		await page.setViewportSize({ width, height: 800 });
		await page.goto('/');
		const lines = await page.locator('.close .button').evaluate((el) => {
			const text = /** @type {Text} */ (el.firstChild);
			const start = (text.textContent ?? '').indexOf('contact@');
			const range = document.createRange();
			range.setStart(text, start);
			range.setEnd(text, start + 'contact@rubakas.com'.length);
			return range.getClientRects().length;
		});
		expect(lines).toBe(1);
	}
});

test('the crew band leads with the claim a competitor cannot copy', async ({ page }) => {
	await page.goto('/');
	await expect(page.locator('.principles h3').first()).toHaveText('Humans lead');
});

test('the logos are red lines with a solid R; the footer and the running markers are solid tiles', async ({
	page
}) => {
	await page.goto('/');
	await page.waitForTimeout(3300); // let the intro finish
	const marks = await page.locator('svg.mark').evaluateAll((svgs) =>
		svgs.map((svg) => {
			const seen = [...svg.querySelectorAll('path')]
				.filter((path) => getComputedStyle(path).display !== 'none')
				.map((path) => {
					const style = getComputedStyle(path);
					return { classes: [...path.classList], fill: style.fill, stroke: style.stroke };
				});
			return { size: svg.getBoundingClientRect().width, inFooter: !!svg.closest('footer'), seen };
		})
	);
	expect(marks).toHaveLength(5); // the cover, two running markers, the close and the footer
	for (const { size, inFooter, seen } of marks) {
		if (inFooter || size < 32) {
			// the filled tiles: the footer's is the guide mark, red with the R cut out; the 14px
			// running markers are the tile alone
			expect(seen).toHaveLength(1);
			expect(seen[0].classes).toContain('solid');
			expect(seen[0].fill).toBe('rgb(238, 30, 30)');
			continue;
		}
		const lines = seen.filter((path) => path.classes.includes('line'));
		const letters = seen.filter((path) => path.classes.includes('letter'));
		expect(lines).toHaveLength(1);
		expect(lines[0].fill).toBe('none');
		expect(lines[0].stroke).toBe('rgb(238, 30, 30)');
		expect(letters).toHaveLength(1);
		expect(letters[0].fill).toBe('rgb(238, 30, 30)');
	}
});

test('the footer logo is a link that scrolls back to the top', async ({ page }) => {
	await page.goto('/');
	const logo = page.getByRole('link', { name: 'Rubakas, back to the top' });
	await expect(logo).toHaveAttribute('href', '#top');
	const box = await logo.boundingBox();
	expect(box?.height).toBeGreaterThanOrEqual(44);
	await logo.scrollIntoViewIfNeeded();
	expect(await page.evaluate(() => window.scrollY)).toBeGreaterThan(1000);
	await logo.click();
	await expect.poll(() => page.evaluate(() => window.scrollY)).toBe(0);
});

test('the running markers stay at 14px', async ({ page }) => {
	await page.goto('/');
	const marks = page.locator('.running-mark svg');
	await expect(marks).toHaveCount(2);
	for (const mark of await marks.all()) {
		const box = await mark.boundingBox();
		expect([box?.width, box?.height]).toEqual([14, 14]);
	}
});

test('the finished mark is shown when motion is reduced', async ({ page }) => {
	await page.emulateMedia({ reducedMotion: 'reduce' });
	await page.goto('/');
	await expect(page.locator('.cover .mark .done')).toBeVisible();
	await expect(page.locator('.cover .mark .cube')).toBeHidden();
});

test('enlarged text does not widen the page', async ({ page }) => {
	await page.setViewportSize({ width: 360, height: 740 });
	await page.goto('/');
	await page.addStyleTag({ content: 'html { font-size: 200% !important }' });
	const overflow = await page.evaluate(
		() => document.documentElement.scrollWidth - document.documentElement.clientWidth
	);
	expect(overflow).toBe(0);
});

test('the first action stays on screen on a phone held sideways', async ({ page }) => {
	await page.setViewportSize({ width: 844, height: 390 });
	await page.goto('/');
	await expect(page.locator('.cover .button')).toBeInViewport({ ratio: 1 });
});

test.describe('touch', () => {
	test.use({ hasTouch: true, isMobile: true });

	test('a tap does not leave the button in its hover state', async ({ page }) => {
		await page.goto('/');
		const button = page.locator('.close .button');
		await button.evaluate((el) => el.addEventListener('click', (e) => e.preventDefault()));
		await button.scrollIntoViewIfNeeded();
		await button.tap();
		await expect.poll(() => fillOf(button)).toBe('rgb(238, 30, 30)');
	});
});

test('link previews point at rubakas.com', async ({ page }) => {
	await page.goto('/');
	await expect(page.locator('meta[property="og:image"]')).toHaveAttribute(
		'content',
		'https://rubakas.com/og-1200x630.png'
	);
	await expect(page.locator('meta[property="og:url"]')).toHaveAttribute(
		'content',
		'https://rubakas.com/'
	);
	await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
		'href',
		'https://rubakas.com/'
	);
});

test('crawlers are pointed at the sitemap on rubakas.com', async ({ request }) => {
	const robots = await request.get('/robots.txt');
	expect(robots.ok()).toBe(true);
	expect(await robots.text()).toContain('Sitemap: https://rubakas.com/sitemap.xml');

	const sitemap = await request.get('/sitemap.xml');
	expect(sitemap.ok()).toBe(true);
	expect(await sitemap.text()).toContain('<loc>https://rubakas.com/</loc>');
});

test('the not-found page is branded and leads home', async ({ page }) => {
	await page.goto('/404');
	await expect(page.getByRole('heading', { level: 1, name: 'Page not found.' })).toBeVisible();
	await expect(page.locator('main .mark .done')).toBeVisible();
	await expect(page.getByRole('link', { name: 'Back to the homepage' })).toHaveAttribute(
		'href',
		'/'
	);
	await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', 'noindex');
});

test('the button inverts under a mouse', async ({ page }) => {
	await page.goto('/');
	const button = page.locator('.close .button');
	await button.scrollIntoViewIfNeeded();
	await button.hover();
	await expect.poll(() => fillOf(button)).toBe('rgb(250, 250, 248)');
	await expect(button).toHaveCSS('color', 'rgb(22, 22, 22)');
});

test('selected text uses one colour on both grounds', async ({ page }) => {
	await page.goto('/');
	/** @param {string} selector */
	const selection = (selector) =>
		page
			.locator(selector)
			.first()
			.evaluate((el) => {
				const style = getComputedStyle(el, '::selection');
				return [style.backgroundColor, style.color];
			});
	const slateLight = ['rgb(153, 161, 175)', 'rgb(22, 22, 22)'];
	expect(await selection('.lede')).toEqual(slateLight); // night
	expect(await selection('.offer dd')).toEqual(slateLight); // day
});
