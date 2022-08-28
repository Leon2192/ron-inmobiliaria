import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  useColorMode,
  Box,
  IconButton,
  Flex,
  Switch,
  Button,
} from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";
import logo from "../Assets/Img/logo.png";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";

const NavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const [display, setDisplay] = useState("none");

  return (
    <>
      <Flex>
        <Flex pos="fixed" top="1rem" right="1rem" align="center">
          <Flex display={["none", "none", "flex", "flex"]}>
            <Link to="/">
              <Button as="a" variant="ghost" aria-label="Home" my={5} w="100%">
                Home
              </Button>
            </Link>
            <Link to="/about">
              <Button as="a" variant="ghost" aria-label="Home" my={5} w="100%">
                Nosotros
              </Button>
            </Link>
            <Link to="/alquileres">
              <Button as="a" variant="ghost" aria-label="Home" my={5} w="100%">
                Alquileres
              </Button>
            </Link>
            <Link to="/venta">
              <Button as="a" variant="ghost" aria-label="Home" my={5} w="100%">
                Ventas
              </Button>
            </Link>
            <Link to="/contacto">
              <Button as="a" variant="ghost" aria-label="Home" my={5} w="100%">
                Contacto
              </Button>
            </Link>
          </Flex>
          <IconButton
            aria-label="Open Menu"
            size="lg"
            mr={2}
            icon={<HamburgerIcon />}
            display={["flex", "flex", "none", "none"]}
            onClick={() => setDisplay("flex")}
          />
          <Switch color="green" isChecked={isDark} onChange={toggleColorMode} />
        </Flex>
        <Flex
          w="100vw"
          bgColor="gray.500"
          zIndex={20}
          h="100vh"
          pos="fixed"
          top="0"
          left="0"
          overflow="auto"
          flexDir="column"
          display={display}
        >
          <Flex justify="flex-end">
            <IconButton
              mt={2}
              mr={2}
              aria-label="Close Menu"
              size="lg"
              icon={<CloseIcon />}
              onClick={() => setDisplay("flex")}
            />
          </Flex>
          <Flex flexDir="column" align="center">
            <Link to="/">
              <Button as="a" variant="ghost" aria-label="Home" my={5} w="100%">
                Home
              </Button>
            </Link>
            <Link to="/about">
              <Button as="a" variant="ghost" aria-label="Home" my={5} w="100%">
                Nosotros
              </Button>
            </Link>
            <Link to="/alquileres">
              <Button as="a" variant="ghost" aria-label="Home" my={5} w="100%">
                Alquileres
              </Button>
            </Link>
            <Link to="/venta">
              <Button as="a" variant="ghost" aria-label="Home" my={5} w="100%">
                Ventas
              </Button>
            </Link>
            <Link to="/contacto">
              <Button as="a" variant="ghost" aria-label="Home" my={5} w="100%">
                Contacto
              </Button>
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default NavBar;
