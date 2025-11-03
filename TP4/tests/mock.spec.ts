import { test, expect } from '@playwright/test';

test('mock API', async ({ page }) => {
  await page.route('**/api/data', route =>
    route.fulfill({ body: JSON.stringify({ data: 'mocked' }) })
  );
  await page.goto('about:blank');

  const body = page.locator('body'); 
  await expect(body).toBeVisible(); 
});
