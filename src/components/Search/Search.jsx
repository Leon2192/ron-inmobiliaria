import axios from "axios";
import React, { useState } from "react";
import {
  Input,
  Center,
  Stack,
  InputGroup,
  InputLeftAddon,
} from "@chakra-ui/react";

const Search = () => {
  const [value, setValue] = useState("");
  const [userData, setUserData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

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
    <Center>
      <Stack p="30px">
        <InputGroup borderColor="warning" fontWeight="bold">
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
    </Center>
  );
};

export default Search;
