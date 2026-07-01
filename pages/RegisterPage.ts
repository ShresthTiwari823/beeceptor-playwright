import { Page, expect } from '@playwright/test';

export class RegisterPage {
  constructor(private page: Page) {}

  async verifyRegisterAPI() {
    const response = await this.page.request.post(
      'https://beeceptor-playwright.free.beeceptor.com/register',
      {
        data: {
          username: 'Shresth',
          password: '123456'
        }
      }
    );

    expect(response.status()).toBe(200);

    const data = await response.json();

    expect(data.status).toBe('created');
  }
}