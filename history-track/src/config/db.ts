import { Pool } from 'pg';

const pool = new Pool({
  host: 'history_db',
  port: 5432,
  user: process.env.DB_USER || 'user',
  password: process.env.DB_PASSWORD || 'user',
  database: process.env.DB_NAME || 'history_db',
});

export default pool;
