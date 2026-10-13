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
