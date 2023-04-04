import React, { Suspense, lazy } from "react";
import "./App.css";
import Text from "./comp/Text";
import Viewall from "./comp/Viewall";
import bann from "./svg/ban.svg";
import bann1 from "./svg/banner1 2.svg";
import bann2 from "./svg/banner1 3.svg";
import { Center, Divider } from "@chakra-ui/react";
import TopBar from "./comp/TopBar";
import Navbar from "./comp/Navbar";

// const Navbar = lazy(() => import("./comp/Navbar"));

const Footer = lazy(() => import("./comp/Footer"));
const Footer2 = lazy(() => import("./comp/Footer2"));
const Sub = lazy(() => import("./comp/Sub"));
const Ban = lazy(() => import("./comp/Ban"));
const Box1main = lazy(() => import("./comp/Box1main"));
const Box2 = lazy(() => import("./comp/Box2"));
const Pro = lazy(() => import("./comp/Pro"));
const Twobox = lazy(() => import("./comp/Twobox"));
// const TopBar = lazy(() => import("./comp/TopBar"));

const Subscribe = lazy(() => import("./comp/Subscribe"));
const Grid = lazy(() => import("./comp/Grid"));
const Bottombar = lazy(() => import("./comp/Bottombar"));

function App() {
  return (
    <div className="App">
      {/* .....................Navebar........................ */}
      <TopBar />
      <Navbar />
      {/* ............................................. */}
      <Suspense fallback={<div class="loader"></div>}>
        <Ban bann={bann} />
        <Box1main />
        <Box2 />
      </Suspense>

      {/* .....................Trending T-Shirts........................ */}

      <Text pr={"Trending T-Shirts"} />
      <Suspense fallback={<div class="loader"></div>}>
        <Pro />
        <Pro />
        <Viewall />
      </Suspense>
      {/* .....................Featured Products........................ */}
      <Text pr={"Featured Products"} />
      <Suspense fallback={<div class="loader"></div>}>
        <Pro />
        <Viewall />
        <Ban bann={bann1} />
      </Suspense>

      {/* .....................New Products........................ */}
      <Text pr={"New Products"} />
      <Suspense fallback={<div class="loader"></div>}>
        <Pro />
        <Viewall />
      </Suspense>

      {/* .....................Best Selling Products........................ */}
      <Text pr={"Best Selling Products"} />
      <Suspense fallback={<div class="loader"></div>}>
        <Pro />
        <Viewall />
        <Grid></Grid>
        <Ban bann={bann2} />
      </Suspense>

      {/* ............................................. */}
      <Suspense fallback={<div class="loader"></div>}>
        <Twobox />
        <Bottombar />
        <Subscribe />
      </Suspense>

      {/* ............................................. */}

      <Center mb={"68px"}>
        <Divider orientation="horizontal" borderColor={"#FFC7D1"} />{" "}
      </Center>

      {/* .....................Footer........................ */}
      <Suspense fallback={<div class="loader"></div>}>
        <Footer />
        <Footer2 />
      </Suspense>
    </div>
  );
}

export default App;
