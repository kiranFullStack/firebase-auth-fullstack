import React from "react"
import { Link } from "react-router-dom"

export default function Menubar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/something---">Link 3</Link>
        </li>
      </ul>
    </nav>
  )
}
