import React from "react";
import "./Box1.css";

import img1 from "../svg/box/1.svg";
import img2 from "../svg/box/Ellipse 8.svg";
import img3 from "../svg/box/Ellipse 11.svg";
import img4 from "../svg/box/Ellipse 12.svg";
import img5 from "../svg/box/Ellipse 9.svg";
import img6 from "../svg/box/Ellipse 10.svg";
import Box1 from "./Box1";
import { Center } from "@chakra-ui/react";

export default function Box1main() {
  let arr = [
    {
      img: img1,
      leb: "Men’s T-Shirts",
    },
    {
      img: img2,
      leb: "Men’s T-Shirts",
    },
    {
      img: img5,
      leb: "Men’s T-Shirts",
    },
    {
      img: img6,
      leb: "Men’s T-Shirts",
    },
    {
      img: img3,
      leb: "Men’s T-Shirts",
    },
    {
      img: img4,
      leb: "Men’s T-Shirts",
    },
  ];
  return (
    <Center m={"auto"} w={["100%", "74%", "74%"]} className="box1MainMain">
      {arr.map((e) => {
        return <Box1 src={e.img} leb={e.leb} />;
      })}
    </Center>
  );
}
