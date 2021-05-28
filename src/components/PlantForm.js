import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class PlantForm extends React.Component {


  state = {
      plant_id:'',
      plant_nickname:'',
      plant_species:'',
      plant_h2ofrequency:'',
      plant_image_url:null
  };

  handleChange = e => {
    this.setState({
        ...this.state,
        [e.target.name]: e.target.value
    });
  }

  plant = e => {
    e.preventDefault();
    axios.post('https://waterplants5.herokuapp.com/api/plants', {...this.state},{
    headers: {
      authorization: localStorage.getItem('token')
    }}) 
    .then(res => {
      console.log("DISPLAY",res)
      this.props.history.push('/MyPlants')
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
          <h2>Create New Plant</h2>
        </div>

      <form onSubmit={this.plant}>
        
        <input
          name="plant_nickname"
          type="text"
          placeholder="Nickname"
          value={this.state.plant_nickname}
          onChange={this.handleChange}
        />
        
        <input
          name="plant_species"
          type="text"
          placeholder="Species"
          value={this.state.plant_species}
          onChange={this.handleChange}
        />

        <input
          name="plant_h2ofrequency"
          type="text"
          placeholder="Water intake"
          value={this.state.plant_h2ofrequency}
          onChange={this.handleChange}
        />

        <button>Add</button>
        <Link className="back" to='/myPlants'>Back</Link>

      </form>

      </div>
    </>
  )
  }
}

export default PlantForm