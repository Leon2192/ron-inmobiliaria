import { Heading } from "@chakra-ui/react";
import React from "react";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import Navigation from "../../components/Navigation/Navigation";
import Search from "../../components/Search/Search";
import VentaContainer from "../../components/VentaContainer/VentaContainer";

const Venta = () => {
  return (
    <div>
      <NavBar />
      <br />
      <br />
      <Search />
      <br />
      <Heading>Nuestras propiedades en venta</Heading>
      <br />
      <VentaContainer />
      <br />
      <Footer />
    </div>
  );
};

export default Venta;
