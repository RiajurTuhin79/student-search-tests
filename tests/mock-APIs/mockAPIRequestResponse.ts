// We need it for api mocking - in playwright test 

/*Mock API requests:
The following code will intercept all the calls to "".../api/v1/fruits" and will return a custom response instead. 
No requests to the API will be made. The test goes to the URL that uses the mocked route and asserts that mock data is present on the page.
*/

import {test, expect} from '@playwright/test';

test("mocks a fruit and doesn't call api", async ({ page }) => {
  // Mock the api call before navigating
  await page.route('*/**/api/v1/fruits', async route => {
    const json = [{ name: 'Strawberry', id: 21 }];
    await route.fulfill({ json });
  });
  // Go to the page
  await page.goto('https://demo.playwright.dev/api-mocking');

  // Assert that the Strawberry fruit is visible
  await expect(page.getByText('Strawberry')).toBeVisible();
});


/*

Modify API responses
Sometimes, it is essential to make an API request, but the response needs to be patched to allow for reproducible testing. 
In that case, instead of mocking the request, one can perform the request and fulfill it with the modified response.

In the example below we intercept the call to the fruit API and add a new fruit called 'Loquat', to the data. 
We then go to the url and assert that this data is there:

*/

test('gets the json from api and adds a new fruit', async ({ page }) => {
  // Get the response and add to it
  await page.route('*/**/api/v1/fruits', async route => {
    const response = await route.fetch();
    const json = await response.json();
    json.push({ name: 'Loquat', id: 100 });
    // Fulfill using the original response, while patching the response body
    // with the given JSON object.
    await route.fulfill({ response, json });
  });

  // Go to the page
  await page.goto('https://demo.playwright.dev/api-mocking');

  // Assert that the new fruit is visible
  await expect(page.getByText('Loquat', { exact: true })).toBeVisible();
});