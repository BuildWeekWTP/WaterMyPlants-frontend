import React from 'react'
import {useEffect, useState} from 'react'
import axios from 'axios'

function PlantCard() {
  const [list,setList] = useState([]);

    useEffect(() =>{
     axios.get('https://waterplants5.herokuapp.com/api/plants',{
        headers: {
          authorization: localStorage.getItem('token')
        }
      })
      .then(res => {
        console.log('PLANT CARD GET REQUEST',res.data)
        setList(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])


  const listMap = list.map((plant_id, index) =>{
    const id = plant_id;

    const deleteReq = () =>{ axios.delete('https://waterplants5.herokuapp.com/api/plants',{
    headers: {
      authorization: localStorage.getItem('token')
    }
  })
    .then((res)=>{
      console.log(res)
    })
    .catch((err)=>{
      console.log(err.message)
    })
  }

    return(
      <div className="plant-card" key={index}>
        <div className="plant-image">
          {id.plant_image_url}
        </div>
  
        <div className="plant-stats">
          <h3 id="plant-name">{id.plant_nickname}</h3>
          <p>{id.plant_species}</p>
          <p><button onClick={deleteReq}>Delete</button></p>
        </div>
        
      </div>
    )
  })


  return(
  <>
    {listMap}
  </>
  )
}

export default PlantCard