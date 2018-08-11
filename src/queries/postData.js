//what code do we need to accsess to get data from the database?

const dbConnection = require('../database/db_connection');

const postData = (name, birthdate, cb) => {
  dbConnection.query('INSERT INTO users (name, birthdate) VALUES ($1, $2)',
  [name, birthdate],
  (err, data) => {
    console.log('this is the post data in postData:', data)
    if (err) return cb(err);
    cb(null, data);
  })
}

module.exports = postData;
