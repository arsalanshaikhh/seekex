import React, { Suspense, lazy } from "react";
import "./App.css";
import Text from "./comp/Text";
import Viewall from "./comp/Viewall";
import bann from "./svg/ban.svg";
import bann1 from "./svg/banner1 2.svg";
import bann2 from "./svg/banner1 3.svg";
import { Center, Divider } from "@chakra-ui/react";

const Subscribe = lazy(() => import("./comp/Subscribe"));
const Grid = lazy(() => import("./comp/Grid"));
const Bottombar = lazy(() => import("./comp/Bottombar"));
const Navbar = lazy(() => import("./comp/Navbar"));
const Footer = lazy(() => import("./comp/Footer"));
const Footer2 = lazy(() => import("./comp/Footer2"));
const Sub = lazy(() => import("./comp/Sub"));
const Ban = lazy(() => import("./comp/Ban"));
const Box1main = lazy(() => import("./comp/Box1main"));
const Box2 = lazy(() => import("./comp/Box2"));
const Pro = lazy(() => import("./comp/Pro"));
const Twobox = lazy(() => import("./comp/Twobox"));
const TopBar = lazy(() => import("./comp/TopBar"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<h3>please wait...</h3>}>
        <TopBar />
      </Suspense>
      <Suspense fallback={<h3>please wait...</h3>}>
        <Navbar />
      </Suspense>
      <Suspense fallback={<h3>please wait...</h3>}>
        <Ban bann={bann} />
      </Suspense>
      {/* <div className="pad"> */}
      <Suspense fallback={<h3>please wait...</h3>}>
        <Box1main />
      </Suspense>
      {/* </div> */}

      {/* <div className="pad"> */}
      <Suspense fallback={<h3>please wait...</h3>}>
        <Box2 />
      </Suspense>
      {/* </div> */}

      <Suspense fallback={<h3>please wait...</h3>}>
        <Text pr={"Trending T-Shirts"} />
        <Pro />
        <Pro />
        <Viewall />
      </Suspense>
      <Suspense fallback={<h3>please wait...</h3>}>
        <Text pr={"Featured Products"} />
        <Pro />
        <Viewall />
      </Suspense>

      <Suspense fallback={<h3>please wait...</h3>}>
        <Ban bann={bann1} />
      </Suspense>
      <Suspense fallback={<h3>please wait...</h3>}>
        <Text pr={"New Products"} /> <Pro />
        <Viewall />
      </Suspense>
      <Suspense fallback={<h3>please wait...</h3>}>
        <Text pr={"Best Selling Products"} />
        <Pro />
        <Viewall />
      </Suspense>
      <Suspense fallback={<h3>please wait...</h3>}>
        <Grid></Grid>
      </Suspense>

      <Suspense fallback={<h3>please wait...</h3>}>
        <Ban bann={bann2} />
      </Suspense>
      <Suspense fallback={<h3>please wait...</h3>}>
        <Twobox />
      </Suspense>
      <Suspense fallback={<h3>please wait...</h3>}>
        <Bottombar />
      </Suspense>
      <Suspense fallback={<h3>please wait...</h3>}>
        <Subscribe />
      </Suspense>

      <Center mb={"68px"}>
        <Divider orientation="horizontal" />{" "}
      </Center>
      {/* <Suspense fallback={<h3>please wait...</h3>}>
        <Sub />
      </Suspense> */}

      <Suspense fallback={<h3>please wait...</h3>}>
        <Footer />
      </Suspense>

      <Suspense fallback={<h3>please wait...</h3>}>
        <Footer2 />
      </Suspense>
    </div>
  );
}

export default App;
