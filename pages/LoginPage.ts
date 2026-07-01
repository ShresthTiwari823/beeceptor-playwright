import { Page, expect } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  async verifyLoginAPI() {
    const response = await this.page.goto(
      'https://beeceptor-playwright.free.beeceptor.com/login'
    );

    // Verify HTTP Status
    expect(response?.status()).toBe(200);

    // Read JSON response
    const data = await response?.json();

    // Verify API response
    expect(data.status).toBe('sucess');
  }
}