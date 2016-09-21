var mongoose = require('mongoose');

var ListItemSchema = mongoose.Schema({
  text : String,
  done : Boolean
});

module.exports = mongoose.model('ListItem', ListItemSchema);