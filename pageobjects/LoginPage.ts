import { Page, Locator } from '@playwright/test';

export class LoginPage {
  //private page: Page;
  private readonly signInButton: Locator;
  private readonly userName: Locator;
  private readonly password: Locator;
  public readonly msgForEmptyEmail: Locator;
  public readonly msgForEmptyPassword: Locator;
  public readonly alertForWrongPassword: Locator;
  public readonly msgForSuccessfulLogin: Locator;

  constructor(public readonly page: Page) {
    //this.page = page;
    this.signInButton = this.page.locator("[value='Login']");
    this.userName = this.page.locator('#userEmail');
    this.password = this.page.locator('#userPassword');
    this.msgForEmptyEmail = this.page.getByText('*Email is required');
    this.msgForEmptyPassword = this.page.getByText('*Password is required');
    this.alertForWrongPassword = this.page.getByRole('alert', { name: 'Incorrect email or password.' });
    this.msgForSuccessfulLogin = this.page.getByLabel('Login Successfully');
  }

  async goToLoginPage() {
    await this.page.goto('https://rahulshettyacademy.com/client');
    //await this.page.goto('https://www.google.com');
  }

  async validLogin(username: string, password: string): Promise<void> {
    await this.userName.fill(username);
    await this.password.fill(password);
    await this.signInButton.click();
    await this.page.waitForLoadState('networkidle')
  }

  async emptyLogin(username: string, password: string): Promise<void> {
    await this.userName.fill(username);
    await this.password.fill(password);
    await this.signInButton.click();
  }

  async loginWithWrongPassword(username: string, password: string): Promise<void> {
    await this.userName.fill(username);
    await this.password.fill(password);
    await this.signInButton.click();
    //await this.page.waitForLoadState('networkidle')
  }
}
