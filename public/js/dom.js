//console.log('this is dom.js');

// random number generator
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// get the random number generator to calculate numbers for year, month and date, return a full string
function getRandomYear(){
  var year = getRandomInt(2033, 2084);
  return year;
}

function getRandomMonthNum() {
  var monthNum = getRandomInt(1, 12);
  return monthNum;
}

function getRandomMonthWord() {
  const months = {
    '1': 'January',
    '2': 'February',
    '3': 'March',
    '4': 'April',
    '5': 'May',
    '6': 'June',
    '7': 'July',
    '8': 'August',
    '9': 'September',
    '10': 'October',
    '11': 'November',
    '12': 'December'
  }
  var monthNum = getRandomMonthNum();
  var monthWord = months[monthNum];
  return monthWord;
}

function getRandomDay() {
  var monthNum = getRandomMonthNum();
  if (monthNum === 2) {
    return getRandomInt(1, 28);
  } else if (monthNum === 4 || monthNum === 6 ||  monthNum === 9 || monthNum === 11) {
    return  getRandomInt(1, 30);
  } else {
    return getRandomInt(1, 31);
  }
}

function getRandomDateNum() {
  var year = getRandomYear();
  var month = getRandomMonthNum();
  var day = getRandomDay();
  var dateNum = year + '-' + month + '-' + day;
  return dateNum;
}

function getRandomDateString() {
  var year = getRandomYear();
  var month = getRandomMonthWord();
  var day = getRandomDay();
  var dateString = 'Your date is ' + day + ' ' + month + ' ' + year;
  return dateString;
}
// call the function that return the full string
var dateString = getRandomDateString();
var dateNum = getRandomDateNum();

// target the button
const submit = document.getElementsByTagName("button");
// on click
submit[0].addEventListener('click', function(e){
  console.log('you clicked the button')
  // stop page from reloading
  // e.preventDefault();

  // create div displaying result
  const div = document.getElementsByTagName('div');
  const results = document.createElement('p');
  results.innerText = dateString;
  div[0].appendChild(results);


  const death = document.getElementById('death');
  death.setAttribute('value', dateNum);



  console.log('this is dateNum:', dateNum);

})
