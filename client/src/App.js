import React, { useEffect } from "react"
import axios from "axios"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import "./App.css"
import Login from "./pages/Login"

export default function App() {
  useEffect(() => {
    // Make a request for a user with a given ID
    axios
      .get("http://localhost:8080/something")
      .then((res) => {
        // handle success
        console.log(res.data, "fetcing data from app.js")
      })
      .catch((error) => {
        // handle error
        console.log(error)
      })
      .finally(() => {
        // always executed
      })
  }, [])

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

function Home() {
  return <h2>Home</h2>
}
