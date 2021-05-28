import { Link } from 'react-router-dom'
import PlantCard from "./PlantCard"

function PlantList() {
  return(
    <>
      <div className="hero">
        <h2>My plants</h2>
        <Link to='/plantForm'>New Plant +</Link>
      </div>
      <PlantCard />
    </>
  )
}

export default PlantList