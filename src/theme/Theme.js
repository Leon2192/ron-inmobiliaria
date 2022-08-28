import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

const breakpoints = {
  sm: "40em",
  md: "52em",
  lg: "64em",
  xl: "80em",
};

const colors = {
  primary: "#07A533",
  secondary: "#FF6F91",
  highlight: "#00C9A7",
  warning: "#FFC75F",
  danger: "#C34A36",
};

const fonts = {
  heading: "Roboto, sans-serif",
  body: "Roboto, sans-serif",
};

const VStack = {
  _hover: {
    cursor: "pointer",
  },
};

const Button = {
  variants: {
    outline: {
      borderRadius: "50px",
      textTransform: "uppercase",
      fontWeight: "light",
      letterSpacing: "1px",
      textShadow: "0 0 20px black",
      _hover: {
        color: "#07A533",
      },
    },
  },
};

const Heading = {
  variants: {
    banner: {
      textTransform: "uppercase",
      fontWeight: "light",
      letterSpacing: "5px",
      color: "white",
    },
  },
};

export const theme = extendTheme({
  fonts,
  breakpoints,
  config,
  colors,
  components: { Button, Heading, VStack },
});
