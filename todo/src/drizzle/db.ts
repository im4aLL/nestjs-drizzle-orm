import * as schema from './schema';
import { drizzle } from 'drizzle-orm/postgres-js';

export const connection = await postgresJs.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  multipleStatements: true,
});

export const db = drizzle(connection, { schema });
