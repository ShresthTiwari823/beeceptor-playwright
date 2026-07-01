import { test } from '@playwright/test';
import { UpdatePage } from '../pages/UpdatePage';

test('Verify Update API', async ({ page }) => {
  const updatePage = new UpdatePage(page);
  await updatePage.verifyUpdateAPI();
});