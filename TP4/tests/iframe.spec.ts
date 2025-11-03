import { test, expect } from '@playwright/test';

test('interaction iframe', async ({ page }) => {
  await page.goto('about:blank');

  const frame = page.mainFrame(); 
  await expect(frame.locator('body')).toBeVisible();
});

