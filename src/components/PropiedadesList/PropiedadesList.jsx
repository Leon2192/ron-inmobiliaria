import React from "react";
import { Grid, useMediaQuery } from "@chakra-ui/react";
import Propiedad from "../Propiedad/Propiedad";

const PropiedadesList = ({ inmuebles }) => {
  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
  return (
    <Grid
      templateColumns={isNotSmallerScreen ? "repeat(3, 1fr)" : "repeat(1, 1fr)"}
      gap={6}
    >
      {inmuebles.map((propiedad) => {
        return (
          <Grid w="100%" key={propiedad.id}>
            <Propiedad propiedad={propiedad} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default PropiedadesList;
