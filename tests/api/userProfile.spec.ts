
import { test, expect } from '../../fixtures/apiClient.fixture';

test('Fetch user profile using token', async ({ apiClient, baseURL, authToken }) => {
  const response = await apiClient.get(`${baseURL}/api/user/profile`, {Authorization: `Bearer ${authToken}`});

  expect(response).toHaveProperty('email');
  //expect(response.email).toBe(process.env.USER_EMAIL);
});

test('create order', async ({ apiClient, authToken, baseURL }) => {
  //const client = new APIClient(apiContext);

  const orderPayload = {
    itemId: '12345',
    quantity: 2
  };

  const response = await apiClient.post(`${baseURL}/api/order/create-order`, orderPayload, {Authorization: `Bearer ${authToken}`});

  expect(response).toHaveProperty('orderId');
});
