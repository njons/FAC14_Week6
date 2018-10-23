//console.log('this is dom.js');
var nameInput = document.getElementById("name");
var birthdateInput = document.getElementById("birth");
var deathdateInput = document.getElementById("death");
var results = document.getElementById("results");
var submit = document.getElementsByTagName("button");

// random number generator
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// compile a random date for when a user doenst exist in the database
function makeRandomDate() {
  var year = getRandomInt(2033, 2084);
  var month = getRandomInt(01, 12);
  var day = getRandomDay(month);
  return year + "-" + month + "-" + day;
}

// create a random date based on the number of days of the month
function getRandomDay(monthNum) {
  if (monthNum === 2) {
    return getRandomInt(1, 28);
  } else if (
    monthNum === 4 ||
    monthNum === 6 ||
    monthNum === 9 ||
    monthNum === 11
  ) {
    return getRandomInt(1, 30);
  } else {
    return getRandomInt(1, 31);
  }
}

// remove the '0' from all dates starting with zero
function removeZero(num) {
  if (num.slice(0, 1) === "0") {
    return num.split("")[1];
  } else {
    return num;
  }
}

// turn the number of the month inot a word
function getMonthWord(monthNum) {
  const months = {
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December"
  };

  monthNum = removeZero(monthNum);
  return months[monthNum];
}

// turns the converted timestap bits into a sentence
function getDateString(year, month, day) {
  var monthWord = getMonthWord(month);
  var date = removeZero(day);
  return "Your date is " + date + " " + monthWord + " " + year;
}

// render the date from the data in the database (will return as timestamp)
function renderDate(date) {
  console.log("this is date:", date);
  results.innerText = "";

  // clean up the timestamp to be a nice sentence
  var year = date.split("-")[0];
  var month = date.split("-")[1];
  var day = date.split("-")[2];
  var dateString = getDateString(year, month, day);

  // create div displaying result
  results.innerText = dateString;
  results.classList.add("show");
}

// on click
submit[0].addEventListener("click", function(e) {
  console.log("you clicked submit");
  // stop page from reloading
  e.preventDefault();
  // check if given data is on the database
  getDataFromDb();
  // make date display
});

function getDataFromDb() {
  var name = nameInput.value;
  var birth = birthdateInput.value;

  // load a url (to the correct route) with the information needed for the SQL query
  var url = "/get-data?name=" + name + "&birth=" + birth;
  // call the generic xhr request (set method, url and error handling when data comes back)
  xhrRequest("GET", url, function(err, data) {
    if (err) new Error();
    // if the death date is empty...
    if (data.length === 0) {
      // call the random date function to make up a random date
      var randomDate = makeRandomDate();
      // ...and send the data to be added to the database
      postDataToDb(randomDate);

      // if the death date is in the datbase - render it!
    } else {
      renderDate(data[0].deathdate);
    }
  });
}

function postDataToDb(randomDate) {
  console.log("postDataToDb");
  console.log("this is random date:", randomDate);
  var name = nameInput.value;
  var birth = birthdateInput.value;
  // set the deathvalue to be the random date
  deathdateInput.value = randomDate;

  // load a url (to the correct route) with the information needed for the SQL query
  var url =
    "/create-user?name=" + name + "&birth=" + birth + "&death=" + randomDate;
  // call the generic xhr request (set method, url and error handling when data comes back)
  xhrRequest("POST", url, function(err, data) {
    if (err) new Error();
    renderDate(data);
  });
}

// generic xhr request (allow to set different methods and urls)
function xhrRequest(method, url, cb) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      console.log("this is xhr", xhr.responseText);
      console.log(xhr);
      cb(null, JSON.parse(xhr.responseText));
    } else if (xhr.readyState === 4 && xhr.status !== 200) {
      cb("error" + xhr.responseType);
    }
  };
  xhr.open(method, url, true);
  xhr.send();
}
