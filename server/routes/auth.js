const User = require("./../models/User")

var admin = require("firebase-admin")
const serviceAccount = require("../config/simcoder-example-firebase-adminsdk-872mo-bf6dbb452e.json")

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "simcoder-example.firebaseio.com",
})

module.exports = (app) => {
  /**
   * Endpoint responsible for calling the verifyAccount function
   * and sending back the response from it
   */
  app.post("/auth/verifyUser", (req, res, next) => {
    console.log("/auth/verifyUser is being called.")
    verifyAccount(req, function (callback) {
      return res.send(callback)
    })
  })
}

/**
 * Checks wether or not the token of the user is valid,
 * if it is then it means the user is properly logged in.
 */
verifyAccount = (req, callback) => {
  const { query } = req
  const { user } = query

  userJson = JSON.parse(user)

  console.log("______________")
  console.log(userJson)
  console.log("______________")
  console.log("verifying user")

  admin
    .auth()
    .verifyIdToken(userJson.stsTokenManager.accessToken)
    .then(function (decodedToken) {
      console.log("user verified")
    })
    .catch(function (error) {
      console.log(error)
    })
}
