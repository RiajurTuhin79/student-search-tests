// fixtures/auth.fixture.ts
/*import { test as base } from '@playwright/test';

export const auth = base.extend({
  storageState: async ({}, use) => {
    await use(require.resolve('./dev-user-storage.json'));
  },
});
*/

import { test as base } from '@playwright/test';

type AuthHelpers = {
  loginAsAdmin: (page: any) => Promise<void>;
  loginAsViewer: (page: any) => Promise<void>;
  loginAsExpiredSubscriber: (page: any) => Promise<void>;
};

export const test = base.extend<{
  auth: AuthHelpers;
}>({
  auth: async ({}, use) => {
    const auth: AuthHelpers = {
      loginAsAdmin: async (page) => {
        await page.goto('/login');
        await page.fill('#username', 'admin_user');
        await page.fill('#password', 'admin_pass');
        await page.click('#login-button');
        await page.waitForURL('/dashboard');
      },
      loginAsViewer: async (page) => {
        await page.goto('/login');
        await page.fill('#username', 'viewer_user');
        await page.fill('#password', 'viewer_pass');
        await page.click('#login-button');
        await page.waitForURL('/dashboard');
      },
      loginAsExpiredSubscriber: async (page) => {
        await page.goto('/login');
        await page.fill('#username', 'expired_user');
        await page.fill('#password', 'expired_pass');
        await page.click('#login-button');
        await page.waitForSelector('.alert');
      }
    };

    await use(auth);
  }
});


