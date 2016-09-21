var mongoose = require('mongoose');

module.exports = mongoose.model('ListItem', {
  text : String,
  done : Boolean
});