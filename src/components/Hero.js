import React from "react";
import NavBar from "./NavBar";

function Hero() {
  return (
    <header>
      <div className="hero__content  my-14">
        <div className="hero__section_one font-main">
          <p className="text-mainGreen  text-lg">Hi, my name is</p>
          <div className="my-4 text-lightSlate ">
            <p className=" text-4xl font-bold my-4">Sayooj Keloth</p>
            <p className="text-3xl text-slate tracking-widest font-sans font-bold w-11/12 ">
              l build things for the web
            </p>
          </div>
        </div>
        <div className="hero__section_two my-8">
          <p className=" text-slate">
            Experienced Full stack python developer adept in all stages of
            advanced web development. Knowledgeable in user interface, testing,
            and debugging processes. Able to effectively self-manage during
            independent projects, as well as collaborate as part of a productive
            team.
          </p>
          <button className="my-14 text-mainGreen font-main text-base bg-transparent py-4 px-6 border border-mainGreen hover:bg-mainGreen transition-colors duration-700 hover:bg-opacity-10">
            Check out my resume
          </button>
        </div>
      </div>
    </header>
  );
}

export default Hero;
