import { test } from '../../fixtures/forLearning/db.fixture';
import { expect } from '@playwright/test';

test.skip('Data appears in UI within latency window', async ({ page, db }) => {
  const student = await db.insertTestStudent();

  await page.goto('/student-search');
  await page.waitForTimeout(5000); // adjust for sync interval
  const isVisible = await page.isVisible(`text=${student.name}`);
  expect(isVisible).toBeTruthy();
});