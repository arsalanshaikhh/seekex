import React from "react";
import first from "../svg/box/1.svg";
import "./Box1.css";

export default function Box1(prop) {
  return (
    <div className="cardMain">
      <div>
        <img src={prop.src}></img>
      </div>
      <div className="boxText">{prop.leb}</div>
    </div>
  );
}

// w={["100%", "74%", "74%"]}
