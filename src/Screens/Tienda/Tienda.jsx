import { Heading } from "@chakra-ui/react";
import React from "react";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import PropiedadesContainer from "../../components/PropiedadesContainer/PropiedadesContainer";
import Search from "../../components/Search/Search";

const Tienda = () => {
  return (
    <div>
      <NavBar />
      <br />
      <br />
      <Search />
      <br />
      <br />
      <PropiedadesContainer />
      <Footer />
    </div>
  );
};

export default Tienda;
