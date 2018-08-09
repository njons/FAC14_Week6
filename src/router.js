// what do we need to create the routes
const path = require('path');
// what code do we need to access?
const { publicFilesRoute, getDataRoute, postDataRoute } = require('./handler');

const router = (request, response) => {
  const url = request.url;
  console.log('this is the current url', url)

  if (url === '/') {
    publicFilesRoute(response, 'index.html');
  } else if (url === '/about') {
    publicFilesRoute(response, 'about.html');
  } else if (url === '/getData') {
    getDataRoute(request, response);
  } else if (url === '/postData') {
    postDataRoute(request, response);
  } else {
    response.writeHead(404, { 'Content-Type': 'text/plain' });
    response.end('File not found');
  }
}

module.exports = router;
