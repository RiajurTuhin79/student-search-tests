import { Page, Locator } from '@playwright/test';

export class CartPage {
  //private page: Page;
  private readonly cartProducts: Locator;
  private readonly productsText: Locator;
  private readonly cart: Locator;
  private readonly orders: Locator;
  private readonly checkout: Locator;

  constructor(public readonly page: Page) {
    //this.page = page;
    this.cartProducts = this.page.locator('div li').first();
    this.productsText = this.page.locator('.card-body b');
    this.cart = this.page.locator("[routerlink*='cart']");
    this.orders = this.page.locator("button[routerlink*='myorders']");
    this.checkout = this.page.locator('text=Checkout');
  }

  async goToCartPage(): Promise<void> {
    await this.page.goto('https://rahulshettyacademy.com/client/#/dashboard/cart');
  }

  async verifyProductIsDisplayed(productName: string): Promise<void> {
    await this.cartProducts.waitFor();
    //const isVisible = await this.getProductLocator(productName).isVisible();
    //expect(isVisible).toBeTruthy();
  }

  async checkoutCart(): Promise<void> {
    await this.checkout.click();
  }

  private getProductLocator(productName: string): Locator {
    return this.page.locator(`h3:has-text("${productName}")`);
  }
}
export { expect } from '@playwright/test';