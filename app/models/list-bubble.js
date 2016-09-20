var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
  username: {type: String, required: true, index: {unique: true}},
  password: {type: String, required: true},
  lists = [ListSchema]
});

var ListSchema = mongoose.Schema({
  created: {type: Date, default: Date.now},
  list: [ContentSchema]
});

var ContentSchema = mongoose.Schema({
  item: {type: String},
  quantity: {type: Number}
});

var User = mongoose.model('User', UserSchema);

module.exports = User;