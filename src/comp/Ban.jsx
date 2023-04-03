import React from "react";
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
