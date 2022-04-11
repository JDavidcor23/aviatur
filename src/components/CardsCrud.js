import React from 'react'
import "../styles/HotelsCrud.css";
import {Link} from "react-router-dom";
const CardsCrud = ({ hotels, setHotels }) => {
  const getStar = (number, id) =>{
    let stars = []
   for(let i = 0; i <number; i++){
      stars.push(
      <img src={`/assets/icons/filters/star_yellow.png`} 
      alt="stars"  
      className="star" 
      key={`star${id}_${i}`} 
      style={{margin: "0 5px", width:"20px", height:"20px"}}
      />)
   }
    return stars
 }
  const handleDelete = (id) =>{
    fetch("https://aviantur.herokuapp.com/results/"+ id,{
      method:'DELETE'
    })
    const newsHotels = hotels.filter(hotel => hotel.id !== id)
    setHotels(newsHotels)
  }
  const saveLocalStorage =(hotel) =>{
    localStorage.setItem("hotel", JSON.stringify(hotel))
  }
  return (
      <div className="main_content_card">
        {hotels !== undefined &&
          hotels.map((h) => (
            <div className="cards" key={h.id}>
              <img
                src={`/assets/images/hotels/${h.image}`}
                alt={`imagen_hotel${h.name}`}
                className="hotel" 
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null;
                  currentTarget.src=h.image;
                }}
              /> 
              <div className="title_stars">
                <h2>{h.name}</h2>
                <div>{getStar(h.stars, h.id)}</div> 
                <div className="border">
                  {h.amenities.map((amenities) => (
                    <img
                      src={`/assets/icons/amenities/${amenities}.svg`}
                      alt=""
                      className="icons"
                      key={h.id + amenities}
                      style={{ margin: "10px 5px" }}
                    />
                  ))}
                </div> 
              </div>
              <div className="price_button">
                <p className="tex1">Precio por noche por habitación</p>
                <p className="price">
                  ARS <span>{h.price}</span>
                </p>
                <Link to="/editar" onClick={()=>saveLocalStorage(h)}>
                  <button >EDITAR</button>
                </Link>
                <button 
                style=
                {{ background: "red" }}
                onClick={()=>handleDelete(h.id)}
                >
                  ELIMINAR
                </button>
              </div>
            </div>
          ))}
      </div>
  );
};

export default CardsCrud;
