import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import PlantCard from "./PlantCard"

function PlantList() {

  const [list,setList] = useState([]);
  

  useEffect(() =>{
     axios.get('https://waterplants5.herokuapp.com/api/users/1/plants')/*, {      //work on getting list of specific signed in user made plants/ make new plant paramaters(id, name...)
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
      <div className="hero">

        <div className="hero-text">
          <h2>My plants</h2>
          {/* <button>New Plant +</button> */}
          <Link id="createNew" to='/plantForm'>New Plant +</Link>
        </div>

      </div>
      <PlantCard />
    </>
  )
}

export default PlantList