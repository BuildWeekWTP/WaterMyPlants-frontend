import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return(
    <>
      <header>
        <nav>
          <h1>Water My Plants</h1>
          <div class="nav-links">
            <Link to='/signup'>Signup</Link>
            <Link to='/'>Login</Link>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Nav