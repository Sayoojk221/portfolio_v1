import React from "react";

function Hero() {
  return (
    <div className="p-2">
      <header>
        <nav className="flex justify-between items-center px-2 h-12">
          <div className="p-0">
            <img
              width={50}
              height={50}
              src="https://plugins.jetbrains.com/files/10044/181514/icon/pluginIcon.png"
            />
          </div>
          <div className="ham_box mt-4 mx-2">
            <div className="ham_box_inner"></div>
          </div>
        </nav>
      </header>
      <div className="hero__content mx-10 my-14">
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
        </div>
      </div>
    </div>
  );
}

export default Hero;
