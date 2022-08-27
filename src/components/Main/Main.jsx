import React from "react";
import { Box, Button, Heading, Flex, Stack } from "@chakra-ui/react";
import portada from "../Assets/Img/banner.jpg";

const Main = () => {
  return (
    <Box
      h="60vh"
      bg="gray"
      bgImage={`url(${portada})`}
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
          textAlign="left"
          fontWeight="light"
          letterSpacing="5px"
          color='primary'
        >
          Encontrá la propiedad de tus sueños
        </Heading>
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing="40px"
          mt="40px"
          w={["100%", null, "auto"]}
        >
          <Button variant="outline" size="lg" bg="primary">
            Consorcios
          </Button>
          <Button variant="outline" size="lg" bg="primary">
            Propiedades
          </Button>
        </Stack>
      </Flex>
    </Box>
  );
};

export default Main;
