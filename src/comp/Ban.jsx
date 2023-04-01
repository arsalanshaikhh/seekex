import React from "react";
import bann from "../svg/ban.svg";
import { Flex } from "@chakra-ui/react";
import "./Ban.css";

export default function Ban() {
  return (
    <div className="main" >
      <div className="main2">
        <img className="imgCover" src={bann} />
      </div>
    </div>
  );
}
