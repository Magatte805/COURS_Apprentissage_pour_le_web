// login.spec.ts
import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/loginPage';
import { Page } from '@playwright/test';

// Fonction utilitaire pour créer une page fictive avec tous les éléments nécessaires
async function setupFakeLoginPage(page: Page){
  await page.setContent(`
    <input id="username">
    <input id="password">
    <button id="login">Login</button>
    <div id="message">OK</div>
  `);
}

// Test principal utilisant le POM
test('test de connexion avec POM', async ({ page }) => {
  await setupFakeLoginPage(page); 

  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('user', 'pass');

  // Vérification simple
  await expect(page.locator('body')).toBeVisible();
});

// Tests paramétrés
const users = [
  { user: 'correct', pass: '123', valid: true },
  { user: 'wrong', pass: '000', valid: false }
];

for (const u of users) {
  test(`connexion ${u.user}`, async ({ page }) => {
    await setupFakeLoginPage(page); 

    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(u.user, u.pass);

    // Vérification
    await expect(page.locator('body')).toBeVisible();
  });
}
