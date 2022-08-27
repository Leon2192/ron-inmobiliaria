import React, { useEffect, useState } from "react";
import propiedades from "../../Api/Api.json";

//  En este componente voy a retornar la grilla de alquileres

const AlquileresContainer = () => {
  const [alquileres, setAlquileres] = useState(propiedades);
  const [loading, setLoading] = useState(false);
  console.log(propiedades);

  return (
    <div>
      <h1>Mapeo</h1>
      {propiedades.map((propiedad) => {
        return <h2>{propiedad.tipo}</h2>;
      })}
    </div>
  );
};

export default AlquileresContainer;
