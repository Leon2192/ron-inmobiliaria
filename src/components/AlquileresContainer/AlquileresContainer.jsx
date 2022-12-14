import React, { useState } from "react";
import propiedades from "../../Api/Api.json";
import { Grid, useMediaQuery } from "@chakra-ui/react";
import { Box, Center, Heading, Text, Stack, Image } from "@chakra-ui/react";

//  En este componente voy a retornar la grilla de alquileres

const AlquileresContainer = () => {
  const [loading, setLoading] = useState(false);
  console.log(propiedades);

  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

  return (
    <div>
      <Grid
        templateColumns={
          isNotSmallerScreen ? "repeat(3, 1fr)" : "repeat(1, 1fr)"
        }
        gap={6}
      >
        {propiedades.map((propiedad) => {
          return (
            <Grid w="100%">
              <Center py={12}>
                <Box
                  role={"group"}
                  p={6}
                  maxW={"330px"}
                  w={"full"}
                  boxShadow={"2xl"}
                  rounded={"lg"}
                  pos={"relative"}
                  zIndex={1}
                >
                  <Box
                    rounded={"lg"}
                    mt={-12}
                    pos={"relative"}
                    height={"230px"}
                    _after={{
                      transition: "all .3s ease",
                      content: '""',
                      w: "full",
                      h: "full",
                      pos: "absolute",
                      top: 5,
                      left: 0,
                      backgroundImage: `url(${propiedad.image})`,
                      filter: "blur(15px)",
                      zIndex: -1,
                    }}
                    _groupHover={{
                      _after: {
                        filter: "blur(20px)",
                      },
                    }}
                  >
                    <Image
                      rounded={"lg"}
                      height={230}
                      width={282}
                      objectFit={"cover"}
                      src={propiedad.image}
                    />
                  </Box>
                  <Stack pt={10} align={"center"}>
                    <Text
                      color={"gray.500"}
                      fontSize={"sm"}
                      textTransform={"uppercase"}
                    >
                      {propiedad.id}
                    </Text>
                    <Heading
                      fontSize={"2xl"}
                      fontFamily={"body"}
                      fontWeight={500}
                    >
                      {propiedad.localidad}
                    </Heading>
                    <Stack direction={"row"} align={"center"}>
                      <Text fontWeight={800} fontSize={"xl"}>
                        ${propiedad.precio}
                      </Text>
                      <Text textDecoration={"line-through"} color={"gray.600"}>
                        $199
                      </Text>
                    </Stack>
                  </Stack>
                </Box>
              </Center>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default AlquileresContainer;
