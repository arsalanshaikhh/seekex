import React from "react";
import bann from "../svg/ban.svg";
import { Flex } from "@chakra-ui/react";
import "./Ban.css";

export default function Ban(prop) {
  return (
    <div className="main" >
      <div className="main2">
        <img className="imgCover" src={prop.bann} />
      </div>
    </div>
  );
}
