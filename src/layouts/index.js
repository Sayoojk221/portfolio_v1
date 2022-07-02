import React from "react";
import { useSelector } from "react-redux";

import { getUI } from "store/selectors";
import Hero from "components/Hero";
import About from "components/About";
import NavBar from "components/NavBar";
import Testmonial from "components/Testmonial";
import SocialLinks from "components/SocialLinks";
import Email from "components/Email";

function Index() {

  return (
    <div className="p-4 md:p-6 lg:p-10">
      <NavBar />
      <SocialLinks />
      <Email />
      <main className="mx-8 md:mx-auto md:max-w-2xl lg:max-w-4xl xl:max-w-5xl">
        <Hero />
        <About />
        <Testmonial />
      </main>
    </div>
  )
}

export default Index;
