
var apiRequest = function(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
      if (xhr.status == 200) {
        var parsedObj = JSON.parse(xhr.responseText);
        return callback(parsedObj);
      } else {
        console.log('Error');
      }
    }
  };
  xhr.open('GET', url, true);
  xhr.send();
};
