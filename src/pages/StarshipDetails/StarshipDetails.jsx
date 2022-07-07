import '../../App.css';
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { getDetails } from "../../services/sw-api";
import { Link } from "react-router-dom";


const StarshipDetails = () => {
  const [starshipDetails, setStarshipDetails] = useState({})
  const location = useLocation()

  useEffect(()=> {
   const fetchStarshipDetails = async () => {
    const starshipData = await getDetails(location.state.starshipsTitle.url)
    setStarshipDetails(starshipData)
   }
    fetchStarshipDetails();
  }, [location.state.starshipsTitle.url])
 
  return (
    <>
    <div>
      <div>
        <div className='details-card'>
        <h3> NAME: </h3> 
        <p>{starshipDetails.name}</p>
        <h3> MODEL: </h3>
        <p>{starshipDetails.model}</p>
        <p>{<Link to="/starships-list">
            Return
          </Link>}</p>
        </div>
      </div>
      {/* :
        <>
          <p>Loading ship details...</p>
        </> */}
    </div>
    </>
    
  );
}
 
export default StarshipDetails;