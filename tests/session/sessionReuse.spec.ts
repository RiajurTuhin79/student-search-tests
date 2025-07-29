// don't need now - we did it through <global-setup.ts> and <playwright.config.ts>

import { test, expect } from '@playwright/test';

test.describe.skip('Session Reuse Test', () => {

  test.use({ storageState: `${process.env.ENV}-user-storage.json` }); // Reuses logged-in state  

  test('Should retain session and access dashboard without re-login', async ({ page}) => {
    await page.goto('/dashboard');

    // Check that session is valid and user is already logged in
    await expect(page.locator('text=Welcome')).toBeVisible();
    await expect(page.locator('#logout-button')).toBeVisible();
  });

  test('Can navigate to another authenticated page without login', async ({ page }) => {
    await page.goto('/student-search');

    // Should be allowed without redirecting to login
    await expect(page).toHaveURL(/.*student-search/);
    await expect(page.locator('#search-box')).toBeVisible();
  });

});


// We did it through <global-setup.ts> and <playwright.config.ts>

  test('Should retain session and access dashboard without re-login', async ({ page, baseURL, storageState}) => { // I think we don't need "storageState" here coz it is in the golobal setup - playwright.config.ts
    //await page.goto(baseURL+'/dashboard'); // Also correct
    await page.goto(`${baseURL}/dashboard`);

    // Check that session is valid and user is already logged in
    await expect(page.locator('text=Welcome')).toBeVisible();
    await expect(page.locator('#logout-button')).toBeVisible();
  });