import { Link } from 'react-router-dom'
import PlantCard from "./PlantCard"

function PlantList() {

 

  
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