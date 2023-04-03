import React from "react";
import "./Text.css";
import { Box, Center, Divider, Flex } from "@chakra-ui/react";

export default function Text(prop) {
  return (
    <Center w={"100%"}>
      <Flex
        w={["100%", "74%", "74%"]}
        className="perent"
        gap={"20px"}
        align={"center"}
      >
        <Divider orientation="horizontal" borderColor={"#FFC7D1"} />
        <Center fontSize={["25px", "36px", "36px"]} className="text">
          {prop.pr}
        </Center>
        <Divider orientation="horizontal" borderColor={"#FFC7D1"} />
      </Flex>
    </Center>
  );
}
