// create a web server
var express = require("express");
var app = express();
var bodyParser = require("body-parser");

// create a route to handle comments
app.get("/comments", function (req, res) {
  res.send("This is the comments page");
});

// create a route to handle comments
app.post("/comments", function (req, res) {
  res.send("You have sent a POST request");
});

// start the server
app.listen(3000);
console.log("Server is listening on port 3000");
