var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var mongoose = require('mongoose');
// routes 
//require('./app/routes')(app); // configure our routes

var app = express();
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

// Create a database variable outside of the database connection callback to reuse the connection pool in your app.
var db;

app.get('/', function(req, res) {

    // ejs render automatically looks in the views folder
    res.render('index');
});
// app.all('/*', function(req, res) {
//   res.send('hello world');
// });

// Connect to the database before starting the application server.
mongoose.connect(process.env.MONGODB_URI, function (err, database) {
  if (err) {
    console.log(err);
    process.exit(1);
  }

  // Save database object from the callback for reuse.
  db = database;
  console.log("Database connection ready");

  // Initialize the app.
  var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
  });
});

module.exports = app;