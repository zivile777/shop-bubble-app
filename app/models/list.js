var mongoose = require('mongoose');

var ListItemSchema = mongoose.Schema({
  text : String
});

module.exports = mongoose.model('ListItem', ListItemSchema);