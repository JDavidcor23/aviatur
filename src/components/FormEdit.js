import React, {useState} from 'react';
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom';
import Multiselect from "multiselect-react-dropdown";
const FormEdit = ({hotels, setHotels}) => {
  const localHotel = JSON.parse(localStorage.getItem("hotel"))
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
  const navigate = useNavigate()
  const [myHotels, setMyHotels]=useState({
      name: localHotel.name,
      stars: localHotel.stars,
      amenities: localHotel.amenities,
      image:localHotel.image,
  })
  const handleChange = ({ target }) => {
    setMyHotels({
      ...myHotels,
      [target.name]: target.value
    })
  }
  const handleSubmit =(e)=>{
    e.preventDefault();
    try{
      fetch("http://localhost:4000/results/" + localHotel.id ,{
       method: 'PUT',
       body:JSON.stringify(myHotels),
       headers:{
           "Content-Type" : "application/json; charset=utf-8 "
         }
       }
      )
      Swal.fire({
        icon: "success",
        title: "Datos actualizados correctamente",
        showConfirmButton: false,
        timer: 2500,
      });
      setTimeout(()=>{
        fetch("http://localhost:4000/results")
        .then(resp => resp.json())
        .then(data => setHotels(
            data
        ))
        navigate("/hoteles")
    },1000)
    }catch(error){
      console.log(error)
    }
  }
  return (
      <form id="form_edit" onSubmit={handleSubmit}>
      <h2 className="title_crud">Editar Hotel</h2>
      <input 
      type="text" 
      defaultValue={localHotel.name}
      placeholder="Nombre" 
      className="inputs_cruds"
      name="name" 
      onChange={handleChange}
      />
      <input 
      type="number" 
      defaultValue={localHotel.price}
      placeholder="Precio" 
      name="price"
      className="inputs_cruds" 
      onChange={handleChange}
      />
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
      required
      showCheckbox
    />

      <h2 className="title_crud">Estrellas</h2>
      <select 
        className="inputs_cruds"
        defaultValue={localHotel.stars}
        name="stars"
        required
        onChange={handleChange}

        >
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
        Guardar
      </button>
      <button
        className="buttons_crud"
        type="button"
        style={{ width: "150px", background:"red" }}
        onClick={()=>navigate("/hoteles")}
      >
        Cancelar
      </button>
  </form>
  );
};

export default FormEdit;