const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  fname:{
    type: String
  },
  lname:{
    type: String
  },
  username: {
    type: String
  },
  password: {
    type: String
  }
});
const UserModel = mongoose.model("login", UserSchema);
module.exports = UserModel;