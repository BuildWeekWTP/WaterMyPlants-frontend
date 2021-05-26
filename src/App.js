import React from 'react'
import { Route } from 'react-router-dom'

import Nav from './components/Nav'
import Login from './components/Login'
import Signup from "./components/Signup";
import PlantForm from "./components/PlantForm";
import PlantList from "./components/PlantList"

function App() {
  return (
    <div>
      <Nav />
      <Route exact path='/' component={Login}/>
      <Route exact path='/signup' component={Signup}/>
      <Route exact path='/myPlants' component={PlantList}/>
      <Route exact path='/plantForm' component={PlantForm}/>
    </div>
  );
}

export default App;
