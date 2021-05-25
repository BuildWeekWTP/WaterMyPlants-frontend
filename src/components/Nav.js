import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return(
    <>
      <header>
        <nav>
          <h1>Water My Plants</h1>
          <div className="nav-links">
            <Link to='/MyPlants'>My Plants</Link>
            <Link to='/signup'>Signup</Link>
            <Link to='/'>Login</Link>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Nav