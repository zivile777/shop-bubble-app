//modules
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

//mongoose.connect('mongodb://heroku_fnjw7508:3jlnk9k1nm9a83jfa3h1lv70c0@ds035786.mlab.com:35786/heroku_fnjw7508');

var app = express();

var db;

app.all('/*', function(req, res) {
  res.send('hello world');
});

mongoose.connect(process.env.MONGODB_URI, function(err, database) {
    if (err) {
      console.log(err);
     process.exit(1);
   }
   db = database;
   console.log('Database connection ready');
 
   var server = app.listen(process.env.PORT || 8080, function() {
     var port = server.address().port;
     console.log('App now running on port ', port);
   });
 });
 
 function handleError(res, reason, message, code) {
   console.log('ERROR: ' + reason);
    res.status(code || 500).json({'error': message});
  }

app.use(express.static(__dirname + '/public')); 

// parse application/json 
app.use(bodyParser.json()); 

// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true })); 

// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override')); 

// Routes
app.use('/api', require('./routes/api'));

// var port = process.env.PORT || 8080;

// app.listen(port);               
           
// console.log('Magic happens on port ' + port);
   
exports = module.exports = app;                         

