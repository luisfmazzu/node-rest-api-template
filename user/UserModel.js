var mongoose = require('mongoose');  
var UserSchema = new mongoose.Schema({  
  fullName: String,
  email: String,
  password: String,
  thirdPartyId: String,
  role: String,
  createdOn: Number,
  lastModified: Number,
});
mongoose.model('User', UserSchema);

module.exports = mongoose.model('User');