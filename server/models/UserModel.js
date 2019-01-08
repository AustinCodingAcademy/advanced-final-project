const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    lowercase: true,
    required: true
  },

  password: {
    type: String,
    required: true
  }
  //radio buttons-what would the type be?
  // role: {
  //   type: String,
  //   required: true
  // }

});

module.exports = mongoose.model("User", userSchema);
