import {
  Box,
  Center,
  Divider,
  Flex,
  Img,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import img from "../svg/bottombar/Vector.svg";
export default function Bottombar() {
  return (
    <Center bg={"#f5f4f2"} mb={"68px"} w={"100%"}>
      <SimpleGrid columns={[2, 2, 4]} w={"85%"} padding={"20px"}>
        <Box>
          {" "}
          <Flex
            direction={"column"}
            //   gap="22px"
            m={"auto"}
            align={"center"}
            justify={"space-evenly"}
            w={"80%"}
            h={"80%"}
          >
            <Img mt={"50px"} src={img}></Img>
            <Text
              fontSize={"16px"}
              fontWeight={"500"}
              lineHeight={"20px"}
              fontFamily={"Montserrat"}
            >
              Quality Products
            </Text>
          </Flex>
        </Box>
        <Box borderLeft={"1px solid #FFC7D1 "}>
          {" "}
          <Flex
            direction={"column"}
            //   gap="22px"
            m={"auto"}
            align={"center"}
            justify={"space-evenly"}
            w={"80%"}
            h={"80%"}
          >
            <Img mt={"50px"} src={img}></Img>
            <Text
              fontSize={"16px"}
              fontWeight={"500"}
              lineHeight={"20px"}
              fontFamily={"Montserrat"}
            >
              Quality Products{" "}
            </Text>
          </Flex>
        </Box>
        <Box borderLeft={["none", "none", "1px solid #FFC7D1"]}>
          {" "}
          <Flex
            direction={"column"}
            //   gap="22px"
            m={"auto"}
            align={"center"}
            justify={"space-evenly"}
            w={"80%"}
            h={"80%"}
          >
            <Img mt={"50px"} src={img}></Img>
            <Text
              fontSize={"16px"}
              fontWeight={"500"}
              lineHeight={"20px"}
              fontFamily={"Montserrat"}
            >
              Safe Payment{" "}
            </Text>
          </Flex>
        </Box>{" "}
        <Box borderLeft={"1px solid #FFC7D1 "}>
          {" "}
          <Flex
            direction={"column"}
            //   gap="22px"
            m={"auto"}
            align={"center"}
            justify={"space-evenly"}
            w={"80%"}
            h={"80%"}
          >
            <Img mt={"50px"} src={img}></Img>
            <Text
              fontSize={"16px"}
              fontWeight={"500"}
              lineHeight={"20px"}
              fontFamily={"Montserrat"}
            >
              24x7 Helpline{" "}
            </Text>
          </Flex>
        </Box>
      </SimpleGrid>
    </Center>
  );
}
