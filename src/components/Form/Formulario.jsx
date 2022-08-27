import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Textarea,
  Flex,
  Center,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";

const Formulario = () => {
  const [input, setInput] = useState("");

  const handleInputChange = (e) => setInput(e.target.value);

  const isError = input === "";

  return (
    <>
      <Center>
        <Flex w="75%">
          <FormControl isInvalid={isError} p="10px" justifyContent="center">
            <FormLabel>Nombre</FormLabel>
            <Input
              type="text"
              placeholder="Ingrese su nombre..."
              value={input}
              onChange={handleInputChange}
            />
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              placeholder="Ingrese su email..."
              value={input}
              onChange={handleInputChange}
            />
            <FormLabel>Consulta</FormLabel>
            <Textarea
              type="text"
              placeholder="Ingrese su consulta"
              value={input}
              onChange={handleInputChange}
            />
            {!isError ? (
              <FormHelperText>
                Enter the email you'd like to receive the newsletter on.
              </FormHelperText>
            ) : (
              <FormErrorMessage>Email is required.</FormErrorMessage>
            )}
          </FormControl>
        </Flex>
      </Center>
      <Button colorScheme="blue">Enviar</Button>
    </>
  );
};

export default Formulario;
