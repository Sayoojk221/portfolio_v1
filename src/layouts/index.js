import React from "react";
import { useSelector } from "react-redux";

import { getUI } from "store/selectors";
import Hero from "components/Hero";
import About from "components/About";
import NavBar from "components/NavBar";

function Index() {

  return (
    <div className="p-3">
      <NavBar />
      <main className="mx-8">
        <Hero />
        <About />
      </main>
    </div>
  )
}

export default Index;
