const mongoose = require("mongoose")
const Schema = mongoose.Schema
mongoose.promise = Promise

const UserSchema = new Schema({
  name: {
    type: String,
    unique: false,
  },
  email: {
    type: String,
    unique: true,
  },
  googleId: {
    type: String,
    unique: true,
  },
  asana: {
    type: Boolean,
    default: false,
  },
  pranayama: {
    type: Boolean,
    default: false,
  },
  meditation: {
    type: Boolean,
    default: false,
  },
})

module.exports = mongoose.model("User", UserSchema)
