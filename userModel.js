var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  //Code goes in here
  username: {
  type: String,
  trim: true,
  required: "username is required"
},
  password: {
  type: String,
  required: "password is required"
  

  },
  email: {
  type: String,
  match: [/.+\@.+\..+/, "Please enter a real email"]
}
});

var User = mongoose.model('User', UserSchema);
module.exports = User;