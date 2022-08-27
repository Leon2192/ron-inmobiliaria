import { Heading } from "@chakra-ui/react";
import React from "react";
import AlquileresContainer from "../../components/AlquileresContainer/AlquileresContainer";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";

const Alquileres = () => {
  return (
    <div>
      <NavBar />
      <br />
      <Heading>Nuestras propiedades en alquiler</Heading>
      <br />
      <AlquileresContainer />
      <Footer />
    </div>
  );
};

export default Alquileres;
