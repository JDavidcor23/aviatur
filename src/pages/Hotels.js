import React from 'react';
import CardsCrud from '../components/CardsCrud';

const Hotels = ({hotels, setHotels}) => {
    return (
        <div>
         <CardsCrud hotels={hotels} setHotels={setHotels}/> 
        </div>
    );
};

export default Hotels;