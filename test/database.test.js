// What do we need to tets the database?
const tape = require("tape");

// what code do we need to acsess to test the datbase?
const runDbBuild = require("../src/database/db_build");
// const getData = require("../src/queries/getData");
// const postData = require("../src/queries/postData");


tape("tape is working", t => {
  t.equals(1, 1, "one equals one");
  t.end();
});
