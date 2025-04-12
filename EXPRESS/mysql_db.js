require('dotenv').config();
const mysql = require('mysql');

const mysql_db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    multipleStatements: true, // helps for stored procedures
    port: process.env.DB_PORT,
  });
  mysql_db.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

  module.exports = mysql_db;