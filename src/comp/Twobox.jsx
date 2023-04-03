import {
  Box,
  Button,
  Center,
  Flex,
  Img,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React from "react";
import "./Twobox.css";
import img1 from "../svg/twobox/diamond 1.svg";
import img2 from "../svg/twobox/discount 1.svg";

export default function Twobox() {
  return (
    <Center m={"auto"} w={"100%"} mb={"68px"}>
      <SimpleGrid
        columns={[1, 1, 2]}
        spacing="24px"
        w={["100%", "74%", "74%"]}
        m={"auto"}
      >
        <Box bg="#cccea7" w={"100%"} p={"5%"}>
          <Flex
            direction={"column"}
            //   gap="22px"
            m={"auto"}
            align={"center"}
            justify={"space-evenly"}
            w={"100%"}
            h={"100%"}
          >
            <Img src={img1}></Img>
            <Text className="FirstText">Hurry Up!</Text>
            <Text className="SecondText">75% OFF</Text>
            <Text className="FirstText">Sale</Text>
            <Button className="BtnBox">shop now</Button>
          </Flex>
        </Box>
        <Box bg="#d6bebe" w={"100%"} p={"5%"}>
          <Flex
            direction={"column"}
            //   gap="22px"
            m={"auto"}
            align={"center"}
            justify={"space-evenly"}
            w={"100%"}
            h={"100%"}
          >
            <Img src={img2}></Img>
            <Text className="FirstText">Hurry Up!</Text>
            <Text className="SecondText">75% OFF</Text>
            <Text className="FirstText">Sale</Text>
            <Button className="BtnBox">shop now</Button>
          </Flex>
        </Box>
      </SimpleGrid>
    </Center>
  );
}
