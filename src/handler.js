// ---------------------------------------------------------
//  HANDLERS: specifies what happens at the urls
// ---------------------------------------------------------

// what do we need to create the handlers
const fs = require('fs');
const path = require('path');

// what code do we need to accsess?
const postData = require('./queries/postData');

// the root of the site
const homeRoute = (request, response) => {
  fs.readFile(path.join(__dirname, '..', 'public', 'index.html'), (err, file) => {
    if (err) {
      response.writeHead(500, {'content-type': 'text/html'});
      response.end('Something went wrong');
    } else {
      response.writeHead(200, {'content-type':'text/html'});
      response.end(file);
    }
  });
}

const publicFilesRoute = (request, response, url) => {
  const fileType = url.split('.')[1];
  const mimeType = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.ico': 'image/x-icon',
    '.js': 'application/javascript',
    '.json': 'application/json',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.png': 'image/png',
    '.svg': 'image/svg+xml',
  };
  fs.readFile(path.join(__dirname, '..', request.url), (err, file) => {
    if (err) {
      response.writeHead(500, {'content-type': 'text/html'});
      response.end('Something went wrong');
    } else {
      console.log(fileType)
      response.writeHead(200, `Content-Type: ${mimeType[fileType]}`);
      response.end(file);
    }
  });
}

const postDataRoute = (request, response) => {
  postData((err, data) => {
      if (err) {
        response.writeHead(500, {'content-type':'text/html'});
        response.end('Something went wrong with the server')
      } else {
        response.writeHead(200, {'content-type':'text/html'});
        response.end(JSON.stringify(data))
      }

  })
}





module.exports = { homeRoute, publicFilesRoute };
