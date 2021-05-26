import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import PlantCard from "./PlantCard"

// Placeholder data before first render
const initialPlantList = [
  {
    plant_nickname: "Planty",
    plant_species: "Venus Flytrap",
    plant_h20frequency: "weekly",
    plant_id: 0
  },

  {
    plant_nickname: "Mr.Green",
    plant_species: "Flax",
    plant_h20frequency: "daily",
    plant_id: 1
  },

  {
    plant_nickname: "Mike",
    plant_species: "Barley",
    plant_h20frequency: "biweekly",
    plant_id: 2
  },

  {
    plant_nickname: "Daisy",
    plant_species: "Daisy",
    plant_h20frequency: "biweekly",
    plant_id: 3
  }
]

function PlantList() {

  const [plantList, setPlantList] = useState(initialPlantList);
  
  useEffect(() =>{
     axios.get('https://waterplants5.herokuapp.com/api/users/1/plants')/*
        headers: {
          authorization: localStorage.getItem('token')
        }
      })*/
      .then(res => {
        console.log(res.data)

        setPlantList(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return(
    <>
      <div className="hero">

        <div className="hero-text">
          <h2>My plants</h2>
          {/* <button>New Plant +</button> */}
          <Link id="createNew" to='/plantForm'>New Plant +</Link>
        </div>
      </div>

      {plantList.map(plant => {
          return(
            <PlantCard 
              name={plant.plant_nickname} 
              species={plant.plant_species} 
              waterFreq={plant.plant_h2ofrequency} 
              key={plant.plant_id}
            />
          )
        })}
    </>
  )
}

export default PlantList