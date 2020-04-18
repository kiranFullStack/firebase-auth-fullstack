const express = require("express")
const router = express.Router()
const User = require("./../models/User")

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
  Courses.findByIdAndDelete(req.params.id, req.body)
    .then((result) => res.send(result))
    .catch((err) => console.log(err))
})

module.exports = router
