//
import React from "react";
import { Box, Center, Flex, Spacer, Square, Text } from "@chakra-ui/react";
import { BiBox } from "react-icons/bi";
import menu from "../svg/menu.svg";
import menu1 from "../svg/menu1.svg";
import menu2 from "../svg/menu2.svg";
import menu3 from "../svg/menu3.svg";
import menu4 from "../svg/menu4.svg";

const Navbar = () => {
  return (
    <Center color="white" w={"100%"}>
      <Flex
        w={["100%", "74%", "74%"]}
        h={"60px"}
        alignItems="center"
        color="white"
        // p={"0 12%"}
        justifyContent={"space-between"}
      >
        <Flex w="15%" justify={"flex-start"}>
          <img src={menu} />
        </Flex>
        <Box>
          <Center>
            <Text
              color={" #1C1C1C"}
              fontSize={"16px"}
              fontWeight="600"
              lineHeight={"21px"}
              fontFamily={"Playfair Display"}
            >
              Logo Here
            </Text>
          </Center>
        </Box>
        <Flex w="15%" justifyContent={"space-between"}>
          <img src={menu1} />
          <img src={menu2} />
          <img src={menu3} />
          <img src={menu4} />
        </Flex>
      </Flex>
    </Center>
  );
};

export default Navbar;
