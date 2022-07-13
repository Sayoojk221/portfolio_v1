import React from "react";
import Heading from "./common/Heading";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import Heyhalls from "images/heyhalls.PNG";
import Tedaps from "images/tedaps.PNG";
import Shades from "images/shades.PNG";

function Projects() {
  return (
    <div className="my-20 md:my-32 xl:my-40 text-gray lg:mx-8  font-main shadow-navy-shadow">
      <Heading title={"Something I've worked "} titleCount="03" />
      <div className="mx-2 ">
        <div className="rounded relative md:flex justify-center items-center  overflow-hidden  max-w-full shadow-2xl lg:shadow-none">
          <img
            alt="heyhalls"
            className="w-full md:w-7/12 h-96 md:max-h-80 opacity-10 md:opacity-100"
            src={Heyhalls}
          />
          <div className="absolute md:relative top-0 md:text-end  md:right-px p-4 sm:py-6 md:px-0 font-main font-bold">
            <p className="text-mainGreen text-2xl ">Heyhalls</p>
            <p className="my-4 md:bg-light-navy shadow-navy-shadow md:p-4 md:py-6 md:-ml-20 md:rounded-md md:shadow-lg">
              A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm,
              and more. Available on Visual Studio Marketplace, Package Control,
              Atom Package Manager, and npm.
            </p>
            <p className="my-4 ">
              VS Code Sublime Text Atom iTerm2 Hyper
            </p>
            <div className="flex items-center md:justify-end ">
              <FiExternalLink className="text-gray cursor-pointer text-xl hover:text-mainGreen transition-colors duration-300 mt-2 ml-4 hover:animate-bounce" />
            </div>
          </div>
        </div>
      </div>

      <div className=" my-24 mx-2 ">
        <div className="rounded relative md:flex justify-center items-center overflow-hidden  max-w-full shadow-2xl lg:shadow-none">
          <div className="absolute md:relative top-0  md:right-px p-4 sm:py-6 md:px-0 font-main font-bold">
            <p className="text-mainGreen text-2xl">Tedaps</p>
            <p className="my-4 md:bg-light-navy  md:p-4 md:py-6 md:-mr-20 md:rounded-md md:shadow-lg">
              A web app for visualizing personalized Spotify data. View your top
              artists, top tracks, recently played tracks, and detailed audio
              information about each track. Create and save new playlists of
              recommended tracks based on your existing playlists and more.
            </p>
            <p className="my-4">VS Code Sublime Text Atom iTerm2 Hyper</p>
            <div className="flex items-center">
              <FiExternalLink className="text-gray cursor-pointer text-xl hover:text-mainGreen transition-colors duration-300 mt-2 ml-4 hover:animate-bounce" />
            </div>
          </div>
          <img
            alt="heyhalls"
            className="w-full md:w-7/12 h-96 md:max-h-80 opacity-10 md:opacity-100"
            src={Tedaps}
          />
        </div>
      </div>

      <div className="mx-2 ">
        <div className="rounded relative md:flex justify-center items-center  overflow-hidden  max-w-full shadow-2xl lg:shadow-none">
          <img
            alt="heyhalls"
            className="w-full md:w-7/12 h-96 md:max-h-80 opacity-10 md:opacity-100"
            src={Shades}
          />
          <div className="absolute md:relative top-0 md:text-end  md:right-px p-4 sm:py-6 md:px-0 font-main font-bold">
            <p className="text-mainGreen text-2xl ">Shades&Blinds</p>
            <p className="my-4 md:bg-light-navy shadow-navy-shadow md:p-4 md:py-6 md:-ml-20 md:rounded-md md:shadow-lg">
              A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm,
              and more. Available on Visual Studio Marketplace, Package Control,
              Atom Package Manager, and npm.
            </p>
            <p className="my-4 ">
              VS Code Sublime Text Atom iTerm2 Hyper
            </p>
            <div className="flex items-center md:justify-end ">
              <FiExternalLink className="text-gray cursor-pointer text-xl hover:text-mainGreen transition-colors duration-300 mt-2 ml-4 hover:animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
