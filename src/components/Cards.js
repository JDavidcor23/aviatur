import React from "react";

import "../styles/Cards.css";
const Cards = ({filterHotels, numberStar, hotels}) => {

  const getStar = (number, id) =>{
     let stars = []
    for(let i = 0; i <number; i++){
       stars.push(<img src={`/assets/icons/filters/star_yellow.png`} alt="stars" width="20px" className="star" key={`star${id}_${i}`} style={{margin: "0 5px"
       }}/>)
    }
     return stars
  }
  const HotelsInput = hotels.filter(hotels =>{
    if(Number(numberStar) === 0){
      return hotels.name.toLowerCase().includes(filterHotels.toLocaleLowerCase())
      
    }else{
      return hotels.name.toLowerCase().includes(filterHotels.toLocaleLowerCase()) && hotels.stars === Number(numberStar)
    }
})
  return (
    <div className="main_content_card">
      {hotels !== undefined &&
      HotelsInput.length  < 1 ? 
      <h2 className="notfound">No hay coincidencia</h2>
      :
      HotelsInput.map(h => (
        <div className="cards" key={h.id}>
          <img 
            src={`/assets/images/hotels/${h.image}`} alt="image_hotel" className="hotel" 
            onError={({ currentTarget }) => {
              currentTarget.onerror = null;
              currentTarget.src=h.image;
            }}
            />
          <div className="title_stars">
          <h2>{h.name}</h2>
          <div>
            {getStar(h.stars)}
          </div> 
           <div className="border">
            {h.amenities.map(amenities =>(
              <img src={`/assets/icons/amenities/${amenities}.svg`} alt="" className="icons" key={h.id + amenities} style={{margin: "10px 5px"}}/>
            ))}
          </div> 
          </div>
          <div className="price_button">
          <p className="tex1">Precio por noche por habitación</p>
          <p className="price">
            ARS <span>{h.price}</span>
          </p>
          <button>VER HOTEL</button>
            
          </div>
        </div>
      ))
    }
    </div>
  );
};

export default Cards;
