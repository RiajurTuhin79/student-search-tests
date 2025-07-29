import { test as base } from '@playwright/test';

type FeatureFlagHelpers = {
  enable: (flag: string) => Promise<void>;
  disable: (flag: string) => Promise<void>;
};

export const test = base.extend<{
  featureFlags: FeatureFlagHelpers;
}>({
  featureFlags: async ({ page }, use) => {
    const featureFlags: FeatureFlagHelpers = {
      enable: async (flag: string) => {
        // Simulate enabling a feature flag via API or local storage
        await page.addInitScript((flag) => {
          localStorage.setItem(`featureFlag_${flag}`, 'true');
        }, flag);
        console.log(`Feature flag "${flag}" enabled.`);
      },
      disable: async (flag: string) => {
        // Simulate disabling a feature flag via API or local storage
        await page.addInitScript((flag) => {
          localStorage.setItem(`featureFlag_${flag}`, 'false');
        }, flag);
        console.log(`Feature flag "${flag}" disabled.`);
      }
    };

    await use(featureFlags);
  }
});
