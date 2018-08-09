// what do we need to create the routes
const path = require('path');
// what code do we need to access?
const { publicFilesRoute, getDataRoute, postDataRoute } = require('./handler');

const routes = (request, response) => {
  const url = request.url;

  if (url === '/') {
    publicFilesRoute(request, 'index.html');
  } else if (url === '/about') {
    publicFilesRoute(request, 'about.html');
  } else if (url === '/getData') {
    getDataRoute(request, response);
  } else if (url === '/postData') {
    postDataRoute(request, response);
  }
}
