// What do we need to tets the database?
const tape = require("tape");

// what code do we need to acsess to test the datbase?
const runDbBuild = require("../src/database/db_build");
const getData = require("../src/queries/getData");
// const postData = require("../src/queries/postData");


tape("tape is working", t => {
  t.equals(1, 1, "one equals one");
  t.end();
});


tape('test that no error is triggered when database is created', (t)=> {
  runDbBuild(function(err, data){
    t.equals(err, null, "no error was triggered when creating the database");
    t.end();
  })
})

// tape('test that the expected data is recieved from the database', (t)=> {
//   runDbBuild(function(err, data) {
//     getData((err, data) => {
//       if (err) console.log(err);
//       t.deepEqual(result, expected, "Returns expected data");
//       t.end();
//     })
//     // getData = (err, data) => {
//     //   t.equals(data.rowCount, 3, "three lined of data were adedd to the database");
//     // }
//   })
// })

//
// tape("getData", t => {
//   runDbBuild(function(err, res) {
//     t.error(err, "No Error"); //Assert that db_build finished successfully with no errors
//
//     let expected = [
//       {
//         id: 1,
//         name: "Alina",
//         location: "Moscow"
//       }
//     ];
//
//     getData((err, result) => {
//       if (err) console.log(err);
//       t.deepEqual(result, expected, "Returns expected data");
//       t.end();
//     });
//     t.end();
//   });
// });
