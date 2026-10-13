import { expect, test } from '@playwright/test';

test('index page has expected h1', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByRole('heading', { level: 1, name: 'RUBAKAS' })).toBeVisible();
});

test('the first viewport offers one way to reach the crew', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByRole('link', { name: 'Talk with us' })).toHaveAttribute(
		'href',
		'mailto:contact@rubakas.com'
	);
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
		await expect(button).toHaveCSS('background-color', 'rgba(0, 0, 0, 0)');
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
