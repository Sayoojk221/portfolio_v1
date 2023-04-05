import React from "react";
import Heading from "./common/Heading";
import { FiExternalLink } from "react-icons/fi";
import { workedProjects } from "./helper/constant";

//assets
import "./assets/styles.scss";

function Projects() {
  const rotate = (index,className) => index  % 2 !== 0 ? className : ""
  return (
    <div className="my-20 md:my-32 xl:my-40 text-gray lg:mx-8  font-main shadow-navy-shadow">
      <Heading title={"Something I've worked "} titleCount="03" />
      {workedProjects.map((project,index) => (
        <div
          data-aos="zoom-in-up"
          key={project.name}
          className="project_wrapper my-24 mx-2 rounded relative md:flex justify-center items-center overflow-hidden  max-w-full shadow-2xl lg:shadow-none"
        >
          <img
            alt="heyhalls"
            className="w-full md:w-7/12 h-96 md:max-h-80 opacity-10 md:opacity-100 rounded-sm"
            src={project.imagePath}
          />
          <div className={`${rotate(index,'rotate_content')} absolute md:relative top-0  md:right-px p-4 sm:py-6 md:px-0 font-main font-bold`}>
            <p className="text-mainGreen text-2xl">{project.name}</p>
            <p className="my-4 md:bg-light-navy  md:p-4 md:py-6 md:-mr-20 md:rounded-md md:shadow-lg reduce_sizing">
              {project.description}
            </p>
            <p className="my-4">{project.subTile}</p>
            <div className="flex items-center">
              <a href={project.link} target="_blank" rel="noreferrer">
                <FiExternalLink className="text-gray cursor-pointer text-xl hover:text-mainGreen transition-colors duration-300 mt-2  hover:animate-bounce" />
              </a>
            </div>
          </div>
          
        </div>
      ))}
    </div>
  );
}

export default Projects;
