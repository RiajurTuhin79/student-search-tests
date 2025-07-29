import { test } from '../../fixtures/forLearning/featureFlags.fixture';
import { expect } from '@playwright/test';


test.skip('Feature flag toggles conditional UI', async ({ page, featureFlags}) => {
  await featureFlags.enable('new-search-ui');
  await page.goto('/student-search');
  await expect(page.locator('#new-search-bar')).toBeVisible();
});