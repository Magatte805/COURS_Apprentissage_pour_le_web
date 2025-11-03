import { test } from '@playwright/test';

test('capture et trace', async ({ page, context }) => {
  
  await page.setContent('<h1>Debug TP</h1>');

  // Capture d'écran
  await page.screenshot({ path: 'debug-screenshot.png' });

  // Activer la trace Playwright
  await context.tracing.start({ screenshots: true, snapshots: true });

  // Action fictive
  await page.click('h1');

  // Stop et sauvegarde la trace
  await context.tracing.stop({ path: 'trace.zip' });
});
