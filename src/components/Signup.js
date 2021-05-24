import React from 'react'

function Signup() {
  return(
    <>
      <div class="container">
        <div class="title">
          <h2>Sign Up</h2>
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

          <input
            name="Phone"
            type="tel"
            placeholder="Phone Number"
          />

          <button>Submit</button>

        </form>
      </div>
    </>
  )
}

export default Signup