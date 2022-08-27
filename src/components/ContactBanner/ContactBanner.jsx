import React from "react";
import { Box, Button, Heading, Flex, Stack } from "@chakra-ui/react";
import contactbanner from "../Assets/Img/contactbanner.jpg";

const ContactBanner = () => {
  return (
    <Box
      h="380px"
      bg="gray"
      bgImage={`url(${contactbanner})`}
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Flex
        direction="column"
        alignItems="center"
        justify="center"
        h="100%"
        bg="rgb(0 0 0 / 50%)"
        p={["0 10%", null, "0 20%"]}
      >
        <Heading
          textTransform="uppercase"
          textAlign="center"
          fontWeight="light"
          letterSpacing="20px"
          color="white"
        >
          Estamos para ayudarte
        </Heading>
      </Flex>
    </Box>
  );
};

export default ContactBanner;
