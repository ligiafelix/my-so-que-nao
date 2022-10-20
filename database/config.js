<<<<<<< HEAD
{
  "development": {
    "username": "root",
    "password": null,
    "database": "database_development",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
=======
require('dotenv').config();

const config = {
  username: process.env.DBUSER,
  password: process.env.DBPASS,
  host: process.env.DBHOST,
  port: process.env.DBPORT,
  dialect: process.env.DBDIALECT,
  database: process.env.DBNAME
}

module.exports = config;
>>>>>>> f76fa1fae873e6b210eab8885d39bcbeb153af5a
