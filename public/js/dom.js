//console.log('this is dom.js');
var nameInput = document.getElementById("name");
var birthdateInput = document.getElementById("birth");

// random number generator
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomDate() {
  var year = getRandomInt(2033, 2084);
  var monthNum = getMonthWord(getRandomInt(01, 12));
  var day = getRandomDay(monthNum);
  renderDate("Your date is " + day + " " + month + " " + year);
}

function getMonthWord(monthNum) {
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
  console.log(monthNum);
  console.log(months[monthNum]);
  return months[monthNum];
}

function getRandomDay(monthNum) {
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

function getDateString(date) {
  console.log(date);
  var year = date.split("-")[0];
  console.log(year);
  var month = getMonthWord(date.split("-")[1]);
  console.log(month);
  var day = date.split("-")[2];
  console.log(day);
  renderDate("Your date is " + day + " " + month + " " + year);
  // console.log(dateString);
}

// call the function that returns the full string
// var dateString = getDateString();
// var dateNum = getRandomDateNum();

function xhrRequest(url, cb) {
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
  xhr.open("GET", url, true);
  xhr.send();
}

// target the button
const submit = document.getElementsByTagName("button");
// on click
submit[0].addEventListener("click", function(e) {
  console.log("you clicked the button");
  // stop page from reloading
  e.preventDefault();
  renderDate();
  getDataFromDb();
});

function setValue(dateNum) {
  const death = document.getElementById("death");
  death.setAttribute("value", dateNum);
  console.log(dateNum);
}

function renderDate(dateString) {
  console.log(dateString);
  // create div displaying result
  const div = document.getElementsByTagName("div");
  const results = document.createElement("p");
  results.innerText = dateString;
  div[0].appendChild(results);
}

function getDataFromDb() {
  var name = nameInput.value;
  var birth = birthdateInput.value;

  var url = "/get-data?name=" + name + "&birth=" + birth;
  xhrRequest(url, function(err, data) {
    if (err) new Error();
    console.log("this is data in the front:", data);
    var date = data[0].deathdate;
    getDateString(date);
  });
}
