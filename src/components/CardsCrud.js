import React, { useState } from "react";
import { fileUpload } from "../helpers/FileUpload";
import Multiselect from "multiselect-react-dropdown";
import "../styles/HotelsCrud.css";
const CardsCrud = ({ hotels, setHotels }) => {
  const thisAmenities = [
    "bathrobes",
    "bathtub",
    "beach",
    "beach-pool-facilities",
    "business-center",
    "children-club",
    "coffe-maker",
    "deep-soaking-bathtub",
    "fitness-center",
    "garden",
    "kitchen-facilities",
    "newspaper",
    "nightclub",
    "restaurant",
    "safety-box",
    "separate-bredroom",
    "sheets",
  ];

  const [myHotels, setMyHotels] = useState({
    name: "",
    stars: 0,
    amenities: [],
    image:
      "https://res.cloudinary.com/dhu6ga6hl/image/upload/v1646187218/work-now/hqlsfanpvurxithbtvmy.png",
  });
  const handlePictureClick = () => {
    document.querySelector("#fileSelector1").click();
  };
  const handleFileChanged = async (e) => {
    let image = "";
    fileUpload(e.target.files[0])
      .then((response) => {
        image = response;
        myHotels.image = image;
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const getStar = (number, id) => {
    let stars = [];
    for (let i = 0; i < number; i++) {
      stars.push(
        <img
          src={`/assets/icons/filters/star_yellow.png`}
          alt="stars"
          width="20px"
          className="star"
          key={`starCrud_${i}`}
          style={{ margin: "0 5px" }}
        />
      );
    }
    return stars;
  };
  const handleChange = ({ target }) => {
    setMyHotels({
        ...myHotels,
        [target.name]: target.value
    })
  }
  const handleSubmit =async(e)=>{
    e.preventDefault();
    fetch("http://localhost:4000/results",{
      method:"POST",
      body:JSON.stringify(myHotels),
      headers:{
        "Content-Type" : "application/json; charset=utf-8 "
      }

    })
    setTimeout(()=>{
      fetch("http://localhost:4000/results")
        .then(resp => resp.json())
        .then(data => setHotels(
          data
        ))
    },1000)
    e.target.reset()
  }
  const handleDelete = (id) =>{
    fetch("http://localhost:4000/results/"+ id,{
      method:'DELETE'
    })
    const newsHotels = hotels.filter(hotel => hotel.id !== id)
    setHotels(newsHotels)
  }
  return (
    <div className="main-content">
      <form id="form_crud" onSubmit={handleSubmit}>
        <h2 className="title_crud">Añade más hoteles</h2>
        <input 
        type="text" 
        placeholder="Nombre" 
        className="inputs_cruds"
        name="name" 
        onChange={handleChange}
        />
        <input 
        type="number" 
        placeholder="Precio" 
        name="price"
        className="inputs_cruds" 
        onChange={handleChange}
        />
        <input
          id="fileSelector1"
          type="file"
          className="form-control "
          placeholder="url image"
          name="url"
          style={{ display: "none" }}
          onChange={handleFileChanged}
        />
        <button
          className="buttons_crud"
          onClick={handlePictureClick}
          type="button"
          style={{ width: "150px" }}
        >
          Imagen
        </button>
        <h2 className="title_crud">Servicios</h2>
        <Multiselect
        style={{fontSize:"4rem"}}
        isObject={false}
        onRemove={(event) => {
          myHotels.amenities = event;
        }}
        onSelect={(event) => {
          myHotels.amenities= event;
        }}
        options={thisAmenities}
        // selectedValues={["Burger"]}
        showCheckbox
      />

        <h2 className="title_crud">Estrellas</h2>
        <select defaultValue={"DEFAULT"} 
          className="inputs_cruds"
          name="stars"
          required
          onChange={handleChange}

          >
        <option value="DEFAULT" disabled>
          Elige tu opción
        </option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
        <button
          className="buttons_crud"
          type="submit"
          style={{ width: "150px" }}
        >
          Subir
        </button>
      </form>
      {/*----------------------------*/}
      <div className="main_content_card">
        {hotels !== undefined &&
          hotels.map((h) => (
            <div className="cards" key={h.id}>
              <img
                src={!`/assets/images/hotels/${h.image}` ? h.image:`/assets/images/hotels/${h.image}`}
                alt="image_hotel"
                className="hotel"
              />
              <div className="title_stars">
                <h2>{h.name}</h2>
                <div>{getStar(h.stars)}</div>
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
                <button style={{ cursor: "pointer" }}>EDITAR</button>
                <button 
                style=
                {{ background: "red", cursor: "pointer" }}
                onClick={()=>handleDelete(h.id)}
                >
                  ELIMINAR
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CardsCrud;
