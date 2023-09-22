const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username:String,
  email:String,
  password:String,
  type:String
});

module.exports = mongoose.model("Users", userSchema);
