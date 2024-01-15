import { Inject, Injectable } from '@nestjs/common';
import * as schema from './drizzle/schema';
import { PostgresJsDatabase } from 'drizzle-orm/postgres-js';

@Injectable()
export class AppService {
  constructor(
    @Inject('DB_DEV') private db: PostgresJsDatabase<typeof schema>,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }
}
