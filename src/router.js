// what do we need to create the routes
const path = require("path");
// what code do we need to access?
const {
  homeRoute,
  publicFilesRoute,
  postDataRoute,
  getDataRoute
} = require("./handler");

const router = (request, response) => {
  console.log("this is the current url:", request.url);
  const url = request.url;
  if (url === "/") {
    homeRoute(request, response);
  } else if (url.includes("/public/")) {
    publicFilesRoute(request, response, url);
  } else if (url.includes("/create-user")) {
    postDataRoute(request, response, url);
  } else if (url.includes("/get-data")) {
    getDataRoute(request, response, url);
  } else {
    response.writeHead(404, "Content-Type: text/html");
    response.end("<h1>404 not found</h1>");
  }
};

module.exports = router;
