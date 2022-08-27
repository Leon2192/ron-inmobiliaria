import React from "react";
import about from "../Assets/Img/about.jpg";
import { useMediaQuery } from "@chakra-ui/react";
import {
  Text,
  Box,
  Flex,
  Image,
  VStack,
  Heading,
  IconButton,
} from "@chakra-ui/react";
import { FaHome } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";

const About = () => {
  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
  return (
    <VStack w="100%" pb="30px">
      <Flex
        direction={isNotSmallerScreen ? "row" : "column"}
        w="100%"
        h="100%"
        fontWeight="bold"
      >
        <Box textAlign="center" py="10px">
          <Heading>
            <strong>Nosotros</strong>
          </Heading>
          <br />
          <IconButton icon={<FaHome />} isRound></IconButton>
          <Text fontFamily="body">
            Inmuebles extraordinarios dirigidos y supervisados por Corredores
            Públicos matriculados, especializados en la compra y venta de
            propiedades premium
          </Text>
          <br />
          <IconButton icon={<BiSupport />} isRound></IconButton>
          <Text>
            Tenemos todo lo necesario para hacer tu experiencia única. Somos
            especialistas en ayudarte a encontrar la propiedad que necesitás.
            Sea para alquiler, alquiler temporario o compra/venta.
          </Text>
          <br />
          <Text>
            <br />
            1. Comunicate con nosotros. Podés directamente presionar en el botón
            de whatsapp más abajo.
            <br />
            2. Mirá nuestras oferta inmobiliaria y consultá por la propiedad que
            te interesa.
            <br />
            3. Pactá una visita.
            <br />
            4. Listo!!!
          </Text>
        </Box>
        <Box>
          <Image
            src={about}
            alt="about"
            objectFit="cover"
            boxSize="100vw"
            height="50vh"
          />
        </Box>
      </Flex>
    </VStack>
  );
};

export default About;
