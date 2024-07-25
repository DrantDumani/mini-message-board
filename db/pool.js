const { Pool } = require("pg");
require("dotenv").config();

const { HOST, USER, DATABASE, PASSWORD, DB_PORT } = process.env;

module.exports = new Pool({
  connectionString: `postgresql://${USER}:${PASSWORD}@${HOST}:${DB_PORT}/${DATABASE}`,
});
