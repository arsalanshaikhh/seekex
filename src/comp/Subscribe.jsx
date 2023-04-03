import React from "react";

import "./Subscribe.css";
import { Box, Center, Flex, Input } from "@chakra-ui/react";
export default function Subscribe() {
  return (
    // <div className="MainDiv">
    //   <p className="para">Subscribe to get updates on exciting offers & deals</p>
    //   <div>
    //     <input placeholder="Enter your email"></input>
    //     <button>Subscribe</button>
    //   </div>
    // </div>
    <Center w={"100%"} mb={"68px"}>
      <Flex
        bg={"#92011a"}
        direction={"column"}
        //   gap="22px"
        m={"auto"}
        align={"center"}
        justify={"space-evenly"}
        w={["100%", "74%", "74%"]}
        // h={"100%"}
        gap={"20px"}
        padding={"68px"}
      >
        <Center className="para">
          Subscribe to get updates on exciting offers & deals
        </Center>
        <Center>
          <Flex mb={"20%"}>
            <Input borderRadius={"0"} placeholder="Enter your email"></Input>
            <Flex p={"5px"} alignItems={"center"} className="BackG">
              <Center className="TextBtn">Subscribe</Center>
            </Flex>
          </Flex>
        </Center>
      </Flex>
    </Center>
  );
}
