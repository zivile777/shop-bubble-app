  var express  = require('express');
  var mongoose = require('mongoose');
  var morgan   = require('morgan');
  var bodyParser = require('body-parser');
  var app      = express();    
  var port     = process.env.PORT || 8888;

  mongoose.connect(process.env.MONGODB_URI, function(err) {
    if (err) {
      console.log('error conncectin to database: ', err);
    } else{
      console.log('connected')
    }
  });

  app.use(express.static(__dirname + '/public')); 
  app.use(morgan('dev'));
  app.use(bodyParser.urlencoded({'extended':'true'}));
  app.use(bodyParser.json()); 
  app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

  require('./app/routes.js')(app);

  app.listen(port);
  console.log("App listening on port : " + port);

  module.exports = app;