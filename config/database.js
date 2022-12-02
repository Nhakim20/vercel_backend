const { createPool } = require("mysql");

const pool = createPool({
  port: process.env.DB_PORT,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.MYSQL_DB,
  connectionLimit: 1000,
});

module.exports = pool;

// const { Sequelize } =require("sequelize");

// const pool = new Sequelize('final_project', 'root', 'root', {
//   host: "localhost",
//   dialect: "mysql"
// });

// module.export = pool
