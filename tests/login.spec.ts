import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('Verify Login API', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.verifyLoginAPI();
});