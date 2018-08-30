// what code do we need to accsess to get data from the database?
const dbConnection = require("../database/db_connection");

const postData = (name, birth, death, cb) => {
  console.log(name);
  console.log(birth);
  console.log(death);
  dbConnection.query(
    "INSERT INTO users (name, birthdate, deathdate) VALUES ($1, $2, $3)",
    [name, birth, death],
    (err, data) => {
      if (err) return cb(err);
      cb(null, death);
    }
  );
};

module.exports = postData;
