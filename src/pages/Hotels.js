import React from 'react';
import CardsCrud from '../components/CardsCrud';
import FormCrud from '../components/FormCrud';
import {Link} from "react-router-dom";
const Hotels = ({hotels, setHotels}) => {
    return (
        <div className='container_Hotel'>
            <Link to="/">
                    <button className='Admin_button'>Regresar</button>
            </Link>
            <div className="main-content">
                <FormCrud  hotels={hotels} setHotels={setHotels}/>
                <CardsCrud hotels={hotels} setHotels={setHotels}/> 
            </div>
        </div>
    );
};

export default Hotels;