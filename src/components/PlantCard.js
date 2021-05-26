import React from 'react'

function PlantCard(props) {

  const { name, species, waterFreq } = props

  return(
  <>
    <div className="plant-card">
      <div className="plant-image">
        {/* is background-image */}
      </div>
    
    <div className="plant-info-container">
      <div className="plant-stats">
        <h3 id="plant-name">{name}</h3>
        <p id="species">{species}</p>
        <p>{waterFreq}</p>
    </div>

      <div class="plant-buttons">
        <button id="edit">Edit</button>
        <button id="delete">Delete</button>
      </div>
    </div>
  </div>
  </>
  )
}

export default PlantCard