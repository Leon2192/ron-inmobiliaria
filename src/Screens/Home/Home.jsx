import React from "react";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import Search from "../../components/Search/Search";
import Main from "../../components/Main/Main";
import About from "../../components/About/About";
import Services from "../../components/Services/Services";
import Navigation from "../../components/Navigation/Navigation";

const Home = () => {
  return (
    <>
      <NavBar />
      <Navigation />
      <Search />
      <Main />
      <About />
      <Services />
      <Footer />
    </>
  );
};

export default Home;
