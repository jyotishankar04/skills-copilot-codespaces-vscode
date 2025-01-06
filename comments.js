// create a web server
let http = require("http");
let fs = require("fs");
let url = require("url");
let querystring = require("querystring");

let comments = [];

http
  .createServer((req, res) => {
    // parse url
    let parseObj = url.parse(req.url, true);
    let pathName = parseObj.pathname;
    // console.log(pathName);
    if (pathName === "/") {
      fs.readFile("./views/index.html", (err, data) => {
        if (err) {
          return res.end("404 Not Found");
        }
        res.end(data);
      });
    } else if (pathName === "/post") {
      fs.readFile("./views/post.html", (err, data) => {
        if (err) {
          return res.end("404 Not Found");
        }
        res.end(data);
      });
    } else if (pathName.indexOf("/public/") === 0) {
      fs.readFile("." + pathName, (err, data) => {
        if (err) {
          return res.end("404 Not Found");
        }
        res.end(data);
      });
    } else if (pathName === "/comments") {
      let query = parseObj.query;
      comments.push(query);
      res.statusCode = 302;
      res.setHeader("Location", "/");
      res.end();
    } else {
      fs.readFile("./views/404.html", (err, data) => {
        if (err) {
          return res.end("404 Not Found");
        }
        res.end(data);
      });
    }
  })
  .listen(3000, () => {
    console.log("Server is running...");
  });
