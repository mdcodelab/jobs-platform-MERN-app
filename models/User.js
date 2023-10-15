const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide name!"],
    minlength: 3,
    maxlength: 30,
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Please provide email!"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please provide password!"],
    minlength: 6,
  },
  lastName: {
    type: String,
    minlength: 3,
    maxlength: 30,
    trim: true,
    default: "LastName",
  },
  location: {
    type: String,
    minlength: 3,
    maxlength: 30,
    trim: true,
    default: "MyCity",
  },
});

module.exports = mongoose("UserModel", UserSchema);