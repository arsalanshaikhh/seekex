//
import React from "react";
import { Box, Center, Flex, Spacer, Square, Text } from "@chakra-ui/react";
import { BiBox } from "react-icons/bi";
import menu from "../svg/menu.svg";

const Navbar = () => {
  return (
    <Flex
      h={"60px"}
      alignItems="center"
      color="white"
      p={"0 10%"}
      justifyContent={"space-between"}
    >
      <Flex bg="green.500">
        <img src={menu} />
      </Flex>
      <Box bg="blue.500">
        <Text>Logo Here</Text>
      </Box>
      <Flex w="15%" bg="tomato" justifyContent={"space-evenly"}>
        <img src={menu} />
        <img src={menu} />
        <img src={menu} />
        <img src={menu} />
      </Flex>
    </Flex>
  );
};

export default Navbar;
