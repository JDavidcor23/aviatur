import {Routes, Route} from 'react-router-dom'
import Home from "../pages/Home";
import Hotels from '../pages/Hotels';
import React, {useState, useEffect} from "react";

function AppRouter() {
  const [hotels, setHotels] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/results")
    .then(resp => resp.json())
    .then(data => setHotels(data))
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Home hotels={hotels}/>}/>
      <Route path="/hoteles" element={<Hotels 
      hotels={hotels}
      setHotels={setHotels}
      />}/>
    </Routes>
  );
}

export default AppRouter;
