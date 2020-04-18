const express = require("express")
const router = express.Router()
const User = require("./../models/User")
const bodyParser = require("body-parser")

router.use(bodyParser.json())

router.get("/", (req, res) => {
  User.find()
    .then((result) => res.send(result))
    .catch((err) => console.log(err))
})

router.get("/:id", (req, res) => {
  User.findById()
    .then((result) => res.send(result))
    .catch((err) => console.log(err))
})

router.post("/", (req, res) => {
  const user = new User(req.body)
  user
    .save()
    .then((result) => res.send(result))
    // .then((result) => res.send(result))
    .catch((err) => console.log(err))
})

router.patch("/:id", (req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body)
    .then((result) => res.send(result))
    .catch((err) => console.log(err))
})

router.delete("/:id", (req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then((result) => res.send(result))
    .catch((err) => console.log(err))
})

module.exports = router
