import React from 'react'

function Login() {
  return(
    <>
      <div className="container">
        <div className="title">
          <h2>Login</h2>
        </div>
        
        <form>

          <input
            name="userName"
            type="text"
            placeholder="Username"
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
          />

          <button>Log In</button>

        </form>
      </div>
    </>
  )
}

export default Login