const express = require("express")
const router = express.Router()
const User = require("./../models/User")
var bodyParser = require("body-parser")

router.get("/", (req, res) => {
  res.json({ message: "Users Works" })
})

router.post("/", (req, res) => {
  res.json({ message: "Users Works Post" })
})

router.put("/", (req, res) => {
  res.json({ message: "Users Works Put" })
})

router.delete("/", (req, res) => {
  res.json({ message: "Users Works Delete" })
})

module.exports = router
