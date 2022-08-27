import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { useColorMode, Box, IconButton, Flex } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";
import logo from "../Assets/Img/logo.png";

const NavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <>
      <div className="container">
        <nav className="nav-main">
          <img src={logo} alt="RLogo" className="nav-logo" />
          <ul className="nav-menu">
            <Link to="/">
              <li>
                <a href="#">Inicio</a>
              </li>
            </Link>
            <Link to="/about">
              <li>
                <a href="#">Sobre nosotros</a>
              </li>
            </Link>
            <Link to="/alquileres">
              <li>
                <a href="#">Alquileres</a>
              </li>
            </Link>
            <Link to="/venta">
              <li>
                <a href="#">Venta</a>
              </li>
            </Link>
            <Link to="/contacto">
              <li>
                <a href="#">Contacto</a>
              </li>
            </Link>
          </ul>
          <ul className="nav-menu-right">
            <li>
              <a href="#">
                {" "}
                <i className="fas fa-search"></i>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <Box boxSize="100%" w="100%">
        <IconButton
          icon={isDark ? <FaSun /> : <FaMoon />}
          isRound="true"
          onClick={toggleColorMode}
          alignSelf="flex-end"
        ></IconButton>
      </Box>
    </>
  );
};

export default NavBar;
