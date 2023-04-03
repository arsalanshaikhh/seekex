import React from "react";
import img1 from "../svg/pro/Rectangle 3.svg";
import img2 from "../svg/pro/Rectangle 4.svg";
import img3 from "../svg/pro/Rectangle 5.svg";
import img4 from "../svg/pro/Rectangle 6.svg";
import Pro from "./Pro";
import { Flex } from "@chakra-ui/react";
export default function ProMain() {
  let arr2 = [
    {
      imge: img1,
    },
    {
      imge: img2,
    },
    {
      imge: img3,
    },
    {
      imge: img4,
    },
  ];
  console.log(arr2);
  return (
    <div>
      {/* <Flex w={"1120px"} justify={"space-between"} m={"auto"} wrap={"wrap"}> */}
        {arr2.map((e) => {
          return <Pro src={e.imge} />;
        })}
      {/* </Flex> */}
    </div>
  );
}
