import './App.css';
import {Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import StarshipsList from './pages/StarshipsList/StarshipsList'
import StarshipDetails from './pages/StarshipDetails/StarshipDetails';

function App() {
  return (
    <>
    <NavBar /> 
    <Routes>
      <Route path ="/starships-list" element={<StarshipsList />}/>
      <Route path="/starships" element={<StarshipDetails/>}/>
    </Routes>
    </>
  );
}

export default App;
