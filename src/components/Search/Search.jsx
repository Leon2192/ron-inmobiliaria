import axios from "axios";
import React, { useState } from "react";
import {
  Input,
  Center,
  Stack,
  InputGroup,
  InputLeftAddon,
  useMediaQuery,
} from "@chakra-ui/react";

const Search = () => {
  const [value, setValue] = useState("");
  const [userData, setUserData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

  const onChangeValue = (e) => {
    setValue(e.target.value);
  };

  const onSubmit = (e) => {
    setIsLoading(true);
    e.preventDefault();
    const userInput = value.toLowerCase().replace(/ /g, ""); // Sanitizar la variable
    // console.log(userInput);
    if (userInput) {
      axios(`https://api.github.com/users/${userInput}`).then((res) =>
        setUserData(res.data)
      );
    }
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
    setValue("");
  };

  return (
    
      <Stack p="30px" w={isNotSmallerScreen ? "100%" : "repeat(1, 1fr)"}>
        <InputGroup borderColor="warning" fontWeight="bold" display={isNotSmallerScreen ? "flex" : "block"}>
          <InputLeftAddon
            children="Alquiler"
            border="2px solid"
            bgColor="#07A533"
            cursor="pointer"
          />
          <InputLeftAddon
            children="Venta"
            border="2px solid"
            bgColor="#F16100"
            color="#fff"
            cursor="pointer"
          />
          <InputLeftAddon
            children="Alquiler temporario"
            border="2px solid black"
            bgColor="#00A8F6"
            color="#fff"
            cursor="pointer"
          />
          <Input
            type="tel"
            placeholder="Buscá por localidad..."
            borderRadius="10px"
            border="2px solid black"
          />
        </InputGroup>
      </Stack>
  
  );
};

export default Search;
