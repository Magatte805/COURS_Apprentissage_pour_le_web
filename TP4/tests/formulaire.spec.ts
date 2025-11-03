import { test, expect } from '@playwright/test';

test('formulaire multi-etapes', async ({ page }) => {

  await page.goto('about:blank');


  const body = page.locator('body'); 
  await expect(body).toBeVisible(); 
});
