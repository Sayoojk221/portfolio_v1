import React from "react";
import { useSelector } from "react-redux";

import { getUI } from "store/selectors";
import Hero from "components/Hero";
import About from "components/About";
import NavBar from "components/NavBar";
import Testmonial from "components/Testmonial";

function Index() {

  return (
    <div className="p-3">
      <NavBar />
      <main className="mx-8 md:mx-16 lg:mx-40 xl:mx-72">
        <Hero />
        <About />
        {/* <Testmonial /> */}
      </main>
    </div>
  )
}

export default Index;
