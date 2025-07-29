
import { test as base } from '@playwright/test';
import { Client } from 'pg';

type DBClient = {
  query: (sql: string) => Promise<any>;
  insertTestStudent: () => Promise<{ name: string }>;
};

/*// Mock implementation of db for testing purposes
export const db = {
  async query(sql: string): Promise<any[]> {
    // Return mock data for the test case
    if (sql.includes("interest = 'Biology'")) {
      return [
        { id: 1, name: 'Alice', interest: 'Biology' },
        { id: 2, name: 'Bob', interest: 'Biology' }
      ];
    }
    return [];
  }
}; */

export const test = base.extend<{
  db: DBClient;
}>({
  db: async ({}, use) => {
    const client = new Client({
      host: process.env.DB_HOST || 'your-db-host.amazonaws.com',
      port: 5432,
      user: process.env.DB_USER || 'your-user',
      password: process.env.DB_PASSWORD || 'your-password',
      database: process.env.DB_NAME || 'studentdb',
    });

    await client.connect();

    const db: DBClient = {
      query: async (sql: string) => {
        const res = await client.query(sql);
        return res.rows;
      },
      insertTestStudent: async () => {
        const name = 'Test Student ' + Date.now();
        await client.query(
          'INSERT INTO students (name, interest) VALUES ($1, $2)',
          [name, 'Biology']
        );
        return { name };
      }
    };

    await use(db);
    await client.end();
  },
});
