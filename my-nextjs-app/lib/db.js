// lib/db.js
import sql from 'mssql';

const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER, // You can use 'localhost\\instance' to connect to named instance
  database: process.env.DB_NAME,
  options: {
    encrypt: true, // Use this if you're on Windows Azure
    trustServerCertificate: true // Change to false for production environments
  }
};

let pool;

export const getConnection = async () => {
  if (!pool) {
    pool = await sql.connect(config);
  }
  return pool;
};

export default sql;
