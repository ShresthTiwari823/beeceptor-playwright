import { Page, expect } from '@playwright/test';

export class UpdatePage {
  constructor(private page: Page) {}

  async verifyUpdateAPI() {
    const response = await this.page.request.put(
      'https://beeceptor-playwright.free.beeceptor.com/update'
    );

    expect(response.status()).toBe(200);

    const data = await response.json();

    expect(data.status).toBe("updated");
  }
}