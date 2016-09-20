//modules
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

mongoose.connect('mongodb://heroku_fnjw7508:3jlnk9k1nm9a83jfa3h1lv70c0@ds035786.mlab.com:35786/heroku_fnjw7508');

var app = express();

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

var port = process.env.PORT || 8080;

app.listen(port);               
           
console.log('Magic happens on port ' + port);
   
exports = module.exports = app;                         

