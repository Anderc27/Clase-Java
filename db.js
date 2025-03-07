const { request } = require('express');

require('dotenv').config();
const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: process.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    //port: process.env.DB_PORT, -->En caso de que no sea el por defecto, el 3306
    waitForConnections:true,
    queueLimit:0,
    connectionLimit:10

});
module.exports = pool;