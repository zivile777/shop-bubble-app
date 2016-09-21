  var express  = require('express');
  var app      = express();                        
  var mongoose = require('mongoose'); 
  var morgan   = require('morgan');
  var bodyParser = require('body-parser');
  var methodOverride = require('method-override');
  //var database = require('./config/database');
  //var port     = process.env.PORT || 8888;
  var db;
  var mongoUri = process.env.MONGODB_URI;
  mongodb.MongoClient.connect(mongoUri, function (err, database) {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  // Save database object from the callback for reuse.
  db = database;
  console.log("Database connection ready!");
  // Initialize the app.
  var server = app.listen(port, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
  });
});
//mongoose.connect(process.env.MONGOLAB_URI || database.url);

  app.use(express.static(__dirname + '/public')); 
  app.use(morgan('dev'));
  app.use(bodyParser.urlencoded({'extended':'true'}));
  app.use(bodyParser.json()); 
  app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
  app.use(methodOverride());

  require('./app/routes.js')(app);

  // app.listen(port);
  // console.log("App listening on port : " + port);

  module.exports = app;