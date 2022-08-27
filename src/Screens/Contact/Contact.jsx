import { Heading } from "@chakra-ui/react";
import React from "react";
import ContactBanner from "../../components/ContactBanner/ContactBanner";
import Footer from "../../components/Footer/Footer";
import Formulario from "../../components/Form/Formulario";
import NavBar from "../../components/NavBar/NavBar";

const Contact = () => {
  return (
    <div>
      <NavBar />
      <br />
      <Heading>Contacto</Heading>
      <br />
      <ContactBanner />
      <br />
      <Heading>Complete el siguiente formulario y responderemos sus consultas a la brevedad</Heading>
      <br />
      <Formulario />
      <br />
      <Footer />
    </div>
  );
};

export default Contact;
