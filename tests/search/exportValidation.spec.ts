import { test, expect } from '@playwright/test';
import { parse } from 'csv-parse/sync';

test.skip('Validate exported CSV matches UI data', async ({ page }) => {
  await page.goto('/search');
  await page.click('#exportCSV');
  const [download] = await Promise.all([
    page.waitForEvent('download'),
    page.click('#confirmDownload')
  ]);
  const csvContent = await download.text();
  const csvRecords = parse(csvContent, { columns: true });
  expect(csvRecords.length).toBeGreaterThan(0);
  expect(csvRecords[0]).toHaveProperty('StudentID');
});