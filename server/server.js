const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const user = require("./routes/user")

const db = require("./config/keys").mongoURI

//
// ─── MONGODB CONNECTION ─────────────────────────────────────────────────────────
//

mongoose.connect(
  db,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => console.log("Mongo Connected 🥁🥁🥁🥁🥁🥁🥁🥁")
)

const app = express()
const port = process.env.POST || 8080

//
// ─── MIDDLEWARES ────────────────────────────────────────────────────────────────
//

app.use(cors())

app.use("/user", user)

//
// ─── ROUTES ─────────────────────────────────────────────────────────────────────
//

app.get("/", (req, res) => res.json({ app: "YogaOmega" }))
app.get("/something", (req, res) => res.json({ app: "something" }))

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
)
