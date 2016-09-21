var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
  name: {type: String}
});

module.exports = mongoose.model('User', UserSchema);