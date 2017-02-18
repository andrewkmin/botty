var mongoose = require('mongoose');
// Create a connect.js inside the models/ directory that
// exports your MongoDB URI!
var connect = process.env.MONGODB_URI || require('../config.js').MONGODB_URI;

// If you're getting an error here, it's probably because
// your connect string is not defined or incorrect.
mongoose.connect(connect);

var UserSchema = new mongoose.Schema({
  recipientId: String,
  access_token: String,
  refresh_token: String
})

var User = mongoose.model('User', UserSchema)

module.exports = User;
