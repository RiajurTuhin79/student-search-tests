/*
There are 8 substitutions tires like A, B, C, D, E, F , G , H. All have different numbers of students access and features based on 
the substitutions. A is the lowest and can access 100k students a year, 
it has limited search features like only geography and demographic and substitution cost is $50k.
 H is the highest and can access 1000k students a year, it has all search features and subscription cost is $200k. 
Write  an api fixture file that includes the above subscriptions 
each subscription should be one fixture and set up through api calls under 1 user tuhin79@gmail.com, 
and delete the subscription after use is done . Using playwright 

----Here’s a Playwright API fixture file (apiSubscriptions.fixture.ts) that sets up 8 subscription tiers (A–H) for a user 
(tuhin79@gmail.com) via API calls, cleans them up after test execution, and exposes each tier as a separate fixture.

✅ Assumptions:
1)There is an API endpoint to create a subscription: POST /api/subscriptions

2)There is an API endpoint to delete a subscription: DELETE /api/subscriptions/:id

3)API requires an Authorization token (e.g. via bearer token)

4)The returned response after subscription creation contains a subscriptionId


*/


import { test as base } from '@playwright/test';
import axios from 'axios';

type SubscriptionConfig = {
  tier: string;
  studentLimit: number;
  features: string[];
  cost: number;
};

const BASE_URL = 'https://your-api.com';
const AUTH_TOKEN = 'Bearer YOUR_API_TOKEN';
const USER_EMAIL = 'tuhin79@gmail.com';

const subscriptions: Record<string, SubscriptionConfig> = {
  A: { tier: 'A', studentLimit: 100_000, features: ['geography', 'demographic'], cost: 50_000 },
  B: { tier: 'B', studentLimit: 200_000, features: ['geography', 'demographic', 'academic'], cost: 75_000 },
  C: { tier: 'C', studentLimit: 300_000, features: ['geography', 'demographic', 'academic', 'interest'], cost: 90_000 },
  D: { tier: 'D', studentLimit: 400_000, features: ['geo', 'demo', 'academic', 'interest', 'scores'], cost: 110_000 },
  E: { tier: 'E', studentLimit: 500_000, features: ['geo', 'demo', 'academic', 'interest', 'scores', 'schoolType'], cost: 125_000 },
  F: { tier: 'F', studentLimit: 600_000, features: ['geo', 'demo', 'academic', 'interest', 'scores', 'schoolType', 'testScores'], cost: 150_000 },
  G: { tier: 'G', studentLimit: 800_000, features: ['geo', 'demo', 'academic', 'interest', 'scores', 'schoolType', 'testScores', 'activities'], cost: 175_000 },
  H: { tier: 'H', studentLimit: 1_000_000, features: ['all'], cost: 200_000 },
};

async function createSubscription(config: SubscriptionConfig): Promise<string> {
  const response  = await axios.post(`${BASE_URL}/api/subscriptions`, {
    userEmail: USER_EMAIL,
    tier: config.tier,
    studentAccessLimit: config.studentLimit,
    features: config.features,
    cost: config.cost
  }, {
    headers: { Authorization: AUTH_TOKEN }
  });

  return response.data.subscriptionId;
}

async function deleteSubscription(id: string) {
  await axios.delete(`${BASE_URL}/api/subscriptions/${id}`, {
    headers: { Authorization: AUTH_TOKEN }
  });
}

export const test = base.extend<{ [K in keyof typeof subscriptions]: string }>(
  Object.fromEntries(
    Object.entries(subscriptions).map(([key, config]) => {
      return [
        key,
        async ({}, use) => {
          const id = await createSubscription(config);
          console.log(`📦 Created subscription ${config.tier} with ID: ${id}`);
          await use(id);
          await deleteSubscription(id);
          console.log(`🧹 Deleted subscription ${config.tier} with ID: ${id}`);
        }
      ];
    })
  ) as any
);
