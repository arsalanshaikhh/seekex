import React from "react";

import p2 from "../svg/box2/image 2.svg";
import p3 from "../svg/box2/image 3.svg";
import p4 from "../svg/box2/image 4.svg";
import p5 from "../svg/box2/image 5.svg";
import p6 from "../svg/box2/image 6.svg";
import { Center, Flex, Grid, GridItem } from "@chakra-ui/react";

export default function Box2() {
  return (
    // <div>
    //   <Grid
    //     h="276px"
    //     templateRows="repeat(1, 1fr)"
    //     templateColumns="repeat(2, 1fr)"
    //     gap={"20px"}

    //   >
    //     <GridItem bg="tomato" w={"550px"} h={"100%"}>
    //       <img src={p2} width={"100%"} alt=""></img>
    //     </GridItem>

    //     <GridItem bg="tomato" w={"550px"} h={"100%"}>
    //       <img src={p3} width={"100%"} alt=""></img>
    //     </GridItem>
    //   </Grid>

    //   <Grid
    //     h="176px"
    //     templateRows="repeat(1, 1fr)"
    //     templateColumns="repeat(3, 1fr)"
    //     gap={"20px"}
    //   >
    //     <GridItem bg="tomato" w={"330px"} h={"100%"}>
    //       <img src={p4} width={"100%"}  alt=""></img>
    //     </GridItem>

    //     <GridItem bg="tomato" w={"300px"} h={"100%"}>
    //       <img src={p5} width={"100%"} alt=""></img>
    //     </GridItem>

    //     <GridItem bg="tomato" w={"330px"} h={"100%"}>
    //       <img src={p6} width={"100%"} alt=""></img>
    //     </GridItem>
    //   </Grid>
    // </div>
    <div>
      <Flex h="276px" gap={"20px"} justify={"Center"} wrap={"wrap"}>
        <Center w={"550px"} h={"100%"}>
          <img src={p2} width={"100%"} alt=""></img>
        </Center>
        <Center w={"550px"} h={"100%"}>
          <img src={p3} width={"100%"} alt=""></img>
        </Center>
      </Flex>
      <Center h={"16px"}></Center>

      <Flex h="176px" gap={"20px"} justify={"Center"} wrap={"wrap"}>
        <Center w={"360px"} h={"100%"}>
          <img src={p4} width={"100%"} alt=""></img>
        </Center>

        <Center w={"360px"} h={"100%"}>
          <img src={p5} width={"100%"} alt=""></img>
        </Center>

        <Center w={"360px"} h={"100%"}>
          <img src={p6} width={"100%"} alt=""></img>
        </Center>
      </Flex>
    </div>
  );
}
