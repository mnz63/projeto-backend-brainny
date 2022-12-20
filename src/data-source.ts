import { DataSource } from 'typeorm';
import 'dotenv/config';
import 'reflect-metadata';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '79119074',
  database: 'playground',
  entities: ['**/modules/**/entities/*.js'],
  synchronize: true,
  migrations: ['src/database/migrations**/*.ts'],
});
