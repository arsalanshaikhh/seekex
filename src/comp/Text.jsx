import React from "react";
import "./Text.css";
import { Center, Divider, Flex } from "@chakra-ui/react";

export default function Text(prop) {
  return (
    <Flex className="perent" gap={"20px"} align={"center"}>
      <Divider orientation="horizontal" />
      <Center fontSize={["25px", "36px", "36px"]} className="text">
        {prop.pr}
      </Center>
      <Divider orientation="horizontal" />
    </Flex>
  );
}
