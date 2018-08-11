//console.log('this is dom.js');

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

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomDate(){
  var year = getRandomInt(2033, 2084);
  var monthNum = getRandomInt(1, 12);
  var monthWord = months[monthNum];

  if (monthNum === 2) {
    var day = getRandomInt(1, 28);
  } else if (monthNum === 4 || monthNum === 6 ||  monthNum === 9 || monthNum === 11) {
    var day = getRandomInt(1, 30);
  } else {
    var day = getRandomInt(1, 31);
  }

  var date = 'Your date is ' + day + ' ' + monthWord + ' ' + year;
  return date;
}


// what code do we need to accsess?
const submit = document.getElementsByTagName("button");


submit[0].addEventListener('click', function(e){
  console.log('you clicked the button')
  e.preventDefault();
  getRandomDate()

  


})
