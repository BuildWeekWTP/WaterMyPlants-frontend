import React from 'react'
import {useEffect, useState} from 'react'
import axios from 'axios'

function PlantCard() {

  const [list,setList] = useState([]);

  const listMap = list.map(plant_id =>{
    console.log(plant_id.plant_id,plant_id.plant_species, plant_id.plant_nickname, plant_id.plant_image_url)
    return(
      <div className="plant-card">
        <div className="plant-image">
          {plant_id.plant_image_url}
        </div>
  
        <div className="plant-stats">
          <h3 id="plant-name">{plant_id.plant_nickname}</h3>
          <p>{plant_id.plant_species}</p>
        </div>
      </div>
    )
  })

  useEffect(() =>{
     axios.get('https://waterplants5.herokuapp.com/api/plants')/*, {      //work on getting list of specific signed in user made plants/ make new plant paramaters(id, name...)
        headers: {
          authorization: localStorage.getItem('token')
        }
      })*/
      .then(res => {
        console.log(res.data)
        setList(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return(
  <>
    {listMap}
  </>
  )
}

export default PlantCard