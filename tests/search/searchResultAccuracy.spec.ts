import { test } from '../../fixtures/util.fixture';
import { expect } from '@playwright/test';


test.skip('Verify UI search result matches SQL data', async ({ page, dbClientFixture, browser}) => {
  await page.goto('/student-search');
  await page.fill('#search-box', 'Biology');
  await page.click('#search-button');
  

  const uiResults = await page.$$eval('.result-row', rows => rows.map(r => r.textContent));
  const dbResults = await dbClientFixture.query(`SELECT * FROM students WHERE interest = 'Biology'`);

  expect(uiResults.length).toBe(dbResults.length);
});