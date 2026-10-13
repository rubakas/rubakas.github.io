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

test('the finished mark is shown when motion is reduced', async ({ page }) => {
	await page.emulateMedia({ reducedMotion: 'reduce' });
	await page.goto('/');
	await expect(page.locator('.cover .mark .done')).toBeVisible();
	await expect(page.locator('.cover .mark .cube')).toBeHidden();
});
