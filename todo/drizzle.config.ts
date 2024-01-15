import type { Config } from 'drizzle-kit';

export default {
  schema: './src/drizzle/schema.ts',
  out: './drizzle',
  driver: 'pg', // 'pg' | 'mysql2' | 'better-sqlite' | 'libsql' | 'turso'
  dbCredentials: {
    host: '127.0.0.1',
    user: 'hadi',
    password: '',
    database: 'drizzle',
  },
} satisfies Config;
