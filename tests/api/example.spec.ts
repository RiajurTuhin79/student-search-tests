// tests/example.spec.ts
import { test, expect } from '../../fixtures/apiClient.fixture';

test('GET API example', async ({ apiClient }) => {
  const data = await apiClient.get<any>('/api/example-endpoint');
  expect(data).toBeDefined();
});
