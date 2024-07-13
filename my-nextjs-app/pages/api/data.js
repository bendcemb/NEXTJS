// pages/api/data.js
import { getConnection } from '../../lib/db';

export default async function handler(req, res) {
  try {
    const pool = await getConnection();
    const result = await pool.request().query('SELECT * FROM user');
    res.status(200).json(result.recordset);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
