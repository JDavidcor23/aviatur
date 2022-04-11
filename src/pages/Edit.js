import React from 'react';
import FormEdit from '../components/FormEdit';
import '../styles/Edit.css'

const Edit = ({hotels, setHotels}) => {
    return (
        <div className="main-content">
            <FormEdit hotels={hotels} setHotels={setHotels}/>
        </div>
    );
};

export default Edit;