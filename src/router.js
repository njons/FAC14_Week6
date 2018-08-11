// what do we need to create the routes
const path = require('path');
// what code do we need to access?
const { publicFilesRoute, getDataRoute, postDataRoute } = require('./handler');

const router = (request, response) => {
  console.log('this is the current url:', request.url)

  if (request.url === '/') {
    publicFilesRoute(response, 'index.html');
  } else if (request.url === '/about') {
    publicFilesRoute(response, 'about.html');
  } else if (request.url === '/getData') {
    getDataRoute(request, response);
  } else if (request.url === '/postData') {
    postDataRoute(request, response);
  } else if (request.url === '/css/main.css') {
    publicFilesRoute(response, '/css/main.css');
  } else {
    // console.log('request url', request.url)
    // console.log()
    // publicFilesRoute(response, '/css/main.css');
    // publicFilesRoute(request, request.url);
    response.writeHead(404, { 'Content-Type': 'text/plain' });
    response.end('File not found');
  }
}

module.exports = router;
