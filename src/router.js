// what do we need to create the routes
const path = require('path');
// what code do we need to access?
const { homeRoute, publicFilesRoute } = require('./handler');

const router = (request, response) => {
  console.log('this is the current url:', request.url)
  const url = request.url;
  if (url === '/') {
    homeRoute(request, response);
  } else if (url.includes('/public/')) {
    publicFilesRoute(request, response, url);
  } else {
    response.writeHead(404, "Content-Type: text/html");
    response.end("<h1>404 not found</h1>");
  }
  // } else if (request.url === '/about') {
  //   publicFilesRoute(response, 'about.html');
  // } else if (request.url === '/getData') {
  //   getDataRoute(request, response);
  // } else if (request.url === '/postData') {
  //   postDataRoute(request, response);
  // } else if (request.url === '/css/main.css') {
  //   publicFilesRoute(response, '/css/main.css');
  // } else {
  //   response.writeHead(404, { 'Content-Type': 'text/plain' });
  //   response.end('File not found');
  // }
}

module.exports = router;
