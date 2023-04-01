import { Button, Flex, Img, Text } from "@chakra-ui/react";
import React from "react";
import img1 from "../svg/pro/Rectangle 3.svg";
export default function Pro() {
  return (
    <Flex w={"1120px"} justify={"space-between"} m={"auto"} wrap={"wrap"}>
      <Flex w={"264px"} flexDirection={"column"} justify={"space-between"}>
        <Img src={img1} />
        <Text>Men Henley Neck Full Sleeve Red Wine</Text>
        <Flex justify={"center"}>
          <Text className="t1">₹399</Text>
          <Text className="t2">₹1299</Text>
        </Flex>
        <Flex justify={"space-evenly"}>
          <Button>S</Button>
          <Button>M</Button>
          <Button>L</Button>
          <Button>XL</Button>
          <Button>XXL</Button>
        </Flex>
      </Flex>

      {/*  */}
      <Flex w={"264px"} flexDirection={"column"} justify={"space-between"}>
        <Img src={img1} />
        <Text>Men Henley Neck Full Sleeve Red Wine</Text>
        <Flex justify={"center"}>
          <Text className="t1">₹399</Text>
          <Text className="t2">₹1299</Text>
        </Flex>
        <Flex justify={"space-evenly"}>
          <Button>S</Button>
          <Button>M</Button>
          <Button>L</Button>
          <Button>XL</Button>
          <Button>XXL</Button>
        </Flex>
      </Flex>
      {/*  */}
      <Flex w={"264px"} flexDirection={"column"} justify={"space-between"}>
        <Img src={img1} />
        <Text>Men Henley Neck Full Sleeve Red Wine</Text>
        <Flex justify={"center"}>
          <Text className="t1">₹399</Text>
          <Text className="t2">₹1299</Text>
        </Flex>
        <Flex justify={"space-evenly"}>
          <Button>S</Button>
          <Button>M</Button>
          <Button>L</Button>
          <Button>XL</Button>
          <Button>XXL</Button>
        </Flex>
      </Flex>
      {/*  */}
      <Flex w={"264px"} flexDirection={"column"} justify={"space-between"}>
        <Img src={img1} />
        <Text>Men Henley Neck Full Sleeve Red Wine</Text>
        <Flex justify={"center"}>
          <Text className="t1">₹399</Text>
          <Text className="t2">₹1299</Text>
        </Flex>
        <Flex justify={"space-evenly"}>
          <Button>S</Button>
          <Button>M</Button>
          <Button>L</Button>
          <Button>XL</Button>
          <Button>XXL</Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
