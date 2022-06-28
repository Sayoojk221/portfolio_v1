import React from "react";
import { useSelector } from "react-redux";

import { getUI } from "store/selectors";
import Hero from "components/Hero";
import About from "components/About";

function Index() {

  return (
    <>
      <Hero />
      <About />
    </>
  )
}

export default Index;
