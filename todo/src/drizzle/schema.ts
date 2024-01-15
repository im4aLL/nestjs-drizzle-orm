import { integer, pgTable, serial, text, varchar } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  name: varchar('varchar2', { length: 256 }),
  email: varchar('varchar2', { length: 256 }),
  password: text('password'),
  age: integer('age'),
});
