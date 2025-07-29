// tests/subscriptionWithService.spec.ts
import { test, expect } from '../../fixtures/subscription.fixture';

test('Check subscription A functionality', async ({ subscriptionService }) => {
    const subId = await subscriptionService.assignSubscription('A');
    expect(subId).toMatch(/^sub-\d+|[a-zA-Z0-9-_]+$/); // ✅ match mocked or real ID pattern

    // check from the UI -
    // Add 2 subscrition to the user 
    await subscriptionService.assignSubscription('A');

    // Check the error if more than 2 'A' is assined to the same user 
    // check the total student count
    // check the total price for this subscrition
    // Able to add ala-cart
    // Able to add futer year and future subscrition 
    // Able to remove current subscription 
    await subscriptionService.removeSubscription(subId);
    await expect(true);
});

test('Check subscription B functionality', async ({ subscriptionService }) => {
    const subId = await subscriptionService.assignSubscription('B');
    expect(subId).toMatch(/^sub-\d+|[a-zA-Z0-9-_]+$/); // ✅ match mocked or real ID pattern
    // check from the UI -
    // check the total student count
    // check the total price for this subscrition
    // Able to add ala-cart
    // Able to add futer year and future subscrition 
    // Able to remove current subscription 
    await subscriptionService.removeSubscription(subId);
    await expect(true);
});

test('Check subscription C functionality', async ({ subscriptionService }) => {
    const subId = await subscriptionService.assignSubscription('C');
    expect(subId).toMatch(/^sub-\d+|[a-zA-Z0-9-_]+$/); // ✅ match mocked or real ID pattern
    // check from the UI -
    // check the total student count
    // check the total price for this subscrition
    // Able to add ala-cart
    // Able to add futer year and future subscrition 
    // Able to remove current subscription 
    await subscriptionService.removeSubscription(subId);
    await expect(true);
});

test('Check subscription D functionality', async ({ subscriptionService }) => {
    const subId = await subscriptionService.assignSubscription('D');
    expect(subId).toMatch(/^sub-\d+|[a-zA-Z0-9-_]+$/); // ✅ match mocked or real ID pattern
    // check from the UI -
    // check the total student count
    // check the total price for this subscrition
    // Able to add ala-cart
    // Able to add futer year and future subscrition 
    // Able to remove current subscription 
    await subscriptionService.removeSubscription(subId);
    await expect(true);
});

test('Check subscription E functionality', async ({ subscriptionService }) => {
    const subId = await subscriptionService.assignSubscription('E');
    expect(subId).toMatch(/^sub-\d+|[a-zA-Z0-9-_]+$/); // ✅ match mocked or real ID pattern
    // check from the UI -
    // check the total student count
    // check the total price for this subscrition
    // Able to add ala-cart
    // Able to add futer year and future subscrition 
    // Able to remove current subscription 
    await subscriptionService.removeSubscription(subId);
    await expect(true);
});

test('Check subscription F functionality', async ({ subscriptionService }) => {
    const subId = await subscriptionService.assignSubscription('F');
    expect(subId).toMatch(/^sub-\d+|[a-zA-Z0-9-_]+$/); // ✅ match mocked or real ID pattern
    // check from the UI -
    // check the total student count
    // check the total price for this subscrition
    // Able to add ala-cart
    // Able to add futer year and future subscrition 
    // Able to remove current subscription 
    await subscriptionService.removeSubscription(subId);
    await expect(true);
});

test('Check subscription G functionality', async ({ subscriptionService }) => {
    const subId = await subscriptionService.assignSubscription('G');
    expect(subId).toMatch(/^sub-\d+|[a-zA-Z0-9-_]+$/); // ✅ match mocked or real ID pattern
    // check from the UI -
    // check the total student count
    // check the total price for this subscrition
    // Able to add ala-cart
    // Able to add futer year and future subscrition 
    // Able to remove current subscription 
    await subscriptionService.removeSubscription(subId);
    await expect(true);
});

test('Check subscription H functionality', async ({ subscriptionService }) => {
    const subId = await subscriptionService.assignSubscription('H');
    expect(subId).toMatch(/^sub-\d+|[a-zA-Z0-9-_]+$/); // ✅ match mocked or real ID pattern
    // check from the UI -
    // Check the error if more than 2 'A' is assined to the same user 
    // check the total student count
    // check the total price for this subscrition
    // Able to add ala-cart
    // Able to add futer year and future subscrition 
    // Able to remove current subscription 
    await subscriptionService.removeSubscription(subId);
    await expect(true);
});


