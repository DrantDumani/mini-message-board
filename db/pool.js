const { Pool } = require("pg");
require("dotenv").config();

const { URI } = process.env;

module.exports = new Pool({
  connectionString: URI,
});
