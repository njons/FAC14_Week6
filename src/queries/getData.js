// what code do we need to access to get the data?
const dbConnection = require("../database/db_connection");

const getData = (name, birth, cb) => {
  console.log("this is name:", name);
  const sql = `SELECT deathdate FROM users WHERE "name" = $1 AND "birthdate" = $2;`;
  dbConnection.query(sql, [name, birth], (err, data) => {
    console.log(data);
    console.log("this is err", err);
    if (err) return cb(err);
    console.log("this is the data from the database", data.rows);
    cb(null, data.rows);
  });
};

module.exports = getData;
