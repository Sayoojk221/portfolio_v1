import React from "react";
import Heading from "./common/Heading";

function About() {
  return (
    <div className="my-20 md:my-32 xl:my-40 text-gray lg:mx-8  font-main flex flex-col items-center md:flex-row md:items-start">
      <div className="flex-1 text-base">
        <Heading title={'About me'} titleCount={'01'}/>
        <p className="max-w-xl ">
          Hello! My name is Brittany and I enjoy creating things that live on
          the internet. My interest in web development started back in 2012 when
          I decided to try editing custom Tumblr themes — turns out hacking
          together a custom reblog button taught me a lot about HTML & CSS!
        </p>
        <p className="my-6 max-w-xl">
          Fast-forward to today, and I’ve had the privilege of working at{" "}
          <span className="text-mainGreen font-bold text-opacity-90 hover:border-b-2 hover:border-b-mainGreen">
            an advertising agency, a start-up,
          </span>{" "}
          
          <span className="text-mainGreen font-bold hover:border-b-2 hover:border-b-mainGreen">
            a huge corporation.
          </span>{" "}
          and 
          <span className="text-mainGreen font-bold hover:border-b-2 hover:border-b-mainGreen">
            a student-led design studio.
          </span>{" "}
          My main focus these 
          days is building accessible, inclusive products and digital
          experiences at Upstatement for a variety of clients.
        </p>
        <p className="my-4">
          Here are a few technologies I’ve been working with recently:
        </p>
        <div className="grid grid-cols-2 text-sm sm:text-base my-8 mx-2">
          <ul className="skills">
            <li>Javascript (ES6+)</li>
            <li>Python</li>
            <li>React Js</li>
          </ul>
          <ul className="skills">
            <li>Django 3</li>
            <li>Tailwind CSS</li>
          </ul>
        </div>
      </div>
      <div className="ml-0 my-4 md:ml-8 md:my-20">
        <img
          src="profile.jpg"
          className="w-56 h-56 md:w-80 md:h-80 pb-4 pr-4  shadow-xl rounded align-middle  border-b-2 border-r-2  border-mainGreen"
        />
      </div>
    </div>
  );
}

export default About;
