import { test } from '@playwright/test';
import { RegisterPage } from '../pages/RegisterPage';

test('Verify Register API', async ({ page }) => {
  const registerPage = new RegisterPage(page);

  await registerPage.verifyRegisterAPI();
});