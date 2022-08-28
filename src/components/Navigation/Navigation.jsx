import { ReactNode } from "react";
import logo from "../Assets/Img/logo.png";
import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Image,
  Heading,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import SideBar from "../SideBar/SideBar";

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}
  >
    {children}
  </Link>
);

export default function Navigation() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
  return (
    <>
      {isNotSmallerScreen ? (
        <Box px={4}>
          <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
            <Box>
              <Avatar name="Dan Abrahmov" src={logo} />
            </Box>
            <Link to="/">
              <Text>Inicio</Text>
            </Link>
            <Link to="/about">
              <Text>Nosotros</Text>
            </Link>
            <Link to="/alquileres">
              <Text>Alquileres</Text>
            </Link>
            <Link to="/venta">
              <Text>Ventas</Text>
            </Link>
            <Link to="/contacto">
              <Text>Contacto</Text>
            </Link>

            <Flex alignItems={"center"}>
              <Stack direction={"row"} spacing={7}>
                <Button onClick={toggleColorMode}>
                  {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                </Button>

                <Menu>
                  <MenuButton
                    as={Button}
                    rounded={"full"}
                    variant={"link"}
                    cursor={"pointer"}
                    minW={0}
                  >
                    <Avatar
                      size={"sm"}
                      src={"https://avatars.dicebear.com/api/male/username.svg"}
                    />
                  </MenuButton>
                  <MenuList alignItems={"center"}>
                    <br />
                    <Center>
                      <Avatar
                        size={"2xl"}
                        src={
                          "https://avatars.dicebear.com/api/male/username.svg"
                        }
                      />
                    </Center>
                    <br />
                    <Center>
                      <p>Username</p>
                    </Center>
                    <br />
                    <MenuDivider />
                    <MenuItem>Your Servers</MenuItem>
                    <MenuItem>Account Settings</MenuItem>
                    <MenuItem>Logout</MenuItem>
                  </MenuList>
                </Menu>
              </Stack>
            </Flex>
          </Flex>
        </Box>
      ) : (
        <SideBar />
      )}
    </>
  );
}
