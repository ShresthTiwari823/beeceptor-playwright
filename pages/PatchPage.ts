import { Page, expect } from '@playwright/test';

export class PatchPage {
  constructor(private page: Page) {}

  async verifyPatchAPI() {
    const response = await this.page.request.patch(
      'https://beeceptor-playwright.free.beeceptor.com/patch'
    );

    expect(response.status()).toBe(200);

    const data = await response.json();

    expect(data.status).toBe("patched");
  }
}