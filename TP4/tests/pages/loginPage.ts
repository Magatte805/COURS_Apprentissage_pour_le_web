import { Page, Locator } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly username: Locator;
  readonly password: Locator;
  readonly submitBtn: Locator;
  readonly message: Locator;

  constructor(page: Page) {
    this.page = page;
    this.username = page.locator('#username');
    this.password = page.locator('#password');
    this.submitBtn = page.locator('#login');
    this.message = page.locator('#message');
  }

  async goto() {
    await this.page.goto('about:blank'); 
  }

  async login(user: string, pass: string) {
    await this.username.fill(user);
    await this.password.fill(pass);
    await this.submitBtn.click();
  }

  async getMessage() {
    return this.message;
  }
}
