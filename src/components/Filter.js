import React from "react";
import "../styles/Filter.css";
import Cards from "./Cards";
const Filter = ({hotels}) => {
  const getStar = (number) =>{
    let stars = []
   for(let i = 0; i <number; i++){
      stars.push(<img src={`/assets/icons/filters/star_yellow.png`} alt="stars" width="20px" className="star" key={`star__${i}`} style={{margin: "0 2px"
      }}/>)
   }
   return stars
  }
 const [filterHotels, setFilterHotels] = React.useState("")
 const [numberStar, setNumberStar] = React.useState(0)
 const handleSearch =(event)=>{
     setFilterHotels(event.target.value)
 }
 const handleStar =(event)=>{
    setNumberStar(event.target.value)
 }
  return (
    <div className="main-content">
      <div  className="name_filter">
        <h2>Filtros</h2>
        <div className="container">
          <div className="openFilter">
            <input type="checkbox" id="open__checkbox" />
            <div className="filter_responsive">
              <img
                src="https://res.cloudinary.com/dhu6ga6hl/image/upload/v1649465930/m7grbnbw8tivao23itlb.png"
                alt="filter"
                width="50px"
              />
              <p>Filtrar</p>
            </div>
            <form className="filter_form">
              <div className="header_filter">
                <img src={"/assets/icons/filters/search.svg"} alt="search_logo" />
                <p>Nombre del Hotel</p>
              </div>
              <div className="header_filter">
                <img
                  src="https://res.cloudinary.com/dhu6ga6hl/image/upload/v1649471969/srgmfchiinqfcyj41z5j.png"
                  alt="bed_logo"
                />
                <input
                    type="search" 
                    placeholder="Hotel"
                    value={filterHotels}
                    onChange={handleSearch}
                    className="input_hotel"
                    />
              </div>
              <div className="header_filter">
                <img src={"/assets/icons/filters/star.svg"} alt="star" />
                <p>Estrellas</p>
              </div>
              <div className="Stars">
                <div style={{display:"flex"}} className="container_inputs_star">
                  <input 
                  type="checkbox" 
                  className="stars_inputs"
                  value={0}
                  
                  onChange={handleStar}
                  />
                  <label>Todas las estrellas</label>
                </div>
                <div  className="container_inputs_star">
                  <input 
                  type="checkbox"  
                  className="stars_inputs"
                  value={1}
                  onChange={handleStar}
                  />
                  {getStar(1)}
                </div>
                <div className="container_inputs_star">
                  <input 
                  type="checkbox"  
                  className="stars_inputs"
                  value={2}
                  onChange={handleStar}
                  />
                  {getStar(2)}
                </div>
                <div className="container_inputs_star">
                  <input 
                  type="checkbox"  
                  className="stars_inputs"
                  value={3}
                  onChange={handleStar}
                  />
                  {getStar(3)}
                </div>
                <div className="container_inputs_star">
                  <input 
                  type="checkbox"  
                  className="stars_inputs"
                  value={4}
                  onChange={handleStar}
                  />
                  {getStar(4)}
                </div>
                <div className="container_inputs_star">
                  <input 
                  type="checkbox"  
                  className="stars_inputs"
                  value={5}
                  onChange={handleStar}
                  />
                  {getStar(5)}
                </div>
              </div>
            </form>
          </div>
        </div>
    </div>
    <Cards filterHotels={filterHotels} numberStar={numberStar} hotels={hotels}/>
    </div>
  );
};

export default Filter;
