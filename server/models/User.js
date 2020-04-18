const mongoose = require("mongoose")
const Schema = mongoose.Schema

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
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

module.exports = User = mongoose.model("users", UserSchema)
