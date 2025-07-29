/*import { Page } from '@playwright/test';
import { LoginPage } from './LoginPage';
import { DashboardPage } from './DashboardPage';
import { OrdersHistoryPage } from './OrdersHistoryPage';
import { OrdersReviewPage } from './OrdersReviewPage';
import { CartPage } from './CartPage';

export class POManager {
  private page: Page;
  private loginPage: LoginPage;
  private dashboardPage: DashboardPage;
  private ordersHistoryPage: OrdersHistoryPage;
  private ordersReviewPage: OrdersReviewPage;
  private cartPage: CartPage;

  constructor(page: Page) {
    this.page = page;
    this.loginPage = new LoginPage(this.page);
    this.dashboardPage = new DashboardPage(this.page);
    this.ordersHistoryPage = new OrdersHistoryPage(this.page);
    this.ordersReviewPage = new OrdersReviewPage(this.page);
    this.cartPage = new CartPage(this.page);
  }

  getLoginPage(): LoginPage {
    return this.loginPage;
  }

  getCartPage(): CartPage {
    return this.cartPage;
  }

  getDashboardPage(): DashboardPage {
    return this.dashboardPage;
  }

  getOrdersHistoryPage(): OrdersHistoryPage {
    return this.ordersHistoryPage;
  }

  getOrdersReviewPage(): OrdersReviewPage {
    return this.ordersReviewPage;
  }
}

*/