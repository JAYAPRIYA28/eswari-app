const {Pool} = require('pg');
require("dotenv").config();

const devConfig = {
  
    user: process.env.POSTGRESQL_ADDON_USER,
    host: process.env.POSTGRESQL_ADDON_HOST,
    database: process.env.POSTGRESQL_ADDON_DB,
    password: process.env.POSTGRESQL_ADDON_PASSWORD,
    port: process.env.POSTGRESQL_ADDON_PORT,
   
}

const proConfig = {
  connectionString:process.env.POSTGRESQL_ADDON_URI
}

const pool = new Pool(
  process.env.NODE_ENV === "production" ? proConfig : devConfig);
module.exports = {
    query: (text, params) => pool.query(text, params),
  }