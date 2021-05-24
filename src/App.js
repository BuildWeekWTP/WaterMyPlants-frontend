import React from 'react'
import Nav from './components/Nav'
import Login from './components/Login'
import { Route, Link } from 'react-router-dom'
import Signup from "./components/Signup";

function App() {
  return (
    <div>
      <Nav />
      <Route exact path='/' component={Login}/>
      <Route exact path='/signup' component={Signup}/>
    </div>
  );
}

export default App;
