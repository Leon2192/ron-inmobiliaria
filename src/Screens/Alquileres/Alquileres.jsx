import { Heading } from "@chakra-ui/react";
import React from "react";
import AlquileresContainer from "../../components/AlquileresContainer/AlquileresContainer";
import Footer from "../../components/Footer/Footer";
import Navigation from "../../components/Navigation/Navigation";
import Search from "../../components/Search/Search";

const Alquileres = () => {
  return (
    <div>
      <Navigation />
      <br />
      <Search />
      <br />
      <Heading>Nuestras propiedades en alquiler</Heading>
      <br />
      <AlquileresContainer />
      <Footer />
    </div>
  );
};

export default Alquileres;
