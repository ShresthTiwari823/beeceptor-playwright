import { test } from '@playwright/test';
import { PatchPage } from '../pages/PatchPage';

test('Verify Patch API', async ({ page }) => {
  const patchPage = new PatchPage(page);
  await patchPage.verifyPatchAPI();
});