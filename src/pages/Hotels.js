import React from 'react';
import CardsCrud from '../components/CardsCrud';
import FormCrud from '../components/FormCrud';
import {Link} from "react-router-dom";
const Hotels = ({hotels, setHotels}) => {
    return (
        <div className="main-content">
        <Link to="/" className='link' style={{marginBottom:"10px"}}>
                <button className='Admin_button'>Regresar</button>
        </Link>
            <FormCrud  hotels={hotels} setHotels={setHotels}/>
            <CardsCrud hotels={hotels} setHotels={setHotels}/> 
        </div>
    );
};

export default Hotels;