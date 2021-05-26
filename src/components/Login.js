import axios from 'axios';
import React from 'react'

class Login extends React.Component {
  state = {
    Credentials: {
      user_username:'ted',
      user_password:'foobar',
      user_email:'ted@place.com',
      user_phone_number:'1875309'
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

  login = e => {
    e.preventDefault();
    axios.post('https://waterplants5.herokuapp.com/api/auth/login', this.state.Credentials)
    .then(res => {
      localStorage.setItem('token', res.data.token);
      this.props.history.push('/myPlants')
    })
    .catch(err => {
      console.log(err);
    })
  }

  render() {

  return(
    <>
      <div className="container">
        <div className="title">
          <h2>Login</h2>
        </div>
        
        <form onSubmit={this.login}>

          <input
            name="username"
            type="text"
            value={this.state.Credentials.user_username}
            onChange={this.handleChange}
            placeholder="Username"
          />

          <input
            name="password"
            type="password"
            value={this.state.Credentials.user_password}
            onChange={this.handleChange}
            placeholder="Password"
          />

          <input 
          name="email"
          type="email"
          value={this.state.Credentials.user_email}
          onChange={this.handleChange}
          placeholder="Email"
          />

          <input 
          name="phoneNumber"
          type="tel"
          value={this.state.Credentials.user_phone_number}
          onChange={this.handleChange}
          placeholder="Phone Number"
          />

          <button>Log In</button>

        </form>
      </div>
    </>
  )
  }
}

export default Login