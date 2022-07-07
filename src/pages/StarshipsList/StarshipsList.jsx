import { useEffect, useState } from 'react';
import { getStarships } from '../../services/sw-api';
import { Link } from "react-router-dom";

const StarshipsList = (props) => {
  const [starships, setStarships] = useState([])

  useEffect(() => {
  // console.log('its mounted')
  const fetchStarshipsList = async () => {
    const starshipsData = await getStarships()
    setStarships(starshipsData.results)
  }
  fetchStarshipsList()
}, [])

  return (
    <>
    <h1>Starships List</h1>
    <div>

    <div className='icon-container'>
        {starships.map(starshipsTitle =>
      <Link key={starshipsTitle.name} to="/starships" state={{starshipsTitle}} >
          <div className='class-div'>
            {starshipsTitle.name}
            </div>
      </Link>
          )}  
    
          </div>
    </div>
    </>
  )
}

export default StarshipsList