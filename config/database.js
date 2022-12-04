const { createPool } = require("mysql");

// const pool = createPool({
//   port: process.env.DB_PORT,
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASS,
//   database: process.env.MYSQL_DB,
//   connectionLimit: 1000,
// });

const pool = createPool({
  port: 3306,
  host: 'db4free.net',
  user: 'akingtest',
  password: 'Aking123',
  database: 'final_project123',
  connectionLimit: 1000,
  multipleStatements: true
});
// # APP_PORT=4000
// # DB_PORT=3306
// # DB_HOST=sql6.freemysqlhosting.net
// # DB_USER=sql6582540
// # DB_PASS=Ht66R4GXun
// # MYSQL_DB=final_project


module.exports = pool;

// const { Sequelize } =require("sequelize");

// const pool = new Sequelize('final_project', 'root', 'root', {
//   host: "localhost",
//   dialect: "mysql"
// });

// module.export = pool
