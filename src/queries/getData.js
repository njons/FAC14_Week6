// what code do we need to access to get the data?
const dbConnection = require("../database/db_connection");

const getData = cb => {
  const sql =
    'SELECT deathdate FROM users WHERE "name"=$1 AND "birthdate" = $2;';
  // const sql = 'SELECT deathdate FROM users WHERE `name` = $name AND `birthdate` = $birthdate;';
  dbConnection.query(sql, (err, data) => {
    if (err) return cb(err);
    console.log("this is the data from the database", data.rows);
    cb(null, data.rows);
  });
};

module.exports = getData;
