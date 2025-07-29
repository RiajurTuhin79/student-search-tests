import { test as base, request, APIRequestContext } from '@playwright/test';
import { APIClient } from '../utils/apiClient';
import dotenv from 'dotenv';

type MyFixtures = {
    apiContext: APIRequestContext;
    apiClient: APIClient;
    authToken: string;
};

export const test = base.extend<MyFixtures>({
    // Provide a shared APIRequestContext
    apiContext: async ({ }, use) => {
        const context = await request.newContext();
        await use(context);
        await context.dispose();
    },

    // Provide a shared APIClient instance
    apiClient: async ({ apiContext }, use) => {
        const client = new APIClient(apiContext);
        await use(client);
    },

    authToken: async ({ apiContext, baseURL }, use) => {
        const loginResponse = await apiContext.post(`${baseURL}/api/auth/login`, {
            data: {
                email: process.env.MAIL_USER,
                password: process.env.MAIL_PASS
            }
        });
        const body = await loginResponse.json();
        await use(body.token);
    }
});

export { expect } from '@playwright/test';
