import React from "react";
import { useSelector } from "react-redux";

import { getUI } from "store/selectors";

import Hero from "components/Hero";
import About from "components/About";
import NavBar from "components/NavBar";
import SocialLinks from "components/SocialLinks";
import Email from "components/Email";
import Experience from "components/Experience";
import Projects from "components/Projects";
import Contact from "components/Contact";
import Footer from "components/Footer";

function Index() {

  return (
    <div className="p-2 md:p-6 lg:p-8">
      <NavBar />
      <SocialLinks />
      <Email />
      <main className="mx-8 md:mx-auto md:max-w-2xl lg:max-w-4xl xl:max-w-5xl">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default Index;
