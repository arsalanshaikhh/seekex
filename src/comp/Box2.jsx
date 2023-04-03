import React from "react";

import p2 from "../svg/box2/image 2.svg";
import p3 from "../svg/box2/image 3.svg";
import p4 from "../svg/box2/image 4.svg";
import p5 from "../svg/box2/image 5.svg";
import p6 from "../svg/box2/image 6.svg";
import {
  Box,
  Center,
  Flex,
  Grid,
  GridItem,
  SimpleGrid,
} from "@chakra-ui/react";

export default function Box2() {
  return (
    <>
      <Center m={"auto"} w={"100%"} mb={"16px"}>
        <SimpleGrid
          // border={"1px red solid"}
          w={["100%", "74%", "74%"]}
          columns={[1, 1, 2]}
          spacing="20px"
          m={"auto"}
        >
          <Center w={"100%"}>
            <img src={p2} width={"100%"} alt=""></img>
          </Center>
          <Center w={"100%"}>
            <img src={p3} width={"100%"} alt=""></img>
          </Center>
        </SimpleGrid>
      </Center>

      <Center m={"auto"} w={"100%"} mb={"68px"}>
        <SimpleGrid
          w={["100%", "74%", "74%"]}
          columns={[1, 2, 3]}
          spacing="20px"
          m={"auto"}
        >
          <Center w={"100%"}>
            <img src={p4} width={"100%"} alt=""></img>
          </Center>
          <Center w={"100%"}>
            <img src={p5} width={"100%"} alt=""></img>
          </Center>
          <Center w={"100%"}>
            <img src={p6} width={"100%"} alt=""></img>
          </Center>
        </SimpleGrid>
      </Center>
    </>
  );
}
