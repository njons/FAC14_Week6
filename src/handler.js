// ---------------------------------------------------------
//  HANDLERS: specifies what happens at the urls
// ---------------------------------------------------------

// what do we need to create the handlers
const fs = require('fs');
const path = require('path');
const queryString = require('querystring');

// what code do we need to accsess?
const postData = require('./queries/postData');
const getData = require('./queries/getData');


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
      response.writeHead(200, `Content-Type: ${mimeType[fileType]}`);
      response.end(file);
    }
  });
}

const postDataRoute = (request, response) => {
  let data = "";
  request.on('data', (chunk) => {
    data += chunk;
  })
  request.on('end', function() {
    console.log('this is the post data from the browser:', queryString.parse(data))
    const name = queryString.parse(data).name;
    const birthdate = queryString.parse(data).birth;
    const deathdate = queryString.parse(data).death;
    console.log(deathdate);
      postData(name, birthdate, deathdate, (err, data) => {
        if (err) {
          response.writeHead(500, {'content-type':'text/html'});
          response.end('Something went wrong with the server');
          console.log('this is the post data from the browser:', err);
        } else {
          // response.writeHead(302, { 'Content-Type': 'location', 'Location': '/'});
          // return response.end('Success');
          response.writeHead(200, {'content-type':'text/html'});
          fs.readFile(path.join(__dirname, '..', 'public', 'index.html'), (error, file) => {
            if (error) {
              return;
            } else {
              response.end(file);
            }
          })
        }
      })
  })
}

const getDataRoute = (request, response) => {
  getData((err, data) => {
    console.log('this is the data from the database:', data)
    console.log('this is the convereted data form the database', JSON.stringify(data))
  })
}

// const getAvailabilityRoute = (req, res) => {
//   getAvailability((err, data) => {
//     if (err) {
//       res.writeHead(500, { 'content-type': 'text/plain' });
//       res.end('Error with request');
//     } else {
//       res.writeHead(200, { 'content-type': 'application/json' });
//       res.end(JSON.stringify(data));
//     }
//   })
// }



module.exports = { homeRoute, publicFilesRoute, postDataRoute, getDataRoute };
