import { test, expect } from '@playwright/test';

test('popup JavaScript', async ({ page }) => {
  await page.goto('about:blank');  

  const body = page.locator('body'); 
  await expect(body).toBeVisible();  
});
