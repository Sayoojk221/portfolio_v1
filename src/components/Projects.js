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
      <div className="mx-2 " data-aos="zoom-in">
        <div className="rounded relative md:flex justify-center items-center  overflow-hidden  max-w-full shadow-2xl lg:shadow-none">
          <img
            alt="heyhalls"
            className="w-full md:w-7/12 h-96 md:max-h-80 opacity-10 md:opacity-100"
            src={Heyhalls}
          />
          <div className="absolute md:relative top-0 md:text-end  md:right-px p-4 sm:py-6 md:px-0 font-main font-bold">
            <p className="text-mainGreen text-2xl ">Heyhalls</p>
            <p className="my-4 md:bg-light-navy shadow-navy-shadow md:p-4 md:py-6 md:-ml-20 md:rounded-md md:shadow-lg">
              Heyhalls.com is the unique online portal that showcase the places
              for all kind of events locations in your own or at a location of
              your choice.
            </p>
            <p className="my-4 ">Python3, Django rest framework, Next js,React context </p>
            <div className="flex items-center md:justify-end ">
              <a href="https://heyhalls.com/" target="_blank" rel="noreferrer">
                <FiExternalLink className="text-gray cursor-pointer text-xl hover:text-mainGreen transition-colors duration-300 mt-2  hover:animate-bounce" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className=" my-24 mx-2 " data-aos="zoom-in-up">
        <div className="rounded relative md:flex justify-center items-center overflow-hidden  max-w-full shadow-2xl lg:shadow-none">
          <div className="absolute md:relative top-0  md:right-px p-4 sm:py-6 md:px-0 font-main font-bold">
            <p className="text-mainGreen text-2xl">Tedaps</p>
            <p className="my-4 md:bg-light-navy  md:p-4 md:py-6 md:-mr-20 md:rounded-md md:shadow-lg">
              TEDAPS brings the power of cloud computing in its engineering
              calculation modules, to build and manage your project design
              calculations in collaboration with the team
            </p>
            <p className="my-4">React Js,Redux,Tailwind CSS,Chakra UI</p>
            <div className="flex items-center">
              <a
                href="https://tedaps-landing-page.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <FiExternalLink className="text-gray cursor-pointer text-xl hover:text-mainGreen transition-colors duration-300 mt-2  hover:animate-bounce" />
              </a>
            </div>
          </div>
          <img
            alt="heyhalls"
            className="w-full md:w-7/12 h-96 md:max-h-80 opacity-10 md:opacity-100"
            src={Tedaps}
          />
        </div>
      </div>

      <div className="mx-2 " data-aos="zoom-in-down">
        <div className="rounded relative md:flex justify-center items-center  overflow-hidden  max-w-full shadow-2xl lg:shadow-none">
          <img
            alt="heyhalls"
            className="w-full md:w-7/12 h-96 md:max-h-80 opacity-10 md:opacity-100"
            src={Shades}
          />
          <div className="absolute md:relative top-0 md:text-end  md:right-px p-4 sm:py-6 md:px-0 font-main font-bold">
            <p className="text-mainGreen text-2xl ">Shades&Blinds</p>
            <p className="my-4 md:bg-light-navy shadow-navy-shadow md:p-4 md:py-6 md:-ml-20 md:rounded-md md:shadow-lg">
              Shades & Blinds LLC lead by 25 Years of experienced professionals
              in the window fashion industry. Our high-quality blinds & curtains
              offer excellent quality of stylish and made-to-measure window
              coverings at affordable prices.
            </p>
            <p className="my-4 ">HTML,CSS,Javascripts,Tailwind CSS</p>
            <div className="flex items-center md:justify-end ">
              <a
                href="https://shadesandblindsme.com/"
                target="_blank"
                rel="noreferrer"
              >
                <FiExternalLink className="text-gray cursor-pointer text-xl hover:text-mainGreen transition-colors duration-300 mt-2  hover:animate-bounce" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
