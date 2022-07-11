import React from "react";

function Hero() {
  return (
    <header>
      <div className="my-14 md:my-60 lg:my-12">
        <div className="font-main">
          <p className="text-mainGreen  text-lg">Hi, my name is</p>
          <div className="my-4 md:my-2 text-lightSlate ">
            <p className="xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl  font-extrabold my-4 md:my-0">
              Sayooj Keloth.
            </p>
            <p className="xs:text-3xl md:text-4xl lg:text-5xl  xl:text-6xl lg:whitespace-nowrap text-slate  font-sans font-bold w-11/12 lg:w-full ">
              l build things for the web.
            </p>
          </div>
        </div>
        <div className=" my-8 md:my-4">
          <p className=" text-slate w-full lg:w-2/3">
            Experienced Full stack python developer adept in all stages of
            advanced web development. Knowledgeable in user interface, testing,
            and debugging processes. Able to effectively self-manage during
            independent projects, as well as collaborate as part of a productive
            team.
          </p>
          <button className="my-14 text-mainGreen font-main text-base bg-transparent py-4 px-6 border border-mainGreen hover:bg-mainGreen transition-colors duration-700 hover:bg-opacity-10">
            Check out profile
          </button>
        </div>
      </div>
    </header>
  );
}

export default Hero;
