import React, { useState } from "react";
import propiedades from "../../Api/Api.json";
import { Heading } from "@chakra-ui/react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import PropiedadesList from "../PropiedadesList/PropiedadesList";

const PropiedadesContainer = () => {
  const [inmuebles, setInmuebles] = useState([]);
  const { categoryId } = useParams();
  //console.log(propiedades);

  useEffect(() => {
    if (!categoryId) {
      setInmuebles(propiedades);
      console.log(inmuebles);
    } else {
      setInmuebles(
        propiedades.filter((producto) => producto.tipo === categoryId)
      );
    }
  }, [categoryId]);

  return (
    <div>
      <Heading>
        {categoryId === "Venta" ? (
          <Heading>Venta</Heading>
        ) : (
          <Heading>Alquileres</Heading>
        )}
      </Heading>
      <PropiedadesList inmuebles={inmuebles} />
    </div>
  );
};

export default PropiedadesContainer;
