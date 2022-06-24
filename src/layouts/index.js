import React from "react";
import { useSelector } from "react-redux";

import { getUI } from "store/selectors";
import Hero from "components/Hero";

function Index() {

  return (
    <>
      <Hero />
    </>
  )
}

export default Index;
