//what code do we need to accsess to get data from the database?

const dbConnection = require('../database/db_connection');

const postData = (name, birthdate, cb) => {
  dbConnection.query('INSERT INTO users (name, birthdate) VALUES ($1, $2)',
  [name, birthdate],
  (err, data) => {
    if (err) return cb(err);
    cb(null, data);
    console.log('data was posted to the database')
  })
}

module.exports = postData;
