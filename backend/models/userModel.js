const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstname: {
    type: String,
  },
  lastname: {
    type: String,
  },
  username: {
    type: String,
  },
  password: {
    type: String,
  },
  confirmpsw: {
    type: String,
  },
});
const UserModel = mongoose.model("login", UserSchema);
module.exports = UserModel;