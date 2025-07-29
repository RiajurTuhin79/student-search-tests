import { Client } from 'pg';

export class DatabaseClient {
  private client: Client;

  constructor() {
    this.client = new Client({
      user: 'your_user',
      host: 'your_host',
      database: 'your_db',
      password: 'your_password',
      port: 5432
    });
  }

  async connect() {
    await this.client.connect();
  }

  async query(sql: string, params?: any[]) {
    return this.client.query(sql, params);
  }

  async disconnect() {
    await this.client.end();
  }
}
