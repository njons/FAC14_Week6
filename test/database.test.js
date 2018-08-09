// what do we need to run the tests?
const tape = require('tape');
// what code do we need to access to run the tests?
const dbConnect = require('../src/database/db_build');


tape("tape for database is working", t => {
  t.equals(1, 1, "one equals one");
  t.end();
});
