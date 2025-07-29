/*

Now think different way - Assume all Subscriptions(A to H) are already created in the Database .
 Now create a typeScript file for Subscription . It should have couple of functions like - 
1)  Any subscription can be assigned to the user Tuhin79@gmail.com using Api calls . 
2) Delete subscription from  Tuhin79@gmail.com using api calls .

*/
// fixtures/subscriptionService.fixture.ts
import { test as base } from '@playwright/test';
import { SubscriptionService } from '../utils/subscriptionService';

const BASE_URL = 'https://your-api.com'; // 🔁 replace with your real API URL
const AUTH_TOKEN = 'YOUR_API_TOKEN';      // 🔁 replace with your real auth token
const USER_EMAIL = 'tuhin79@gmail.com';

type Fixtures = {
  subscriptionService: SubscriptionService;
};

export const test = base.extend<Fixtures>({
  subscriptionService: async ({}, use) => {
    const service = new SubscriptionService(BASE_URL, AUTH_TOKEN, USER_EMAIL);
    await use(service);
  }
});

export {expect} from '@playwright/test';

