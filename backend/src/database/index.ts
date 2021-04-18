import knex from 'knex';
import * as dotenv from 'dotenv';

dotenv.config();

const db = knex({
  client: 'mysql',
  connection: {
    host: process.env.BIRDIE_HOST,
    user: process.env.BIRDIE_USER,
    password: process.env.BIRDIE_PASSWORD,
    database: process.env.BIRDIE_DATABASE,
  },
});
export default db;
