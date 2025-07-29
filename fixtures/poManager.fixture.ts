import { test as baseTest, Page } from '@playwright/test';
import { LoginPage } from '../pageobjects/LoginPage';
import { DashboardPage } from '../pageobjects/DashboardPage';
import { OrdersHistoryPage } from '../pageobjects/OrdersHistoryPage';
import { OrdersReviewPage } from '../pageobjects/OrdersReviewPage';
import { CartPage } from '../pageobjects/CartPage';

// Extend base test to include POManager fixture
type MyFixtures = {
    loginPageFixture: LoginPage;
    dashboardPageFixture: DashboardPage;
    ordersHistoryPageFixture: OrdersHistoryPage;
    ordersReviewPageFixture: OrdersReviewPage;
    cartPageFixture: CartPage;
};

export const test = baseTest.extend<MyFixtures>({

    loginPageFixture: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
       await loginPage.goToLoginPage();
        await use(loginPage);
    },

    dashboardPageFixture: async ({ page }, use) => {
        const dashboardPage = new DashboardPage(page);
        await dashboardPage.goToDashboardPage();
        await use(dashboardPage);
    },

    ordersHistoryPageFixture: async ({ page }, use) => {
        const ordersHistoryPage = new OrdersHistoryPage(page);
        await ordersHistoryPage.goToOrderHistoryPage();
        await use(ordersHistoryPage);
    },

    ordersReviewPageFixture: async ({ page }, use) => {
        const ordersReviewPage = new OrdersReviewPage(page);
        await ordersReviewPage.goToOrderReviewPage();
        await use(ordersReviewPage);
    },

    cartPageFixture: async ({ page }, use) => {
        const cartPage = new CartPage(page);
        await cartPage.goToCartPage();
        await use(cartPage);
    }
});

export { expect } from '@playwright/test';
