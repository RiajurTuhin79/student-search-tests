

import { test } from '../../fixtures/forLearning/auth.fixture';
import { expect } from '@playwright/test';

test.skip('Admin vs Viewer access control', async ({ page,auth }) => {
  await auth.loginAsViewer(page);
  await page.goto('/admin-panel');
  await expect(page).toHaveURL('/unauthorized');
});