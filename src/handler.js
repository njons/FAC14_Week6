// ---------------------------------------------------------
//  HANDLERS: specifies what happens at the urls
// ---------------------------------------------------------

// what do we need to create the handlers
const fs = require('fs');
const path = require('path');

// refactored function to serve files in the public (all types) for '/' and '/about'
const publicFilesRoute = (response, filename) => {
  fs.readFile(path.join(__dirname, '..', 'public', filename), (err, file) => {
    const fileType = path.extname(filename);
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


    if(err) {
      response.writeHead(404, { 'content-type': 'text/plain' });
      response.end('File not found');
    } else {
      console.log(fileType)
      console.log(mimeType)
      console.log(mimeType[fileType])
      // response.writeHead(404, { 'Content-Type': 'text/plain' });
      // response.end('File not found');
      response.writeHead(200, { 'content-type': mimeType[fileType] });
      response.end(file);
    }
  });

}


module.exports = { publicFilesRoute };
