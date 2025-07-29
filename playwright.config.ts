// playwright.config.ts
import { defineConfig } from '@playwright/test';
import devEnv from './configs/dev.env';
import stageEnv from './configs/stage.env';
import { env } from 'process';

const isDev = process.env.ENV === 'dev';

export default defineConfig({
    globalSetup: require.resolve('./global-setup'),
    globalTeardown: require.resolve('./globalTeardown'),
    reporter: [
        ['html', { open: 'always', outputFolder: 'playwright-report' }],
    ],
    //reporter: [
    //    ['list'],
    //   ['allure-playwright'],
    //],
    use: {
        baseURL:  // golobal access
            env.ENV === 'stage' ? stageEnv.baseURL : devEnv.baseURL,
        storageState: // golobal access
            env.ENV === 'stage' ? 'stage-user-storage.json' : 'dev-user-storage.json',

        //contextOptions: isDev
        //? { proxy: { server: devEnv.proxy.server, bypass: Array.isArray(devEnv.proxy.bypass) ? devEnv.proxy.bypass.join(',') : devEnv.proxy.bypass } }
        // : {},
    },
    projects: [
        {
            name: 'Chromium',
            use: { browserName: 'chromium' },
        }
    ],
});




//How to Run for Specific Env
//ENV=dev npx playwright test     # generates and uses dev-user-storage.json
//ENV=stage npx playwright test   # generates and uses stage-user-storage.json


//For Allur test report
//npm run test
//npm run allure:generate
//npm run allure:open