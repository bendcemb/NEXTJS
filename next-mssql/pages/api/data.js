import sql from 'mssql';

const config = {
  server: 'c259-003',
  port: 1433,
  database: 'KBF',
  options: {
    encrypt: true,  // ใช้สำหรับการเชื่อมต่อผ่าน Azure
    trustServerCertificate: true,
    integratedSecurity: true // ใช้การเชื่อมต่อแบบ Integrated Security
  }
};

export default async function handler(req, res) {
  try {
    await sql.connect(config);
    const result = await sql.query('SELECT TOP(100) * FROM CMT_RCHD');
    res.status(200).json(result.recordset);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  } finally {
    sql.close();
  }
}
