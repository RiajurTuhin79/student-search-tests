import { test as base, BrowserContextOptions } from '@playwright/test';

type ProxySetup = {
  contextOptions: BrowserContextOptions;
};

export const test = base.extend<{
  proxy: { server: string; bypass?: string };
}>({
  proxy: async ({}, use) => {
    const proxy = {
      server: 'http://proxy.dev.aws.local:3128', // Example: replace with actual dev proxy
      bypass: 'localhost,*.collegeboard.org,*.amazonaws.com'
    };

    await use(proxy);
  }
});
