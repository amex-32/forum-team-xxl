const mysql = require('mysql2/promise');
require('dotenv').config();

const pool = mysql.createPool({
  host:     process.env.DB_HOST     || 'localhost',
  port:     process.env.DB_PORT     || 8889,
  user:     process.env.DB_USER     || 'root',
  password: process.env.DB_PASSWORD || 'root',
  database: process.env.DB_NAME     || 'forum_music',
  waitForConnections: true,
  connectionLimit:    10,
  ssl: process.env.DB_SSL ? { rejectUnauthorized: true } : undefined,
});

module.exports = pool;