import React from "react";
import "./Text.css";
import { Divider, Flex } from "@chakra-ui/react";

export default function Text(prop) {
  return (
    <Flex className="perent" gap={"20px"} align={"center"}>
      <Divider orientation="horizontal" />
      <h1 className="text">{prop.pr}</h1>
      <Divider orientation="horizontal" />
    </Flex>
  );
}
