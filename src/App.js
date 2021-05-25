import React from 'react'
import Nav from './components/Nav'
import Login from './components/Login'
import { Route } from 'react-router-dom'
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
