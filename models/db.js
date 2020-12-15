const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "postgres123",
  host: "bev-dev.c63uedvar4xd.ap-southeast-1.rds.amazonaws.com",
  port: 5432,
  database: "machine_coding",
});

module.exports = pool;
