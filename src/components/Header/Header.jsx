import React from "react";
import {
  Box,
  VStack,
  Flex,
  IconButton,
  Image,
  useColorMode,
} from "@chakra-ui/react";
import { FaSun } from "react-icons/fa";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <VStack w="100%">
      <Box boxSize="150" alignSelf="flex-start">
        <Image
          height="40"
          src="https://bit.ly/dan-abramov"
          alt="Dan Abramov"
          borderRadius="50%"
        />
      </Box>
      <Box boxSize="100" alignSelf="flex-end">
        <IconButton
          icon={<FaSun />}
          isRound="true"
          onClick={toggleColorMode}
        ></IconButton>
      </Box>
    </VStack>
  );
};

export default Header;
