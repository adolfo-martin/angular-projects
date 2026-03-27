const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: process.env.DB_HOST || '127.0.0.1',
  user: process.env.DB_USER || 'hardware_solutions',
  password: process.env.DB_PASSWORD || 'Hola1234',
  database: process.env.DB_NAME || 'hardware_solutions'
});

module.exports = connection;