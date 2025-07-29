import { APIRequestContext } from '@playwright/test';

export class APIClient {
  private context: APIRequestContext;

  constructor(context: APIRequestContext) {
    this.context = context;
  }

  async post<T>(url: string, payload: any, headers = {}): Promise<T> {
    const response = await this.context.post(url, {
      data: payload,
      headers
    });
    return response.json();
  }

  async get<T>(url: string, headers = {}): Promise<T> {
    const response = await this.context.get(url, { headers });
    return response.json();
  }

  async delete<T>(url: string, headers = {}): Promise<T> {
    const response = await this.context.delete(url, { headers });
    return response.json();
  }
}
