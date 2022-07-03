import {config}  from 'dotenv'

config()

const {
    DB_USER,
    DB_PASSWORD,
    DB_HOST,
    DB_PORT,
    DB_NAME,
  } = process.env;
  
const db = {
    url: `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`
  };

export default db
  