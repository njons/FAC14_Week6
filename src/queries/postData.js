// what code do we need to accsess to get data from the database?

const dbConnection = require('../database/db_connection');

const postData = (name, birthdate, deathdate, cb) => {
  dbConnection.query('INSERT INTO users (name, birthdate, deathdate) VALUES ($1, $2, $3)',
  [name, birthdate, deathdate],
  (err, data) => {
    console.log(err)
    if (err) return cb(err);
    cb(null, data);
    console.log('data was posted to the database')
  })
}

module.exports = postData;
