// what do we need to create a server
const http = require('http');
const port = process.env.PORT || 3000;
const hostname = process.env.HOSTNAME || 'localhost';
// what code do we need to access?
const routes = require('./routes');


const server = http.createServer(routes);
server.listen(port, () => {
  console.log(`sever is sunning at: http://${hostname}:${port}`);
})
