import React, { useEffect, useState } from "react"
import firebase from "firebase"
import StyledFirebaseUi from "react-firebaseui/StyledFirebaseAuth"
import "whatwg-fetch"
import axios from "axios"

// firebase configs

let firebaseConfig = {
  apiKey: "AIzaSyDqzt3_Ugr5LAWvY5XZ7Apa9tGjpwZMQvE",
  authDomain: "simcoder-example.firebaseapp.com",
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
var uiConfig = {
  callbacks: {
    //After user signs in this function is called
    signInSuccessWithAuthResult: function (authResult, redirectUrl) {
      axios
        .post("/api/auth/verifyUser", null, {
          params: { user: firebase.auth().currentUser },
        })
        .then((res) => {
          console.log(res)
        })
      return true
    },
  },
  signInFlow: "redirect",
  signInSuccessUrl: "/",
  signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
}

export default function Login() {
  const [isAuthenticated, setisAuthenticated] = useState(false)

  useEffect(() => {
    //Auth State Listener, called any time the user logs in or out
    firebase.auth().onAuthStateChanged((user) => {
      setisAuthenticated(!isAuthenticated)
    })
  }, [])

  return (
    <>
      <h1>Login</h1>
      <StyledFirebaseUi uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </>
  )
}
