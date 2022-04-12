import {Routes, Route} from 'react-router-dom'
import { url } from '../helpers/url';
import Home from "../pages/Home";
import Hotels from '../pages/Hotels';
import React, {useState, useEffect} from "react";
import {getData} from '../helpers/getData'
import Edit from '../pages/Edit'
function AppRouter() {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    getData(url)
    .then(data => setHotels(data))
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Home hotels={hotels}/>}/>
      <Route path="/hoteles" element={<Hotels 
      hotels={hotels}
      setHotels={setHotels}
      />}/>
      <Route path="/editar" element={<Edit hotels={hotels} setHotels={setHotels}/>}/>
    </Routes>
  );
}

export default AppRouter;
