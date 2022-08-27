import React from "react";
import { VStack, IconButton, Flex } from "@chakra-ui/react";
import "./Footer.css";
import {
  FaLinkedin,
  FaFacebook,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          <div className="col">
            <h4>RON Inmobiliaria</h4>
            <ul className="social-list">
              <li>+5411 57525098</li>
              <li>CABA - Ciudad autónoma de Buenos Aires</li>
              <li>Thames 2274, Palermo, CP 1425</li>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
      <VStack p={5}>
        <Flex w="100%" justify="center" justifyContent="space-around">
          <IconButton
            icon={<FaWhatsapp />}
            isRound="true"
            size="lg"
            color="primary"
          />
          <IconButton
            icon={<FaFacebook />}
            isRound="true"
            size="lg"
            color="primary"
          />
          <IconButton
            icon={<FaInstagram />}
            isRound="true"
            size="lg"
            color="primary"
          />
        </Flex>
      </VStack>
    </div>
  );
};

export default Footer;
