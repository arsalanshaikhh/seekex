import React, { Suspense, lazy } from "react";
import "./App.css";
// import Navbar from "./comp/Navbar";

const Navbar = lazy(() => import("./comp/Navbar"));
const Footer = lazy(() => import("./comp/Footer"));
const Footer2 = lazy(() => import("./comp/Footer2"));
const Sub = lazy(() => import("./comp/Sub"));

function App() {
  return (
    <div className="App">
      {/* <Suspense fallback={<h3>please wait...</h3>}>
        <Navbar />
      </Suspense> */}

      <Suspense fallback={<h3>please wait...</h3>}>
        <Sub />
      </Suspense>

      {/* <Suspense fallback={<h3>please wait...</h3>}>
        <Footer />
      </Suspense>

      <Suspense fallback={<h3>please wait...</h3>}>
        <Footer2 />
      </Suspense> */}
    </div>
  );
}

export default App;
