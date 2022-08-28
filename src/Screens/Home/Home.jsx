import React from "react";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import Search from "../../components/Search/Search";
import Main from "../../components/Main/Main";
import About from "../../components/About/About";
import Services from "../../components/Services/Services";
import Navigation from "../../components/Navigation/Navigation";
import SideBar from "../../components/SideBar/SideBar";

const Home = () => {
  return (
    <>
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
