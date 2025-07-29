import { Client } from 'pg';

export class SQLClient {
  private client: Client;

  constructor(config?: {
    host?: string;
    port?: number;
    user?: string;
    password?: string;
    database?: string;
  }) {
    this.client = new Client({
      host: config?.host || process.env.DB_HOST || 'your-db-host.amazonaws.com',
      port: config?.port || Number(process.env.DB_PORT) || 5432,
      user: config?.user || process.env.DB_USER || 'your_user',
      password: config?.password || process.env.DB_PASSWORD || 'your_password',
      database: config?.database || process.env.DB_NAME || 'studentdb',
    });
  }

  async connect(): Promise<void> {
    try {
      await this.client.connect();
      console.log('✅ Connected to the database');
    } catch (error) {
      console.error('❌ Failed to connect to the database:', error);
      throw error;
    }
  }

  async disconnect(): Promise<void> {
    await this.client.end();
    console.log('🔌 Disconnected from the database');
  }

  async query<T = any>(sql: string, params?: any[]): Promise<T[]> {
    try {
      const result = await this.client.query(sql, params);
      return result.rows as T[];
    } catch (error) {
      console.error(`❌ SQL Query Failed: ${sql}`, error);
      throw error;
    }
  }

  async insertTestStudent(name: string, interest: string): Promise<void> {
    const sql = 'INSERT INTO students (name, interest) VALUES ($1, $2)';
    await this.query(sql, [name, interest]);
  }
}
