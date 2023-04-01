import React, { Suspense, lazy } from "react";
import "./App.css";
import Text from "./comp/Text";
import Pro from "./comp/Pro";
// import Navbar from "./comp/Navbar";

const Navbar = lazy(() => import("./comp/Navbar"));
const Footer = lazy(() => import("./comp/Footer"));
const Footer2 = lazy(() => import("./comp/Footer2"));
const Sub = lazy(() => import("./comp/Sub"));
const Ban = lazy(() => import("./comp/Ban"));
const Box1main = lazy(() => import("./comp/Box1main"));
const Box2 = lazy(() => import("./comp/Box2"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<h3>please wait...</h3>}>
        <Navbar />
      </Suspense>
      <Suspense fallback={<h3>please wait...</h3>}>
        <Ban />
      </Suspense>
      <div className="pad">
        <Suspense fallback={<h3>please wait...</h3>}>
          <Box1main />
        </Suspense>
      </div>

      <div className="pad">
        <Suspense fallback={<h3>please wait...</h3>}>
          <Box2 />
        </Suspense>
      </div>
      <Text />

      <Pro />
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
