var mongoose = require('mongoose');

var ListItemSchema = new mongoose.Schema({
  text : String
});

module.exports = mongoose.model('ListItem', ListItemSchema);