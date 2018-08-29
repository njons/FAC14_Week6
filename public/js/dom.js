//console.log('this is dom.js');

// random number generator
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// get the random number generator to calculate numbers for year, month and date, return a full string
function getRandomYear() {
  var year = getRandomInt(2033, 2084);
  return year;
}

function getRandomMonthNum() {
  var monthNum = getRandomInt(01, 12);
  if (monthNum < 10) {
    var monthNum0 = "0" + monthNum;
  }
  return monthNum;
}

function getRandomMonthWord() {
  const months = {
    01: "January",
    02: "February",
    03: "March",
    04: "April",
    05: "May",
    06: "June",
    07: "July",
    08: "August",
    09: "September",
    10: "October",
    11: "November",
    12: "December"
  };
  var monthNum = getRandomMonthNum();
  var monthWord = months[monthNum];
  return monthWord;
}

function getRandomDay() {
  var monthNum = getRandomMonthNum();
  if (monthNum === 02) {
    return getRandomInt(1, 28);
  } else if (
    monthNum === 04 ||
    monthNum === 06 ||
    monthNum === 09 ||
    monthNum === 11
  ) {
    return getRandomInt(1, 30);
  } else {
    return getRandomInt(1, 31);
  }
}

function getRandomDateNum() {
  var year = getRandomYear();
  var month = getRandomMonthNum();
  var day = getRandomDay();
  var dateNum = year + "-" + month + "-" + day;
  return dateNum;
}

function getRandomDateString() {
  var year = getRandomYear();
  var month = getRandomMonthWord();
  var day = getRandomDay();
  var dateString = "Your date is " + day + " " + month + " " + year;
  return dateString;
}
// call the function that return the full string
var dateString = getRandomDateString();
var dateNum = getRandomDateNum();

function xhrRequest(url, cb) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      console.log("this is xhr", xhr.status);
      console.log("this is xhr", xhr.responseText);
      // cb(null, xhr.responseText);
    } else if (xhr.readyState === 4 && xhr.status !== 200) {
      cb("error" + xhr.responseType);
    }
  };
  xhr.open("GET", url, true);
  xhr.send();
}

var nameInput = document.getElementById("name");
var birthdateInput = document.getElementById("birthdate");

// target the button
const submit = document.getElementsByTagName("button");
// on click
submit[0].addEventListener("click", function(e) {
  console.log("you clicked the button");
  // stop page from reloading
  e.preventDefault();

  // create div displaying result
  const div = document.getElementsByTagName("div");
  const results = document.createElement("p");
  results.innerText = dateString;
  div[0].appendChild(results);

  const death = document.getElementById("death");
  death.setAttribute("value", dateNum);
  getDataFromDb(nameInput.innerText, birthdateInput.innerText);
});

function getDataFromDb(name, birthdate) {
  var url = "/get-data?name=" + name + "&birthdate=" + birthdate;
  xhrRequest(url, function(err, data) {
    if (err) return console.log(err);
    console.log("this is data:", data);
    var date = JSON.parse(data);
  });
}
