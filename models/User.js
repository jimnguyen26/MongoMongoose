const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  text: {
    type: String,
    trim: true,
    required: "String is required"
  },
  date: {
    type: Date,
    default: Date.now()
  }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
