import { Pool } from 'pg';

const pool = new Pool({
  host: 'user_db',
  port: 5432,
  user: process.env.DB_USER || 'user',
  password: process.env.DB_PASSWORD || 'user',
  database: process.env.DB_NAME || 'food_db',
});

export default pool;
