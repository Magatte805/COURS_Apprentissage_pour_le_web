import { test, expect } from '@playwright/test';

test('page a le bon titre', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);

  
  const logo = page.locator('img[alt="Playwright logo"]').first();
  await expect(logo).toBeVisible();
});
