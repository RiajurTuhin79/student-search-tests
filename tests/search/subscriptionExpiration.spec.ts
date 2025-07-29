import { test } from '../../fixtures/forLearning/auth.fixture';
import { expect } from '@playwright/test';

test.skip('Validate expired subscriptions block search', async ({ page, auth }) => {
  await auth.loginAsExpiredSubscriber(page);
  await page.goto('/student-search');

  await expect(page.locator('.alert')).toHaveText(/subscription expired/i);
});