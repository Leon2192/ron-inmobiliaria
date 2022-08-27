import React from "react";
import { Box, Button, Heading, Flex, Stack } from "@chakra-ui/react";
import banner from "../Assets/Img/aboutus.jpg";

const Banner = () => {
  return (
    <Box
      h="100vh"
      bg="gray"
      bgImage={`url(${banner})`}
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
          color="primary"
        >
          Encontrá la propiedad de tus sueños
        </Heading>
      </Flex>
    </Box>
  );
};

export default Banner;
