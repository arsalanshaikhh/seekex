import { Box, Center, Flex, Spacer } from "@chakra-ui/react";
import React from "react";

export default function TopBar() {
  return (
    <Center bg={"#1f1f1f"} h={"48px"} w={["100%", "100%", "100%"]} m={"auto"}>
      <Flex w={["100%", "100%", "74%"]} justify={"center"}>
        <Box color={"#FFFFFF"} p="auto">
          Welcome to Our Store Hiscraves
        </Box>
        <Spacer />
        <Box color={"#FFFFFF"} p="auto">
          📞 Call Us: 1234567890{" "}
        </Box>
      </Flex>
    </Center>
  );
}
