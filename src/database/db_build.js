// BUILD THE DATABASE: to build the database we will call on the connecton details in db_connection and read the SQL file, running it as a string in a .query() method that is able to execute SQL

// what do we need to be able to build the database?
const fs = require('fs');
// what code do we need to be able to access?
const dbConnection = require('./db_connection');

// start by reading the SQL file and converting it into a string
const sql = fs.readFileSync(`${__dirname}/db_build.sql`).toString();

// write the function to build the database
const runDbBuild = (cb) => {
  dbConnection.query(sql, (err, data) => {
    if (err) cb(err);
    cb(null, data);
  });
}

module.exports = runDbBuild;
