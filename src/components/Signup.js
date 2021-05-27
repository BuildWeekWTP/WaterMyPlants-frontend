import React from 'react'
import axios from 'axios'


class Signup extends React.Component {
  
  state = {
    Credentials: {
      user_username:'',
      user_password:'',
      user_email:'',
      user_phone_number:''
    }
  };

  handleChange = e => {
    this.setState({
      Credentials: {
        ...this.state.Credentials,
        [e.target.name]: e.target.value
      }
    });
  }

  Register = e => {
    e.preventDefault();
    axios.post('https://waterplants5.herokuapp.com/api/auth/register', this.state.Credentials)
    .then(res => {
      this.props.history.push('/')
    })
    .catch(err => {
      console.log(err);
    })
  }

  render(){
  return(
    <>
      <div className="container">
        <div className="title">
          <h2>Sign Up</h2>
        </div>
        
        <form onSubmit={this.Register}>

          <input
            name="user_username"
            type="text"
            value={this.state.Credentials.user_username}
            onChange={this.handleChange}
            placeholder="Username"
          />

          <input
            name="user_password"
            type="password"
            value={this.state.Credentials.user_password}
            onChange={this.handleChange}
            placeholder="Password"
          />

          <input
            name="user_phone_number"
            type="tel"
            value={this.state.Credentials.user_phone_number}
            onChange={this.handleChange}
            placeholder="Phone Number"
          />

          <input 
          name="user_email"
          type="email"
          value={this.state.Credentials.user_email}
            onChange={this.handleChange}
            placeholder="Email"
          />

          <button>Sign Up!</button>

        </form>
      </div>
    </>
  )
  }
}

export default Signup