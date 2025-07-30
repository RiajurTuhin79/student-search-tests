import { test, expect } from '../../fixtures/poManager.fixture';

test.only('Valied Login Test', async ({ loginPageFixture, page }) => {

    //await loginPage.goToLoginPage();
    await loginPageFixture.validLogin("tuhin79@gmail.com", "Dhaka1216!");
    //await expect(loginPage.msgForSuccessfulLogin).toBeVisible();
    await expect(page.getByText('Automation Practice')).toBeVisible();
});

test('Empty Login Test', async ({ loginPageFixture }) => {

    await loginPageFixture.emptyLogin("", "");
    await expect(loginPageFixture.msgForEmptyEmail).toBeVisible();
    await expect(loginPageFixture.msgForEmptyPassword).toBeVisible();
    await expect(loginPageFixture.alertForWrongPassword).toBeHidden();

});

test('Login with empty Password', async ({ loginPageFixture }) => {

    await loginPageFixture.loginWithWrongPassword("tuhin79@gmail.com", "ytutr122");
    await expect(loginPageFixture.alertForWrongPassword).toBeVisible();
    await expect(loginPageFixture.msgForEmptyEmail).toBeHidden();
    await expect(loginPageFixture.msgForEmptyPassword).toBeHidden();

});