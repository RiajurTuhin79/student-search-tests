// ()api mocking using mock-serever . Craete mock server first then call the api in that server. (We don't need in Playwright test)

import { test, expect, request } from '@playwright/test';

const BASE_URL = 'http://localhost:4000';

test.describe('Mock Subscription API', () => {

  test('Assign subscription to user', async () => {
    const context = await request.newContext();
    
    const response = await context.post(`${BASE_URL}/api/user-subscriptions`, {
      data: {
        email: 'tuhin79@gmail.com',
        subscriptionTier: 'C',
      }
    });

    expect(response.ok()).toBeTruthy();

    const body = await response.json();
    console.log('Subscription Assigned with ID:', body.subscriptionId);

    expect(body.subscriptionId).toMatch(/^sub-\d+$/);
  });

  test('Remove subscription from user', async () => {
    const context = await request.newContext();

    // Step 1: Assign a subscription to get an ID
    const assignRes = await context.post(`${BASE_URL}/api/user-subscriptions`, {
      data: {
        email: 'tuhin79@gmail.com',
        subscriptionTier: 'F',
      }
    });

    expect(assignRes.ok()).toBeTruthy();
    const { subscriptionId } = await assignRes.json();

    // Step 2: Now delete that subscription
    const deleteRes = await context.delete(`${BASE_URL}/api/user-subscriptions/${subscriptionId}`);
    expect(deleteRes.status()).toBe(204);
  });

});
