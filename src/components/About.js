import React from "react";

function About() {
  return (
    <div className="my-20 flex flex-col md:flex-row">
      <div className=" text-gray">
        <div className="my-6  flex justify-start items-center font-semibold ">
          <span className="text-mainGreen mr-2">01.</span>
          <span className="text-lightSlate whitespace-nowrap mr-2  text-xl">
            About me
          </span>
          <hr className="w-full" />
        </div>
        <p>
          Hello! My name is Brittany and I enjoy creating things that live on
          the internet. My interest in web development started back in 2012 when
          I decided to try editing custom Tumblr themes — turns out hacking
          together a custom reblog button taught me a lot about HTML & CSS!
        </p>
        <p className="my-6">
          Fast-forward to today, and I’ve had the privilege of working at{" "}
          <span className="text-mainGreen font-bold text-opacity-90 hover:border-b-2 hover:border-b-mainGreen">
            an advertising agency, a start-up,
          </span>{" "}
          <br />
          <span className="text-mainGreen font-bold hover:border-b-2 hover:border-b-mainGreen">
            a huge corporation.
          </span>{" "}
          and <br />
          <span className="text-mainGreen font-bold hover:border-b-2 hover:border-b-mainGreen">
            a student-led design studio.
          </span>{" "}
          My main focus these <br />
          days is building accessible, inclusive products and digital
          experiences at Upstatement for a variety of clients.
        </p>
        <p className="my-4">
          Here are a few technologies I’ve been working with recently:
        </p>
        <div className="grid grid-cols-2 my-8 mx-2">
          <ul className="skills">
            <li>Javascript (ES6+)</li>
            <li>Python</li>
            <li>React Js</li>
          </ul>
          <ul className="skills">
            <li>Django 3</li>
            <li>Figma</li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-7/12  pb-4 pr-4  border-b-2 border-r-2  border-mainGreen">
          <img
            src="profile.jpg"
            className="max-w-full h-auto  shadow-xl rounded align-middle "
          />
        </div>
      </div>
    </div>
  );
}

export default About;
