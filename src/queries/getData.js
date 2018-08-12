// what code do we need to access to get the data?
const dbConnection = require('../database/db_connection');

const getData = (cb) => {
  dbConnection.query('SELECT * FROM users', (err, data) => {
    // console.log('this is data from getData', data)
    if (err) return cb(err);
    // console.log('what is data.rows?', data.rows);
    cb(null, data.rows);
  })
}


module.exports = getData;
