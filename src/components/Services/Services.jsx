import React from "react";
import {
  Grid,
  Stack,
  Box,
  Badge,
  Image,
  Flex,
  Heading,
} from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";

const Services = () => {
  const property = {
    imageUrl:
      "https://images.pexels.com/photos/101808/pexels-photo-101808.jpeg",
    compraUrl:
      "https://images.pexels.com/photos/87223/pexels-photo-87223.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    consorciosUrl:
      "https://images.pexels.com/photos/7415014/pexels-photo-7415014.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    imageAlt: "Rear view of modern home with pool",
    title: "ALQUILERES",
    titleTwo: "COMPRA/VENTA",
    titleThree: "CONSORCIOS",
  };

  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

  return (
    <Stack w="100%" pb="50px">
      <Heading>Servicios</Heading>
      <Flex justify="space-around">
        <Grid
          templateColumns={
            isNotSmallerScreen ? "repeat(3, 1fr)" : "repeat(1, 1fr)"
          }
          gap={6}
        >
          <Box
            maxW="sm"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            _hover={{ cursor: "pointer", opacity: "0.8" }}
          >
            <Image
              src={property.imageUrl}
              alt={property.imageAlt}
              objectFit="cover"
              borderRadius="10px"
              h="75%"
            />
            <Box p="6">
              <Box display="flex" alignItems="baseline">
                <Badge borderRadius="full" px="2" colorScheme="teal">
                  New
                </Badge>
              </Box>
              <Box
                mt="1"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                noOfLines={1}
              >
                {property.title}
              </Box>
            </Box>
          </Box>
          <Box
            maxW="sm"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            _hover={{ cursor: "pointer", opacity: "0.8" }}
          >
            <Image
              src={property.compraUrl}
              alt={property.imageAlt}
              objectFit="cover"
              borderRadius="10px"
              h="75%"
            />
            <Box p="6">
              <Box display="flex" alignItems="baseline">
                <Badge borderRadius="full" px="2" colorScheme="teal">
                  New
                </Badge>
              </Box>
              <Box
                mt="1"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                noOfLines={1}
              >
                {property.titleTwo}
              </Box>
            </Box>
          </Box>
          <Box
            maxW="sm"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            _hover={{ cursor: "pointer", opacity: "0.8" }}
          >
            <Image
              src={property.consorciosUrl}
              alt={property.imageAlt}
              objectFit="cover"
              borderRadius="10px"
              h="75%"
            />
            <Box p="6">
              <Box display="flex" alignItems="baseline">
                <Badge borderRadius="full" px="2" colorScheme="teal">
                  New
                </Badge>
              </Box>
              <Box
                mt="1"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                noOfLines={1}
              >
                {property.titleThree}
              </Box>
            </Box>
          </Box>
        </Grid>
      </Flex>
    </Stack>
  );
};

export default Services;
