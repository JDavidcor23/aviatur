import React, { useState } from "react";
import { fileUpload } from "../helpers/FileUpload";
import Multiselect from "multiselect-react-dropdown";
import Swal from "sweetalert2";
import { url } from '../helpers/url';
import {thisAmenities} from '../helpers/amenities'
import {getData} from '../helpers/getData'
const FormCrud = ({setHotels }) => {
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
    const handleChange = ({ target }) => {
        setMyHotels({
            ...myHotels,
            [target.name]: target.value
        })
    }
    const handleSubmit =(e)=>{
    e.preventDefault();
    try {
      fetch(url,{
          method:"POST",
          body:JSON.stringify(myHotels),
          headers:{
          "Content-Type" : "application/json; charset=utf-8 "
          }
  
      })
      setTimeout(()=>{
        Swal.fire({
          icon: "success",
          title: "Datos actualizados correctamente",
          showConfirmButton: false,
          timer: 2500,
        });
        getData(url)
        .then(data => setHotels(data))
      },500)

      e.target.reset()
      
    } catch (error) {
      console.log(error)
      
    }
    }
    return (
    <form id="form_crud" onSubmit={handleSubmit}>
        <h2 className="title_crud">Añade más hoteles</h2>
        <input 
        type="text" 
        placeholder="Nombre" 
        className="inputs_cruds"
        name="name" 
        onChange={handleChange}
        required
        />
        <input 
        type="number" 
        placeholder="Precio" 
        name="price"
        className="inputs_cruds" 
        required
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
        isObject={false}
        onRemove={(event) => {
          myHotels.amenities = event;
        }}
        onSelect={(event) => {
          myHotels.amenities= event;
        }}
        options={thisAmenities}
        showCheckbox
      />

        <h2 className="title_crud">Estrellas</h2>
        <select defaultValue={"DEFAULT"} 
          className="inputs_cruds"
          name="stars"
          required
          onChange={handleChange}
          
          >
        <option 
        value="DEFAULT" 
        disabled>
            
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
    );
};

export default FormCrud;