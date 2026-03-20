import pkg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const { Pool } = pkg;

export const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

export const connectWithRetry = async () => {
  let retries = 10;

  while (retries) {
    try {
      await pool.query('SELECT 1');
      console.log('Conectado a PostgreSQL');
      return;
    } catch (err) {
      console.log('Esperando a PostgreSQL...');
      retries--;

      await new Promise(res => setTimeout(res, 2000));
    }
  }

  console.error('No se pudo conectar a PostgreSQL');
  process.exit(1);
};