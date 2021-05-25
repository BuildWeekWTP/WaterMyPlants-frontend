import React from 'react'
import { Link } from 'react-router-dom'

function PlantForm() {
  return(
    <>
      <div className="container">
        <div className="title">
          <h2>Create New Plant</h2>
        </div>

      <form>
        
        <input
          name="Name"
          type="text"
          placeholder="Nickname"
        />
        
        <input
          name="Name"
          type="text"
          placeholder="Species"
        />

        <button>Add</button>
        <Link className="back" to='/myPlants'>Back</Link>

      </form>

      </div>
    </>
  )
}

export default PlantForm