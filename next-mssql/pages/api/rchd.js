import { Connection, Request } from 'tedious';
import express from 'express';

const app = express();

// กำหนดการเชื่อมต่อกับฐานข้อมูล SQL Server
const config = {
  server: 'c259-003\\SQLEXPRESS',
  authentication: {
    type: 'ntlm',
    options: {
      domain: 'BBN', // ใส่ชื่อ domain ที่ใช้งาน (ต้องเป็น string)
    },
  },
  options: {
    database: 'KBF',
    encrypt: true, // ต้องการการเข้ารหัสข้อมูล (SSL/TLS)
  },
};

// เปิดการเชื่อมต่อ SQL Server
const connection = new Connection(config);

connection.connect(err => {
  if (err) {
    console.error('Connection failed:', err);
  } else {
    console.log('Connected to SQL Server');
  }
});

// สร้าง endpoint สำหรับดึงข้อมูลผู้ใช้ทั้งหมด
app.get('/api/users', (req, res) => {
  const request = new Request('SELECT TOP(10) * FROM CMT_RCHD', (err, rowCount, rows) => {
    if (err) {
      console.error('Error querying database:', err);
      res.status(500).send('Error querying database');
    } else {
      res.json(rows);
    }
  });

  connection.execSql(request);
});

// ให้ Next.js ใช้ Express.js สำหรับการรัน API
export default app;
