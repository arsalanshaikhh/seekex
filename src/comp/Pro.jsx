import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import img1 from "../svg/pro/Rectangle 3.svg";
import img2 from "../svg/pro/Rectangle 4.svg";
import img3 from "../svg/pro/Rectangle 5.svg";
import img4 from "../svg/pro/Rectangle 6.svg";
import "./Pro.css";
import i1 from "../svg/icon/Vector.svg";
import i2 from "../svg/icon/Vector (1).svg";
import i3 from "../svg/icon/Vector (2).svg";
export default function Pro(prop) {
  console.log(prop.src);
  return (
    <Box m={"auto"} w={["100%", "74%", "74%"]} m={"auto"}>
      <Flex
        // w={"1120px"}
        w={"100%"}
        justify={"space-between"}
        m={"auto"}
        flexWrap={"wrap"}
        mb={"48px"}
      >
        <Flex
          w={"264px"}
          flexDirection={"column"}
          justify={"space-between"}
          gap={"10px"}
        >
          <div className="Img">
            <img src={img1} alt="" />
            <div className="Icon">
              <div>
                <img src={i1} alt="" />
              </div>
              <div>
                <img src={i2} alt="" />
              </div>
              <div>
                <img src={i3} alt="" />
              </div>
            </div>
          </div>

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
        <Flex
          w={"264px"}
          flexDirection={"column"}
          justify={"space-between"}
          gap={"10px"}
        >
          <div className="Img">
            <img src={img2} alt="" />
            <div className="Icon">
              <div>
                <img src={i1} alt="" />
              </div>
              <div>
                <img src={i2} alt="" />
              </div>
              <div>
                <img src={i3} alt="" />
              </div>
            </div>
          </div>

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
        <Flex
          w={"264px"}
          flexDirection={"column"}
          justify={"space-between"}
          gap={"10px"}
        >
          <div className="Img">
            <img src={img3} alt="" />
            <div className="Icon">
              <div>
                <img src={i1} alt="" />
              </div>
              <div>
                <img src={i2} alt="" />
              </div>
              <div>
                <img src={i3} alt="" />
              </div>
            </div>
          </div>

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

        {/*
         */}
        <Flex
          w={"264px"}
          flexDirection={"column"}
          justify={"space-between"}
          gap={"10px"}
        >
          <div className="Img">
            <img src={img4} alt="" />
            <div className="Icon">
              <div>
                <img src={i1} alt="" />
              </div>
              <div>
                <img src={i2} alt="" />
              </div>
              <div>
                <img src={i3} alt="" />
              </div>
            </div>
          </div>

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
    </Box>
  );
}
