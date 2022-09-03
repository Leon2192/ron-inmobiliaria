import React from "react";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import Search from "../../components/Search/Search";
import Main from "../../components/Main/Main";
import About from "../../components/About/About";
import Services from "../../components/Services/Services";
import PropiedadesContainer from "../../components/PropiedadesContainer/PropiedadesContainer";

const Home = () => {
  return (
    <>
      <NavBar />
      <br />
      <br />
      <Search />
      <Main />
      <About />
      <br />
      <PropiedadesContainer />
      <br />
      <Services />
      <Footer />
    </>
  );
};

export default Home;
