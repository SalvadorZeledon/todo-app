const { Pool } = require('pg');
require('dotenv').config();
const pool = new Pool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'postgres',
  database: process.env.DB_NAME || 'todo_db',
  port: Number(process.env.DB_PORT || 5432),
});
async function initDB() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS tasks(
      id SERIAL PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      completed BOOLEAN NOT NULL DEFAULT false,
      created_at TIMESTAMP NOT NULL DEFAULT NOW()
    )
  `);
}
module.exports = { pool, initDB };

