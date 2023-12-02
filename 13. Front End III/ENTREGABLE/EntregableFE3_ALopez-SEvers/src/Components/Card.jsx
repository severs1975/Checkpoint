import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';


const Card = ({ name, username, id }) => {
  const [favorites, setFavorites] = useState([])

  // Aqui iria la logica para agregar la Card en el localStorage
  useEffect(() => {
    // Obtener los favoritos actuales del localStorage
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);
  
  const addToFavorites = (dentist) => {
    // Agregar el dentista a la lista de favoritos
    const updatedFavorites = [...favorites, dentist];
    setFavorites(updatedFavorites);
  
    // Guardar la lista actualizada de favoritos en el localStorage
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <div className="card">
        {/* En cada card deberan mostrar el name - username y el id */}
        <h2>{name}</h2>
        <p>Username: {username}</p>
        <p>ID: {id}</p>
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
        <Link to={`/dentist/${dentist.id}`}>Ver Detalles</Link>
        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addToFavorites} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
