import React from 'react';
import Filter from '../components/Filter';
import {Link} from "react-router-dom";
import "../styles/Home.css"
const Home = ({hotels}) => {
    return (
        <div  className="container_home">
            <Link to="/hoteles">
                <button className='Admin_button'>Administrar hoteles</button>
            </Link>
            <Filter hotels={hotels}/>
            
        </div>
    );
};

export default Home;