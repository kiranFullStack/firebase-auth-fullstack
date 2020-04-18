const mongoose = require("mongoose")
const Schema = mongoose.Schema

const UserSchema = new Schema({
  name: {
    type: String,
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
