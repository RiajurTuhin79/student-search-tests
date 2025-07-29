import { Page, Locator } from '@playwright/test';

export class OrdersHistoryPage {
  private page: Page;
  private ordersTable: Locator;
  private rows: Locator;
  private orderIdDetails: Locator;

  constructor(page: Page) {
    this.page = page;
    this.ordersTable = page.locator('tbody');
    this.rows = page.locator('tbody tr');
    this.orderIdDetails = page.locator('.col-text');
  }

  async goToOrderHistoryPage(): Promise<void> {
    await this.page.goto('https://rahulshettyacademy.com/client/#/dashboard/myorders');
  }

  async searchOrderAndSelect(orderId: string): Promise<void> {
    await this.ordersTable.waitFor();

    const rowCount = await this.rows.count();
    for (let i = 0; i < rowCount; ++i) {
      const rowOrderId = await this.rows.nth(i).locator('th').textContent();
      if (rowOrderId && orderId.includes(rowOrderId.trim())) {
        await this.rows.nth(i).locator('button').first().click();
        break;
      }
    }
  }

  async getOrderId(): Promise<string | null> {
    return await this.orderIdDetails.textContent();
  }
}
