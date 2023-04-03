import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import img1 from "../svg/grid/Rectangle 18.svg";
import img2 from "../svg/grid/Rectangle 19.svg";
import img3 from "../svg/grid/Rectangle 20.svg";
import img4 from "../svg/grid/Rectangle 21.svg";
import img5 from "../svg/grid/Rectangle 22.svg";
import img6 from "../svg/grid/Rectangle 23.svg";

export default function Grid() {
  return (
    <div>
      <SimpleGrid
        columns={[1, 1, 3]}
        spacing="20px"
        w={"74%"}
        m={"auto"}
        mb={"68px"}
      >
        <Box
          textAlign={"center"}
          position={"relative"}
          bg={"#06b8a6"}
          height="432px"
          width={["100%", "100%", "100%"]}
          // width={"360px"}
        >
          <img src={img1} alt="" style={{ margin: "auto" }}></img>
          <Flex
            justify={"center"}
            align={"center"}
            h={"68PX"}
            backdropFilter={" blur(32px)"}
            w={"100%"}
            bg={
              " linear-gradient(111.49deg, rgba(255, 255, 255, 0.4) -8.95%, rgba(255, 255, 255, 0.01) 114%)"
            }
            position={"absolute"}
            bottom={"0"}
            m={"auto"}
          >
            <Text
              fontSize={"20px"}
              fontFamily={"Playfair Display"}
              fontWeight={"600"}
              lineHeight={"27px"}
              color={"white"}
            >
              {" "}
              Streetwear Collections
            </Text>
          </Flex>
        </Box>
        <Box
          position={"relative"}
          bg={"#80e8ff"}
          height="432px"
          width={["100%", "100%", "100%"]}
        >
          <img src={img2} alt="" style={{ margin: "auto" }}></img>
          <Flex
            justify={"center"}
            align={"center"}
            h={"68PX"}
            backdropFilter={" blur(32px)"}
            w={"100%"}
            bg={
              " linear-gradient(111.49deg, rgba(255, 255, 255, 0.4) -8.95%, rgba(255, 255, 255, 0.01) 114%)"
            }
            position={"absolute"}
            bottom={"0"}
            m={"auto"}
          >
            <Text
              fontSize={"20px"}
              fontFamily={"Playfair Display"}
              fontWeight={"600"}
              lineHeight={"27px"}
              color={"white"}
            >
              {" "}
              Striped T-Shirts{" "}
            </Text>
          </Flex>
        </Box>
        <Box
          position={"relative"}
          bg={"#dc493a"}
          height="432px"
          width={["100%", "100%", "100%"]}
        >
          <img src={img3} alt="" style={{ margin: "auto" }}></img>
          <Flex
            justify={"center"}
            align={"center"}
            h={"68PX"}
            backdropFilter={" blur(32px)"}
            w={"100%"}
            bg={
              " linear-gradient(111.49deg, rgba(255, 255, 255, 0.4) -8.95%, rgba(255, 255, 255, 0.01) 114%)"
            }
            position={"absolute"}
            bottom={"0"}
            m={"auto"}
          >
            <Text
              fontSize={"20px"}
              fontFamily={"Playfair Display"}
              fontWeight={"600"}
              lineHeight={"27px"}
              color={"white"}
            >
              {" "}
              Round Neck T-Shirts{" "}
            </Text>
          </Flex>
        </Box>
        <Box
          position={"relative"}
          bg={"#d7b2ff"}
          height="432px"
          width={["100%", "100%", "100%"]}
        >
          <img src={img4} alt="" style={{ margin: "auto" }}></img>
          <Flex
            justify={"center"}
            align={"center"}
            h={"68PX"}
            backdropFilter={" blur(32px)"}
            w={"100%"}
            bg={
              " linear-gradient(111.49deg, rgba(255, 255, 255, 0.4) -8.95%, rgba(255, 255, 255, 0.01) 114%)"
            }
            position={"absolute"}
            bottom={"0"}
            m={"auto"}
          >
            <Text
              fontSize={"20px"}
              fontFamily={"Playfair Display"}
              fontWeight={"600"}
              lineHeight={"27px"}
              color={"white"}
            >
              {" "}
              Printed T-Shirts{" "}
            </Text>
          </Flex>
        </Box>
        <Box
          position={"relative"}
          bg={"#f0bc8c"}
          height="432px"
          width={["100%", "100%", "100%"]}
        >
          <img src={img5} alt="" style={{ margin: "auto" }}></img>
          <Flex
            justify={"center"}
            align={"center"}
            h={"68PX"}
            backdropFilter={" blur(32px)"}
            w={"100%"}
            bg={
              " linear-gradient(111.49deg, rgba(255, 255, 255, 0.4) -8.95%, rgba(255, 255, 255, 0.01) 114%)"
            }
            position={"absolute"}
            bottom={"0"}
            m={"auto"}
          >
            <Text
              fontSize={"20px"}
              fontFamily={"Playfair Display"}
              fontWeight={"600"}
              lineHeight={"27px"}
              color={"white"}
            >
              {" "}
              Oversized T-Shirts{" "}
            </Text>
          </Flex>
        </Box>
        <Box
          position={"relative"}
          bg={"#4392f1"}
          height="432px"
          width={["100%", "100%", "100%"]}
        >
          <img src={img6} alt="" style={{ margin: "auto" }}></img>
          <Flex
            justify={"center"}
            align={"center"}
            h={"68PX"}
            backdropFilter={" blur(32px)"}
            w={"100%"}
            bg={
              " linear-gradient(111.49deg, rgba(255, 255, 255, 0.4) -8.95%, rgba(255, 255, 255, 0.01) 114%)"
            }
            position={"absolute"}
            bottom={"0"}
            m={"auto"}
          >
            <Text
              fontSize={"20px"}
              fontFamily={"Playfair Display"}
              fontWeight={"600"}
              lineHeight={"27px"}
              color={"white"}
            >
              {" "}
              Half Sleeves T-Shirts{" "}
            </Text>
          </Flex>
        </Box>
      </SimpleGrid>
    </div>
  );
}
