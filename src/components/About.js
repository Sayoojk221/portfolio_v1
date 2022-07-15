import React from "react";
import Heading from "./common/Heading";

function About() {
  return (
    <div data-aos="fade-up-right" className="my-20 md:my-32 xl:my-40 text-gray lg:mx-8  font-main flex flex-col items-center md:flex-row md:items-start">
      <div className="flex-1 text-base">
        <Heading title={"About me"} titleCount={"01"} />
        <p className="max-w-xl ">
          Hey, I'm Sayooj K living in India. I enjoy converting reliable ideas
          into a working website. My web development journey started back in
          2020 when I joined a small startup company{" "}
          <a
            href="https://www.btrac.in/"
            target={"_blank"}
            rel="noreferrer"
            className="text-mainGreen font-bold text-opacity-90 hover:border-b-2 hover:border-b-mainGreen"
          >
            Btrac
          </a>{" "}
          as a Junior Web developer. There I had learned basic concepts for
          creating functional website using Html, CSS, and Javascript.
          {/* <a href="https://www.teacheron.com/tutor-profile/2b0H?r=2b0H" target="_blank" style={{display:'inline-block'}}><img src="https://www.teacheron.com/resources/assets/img/badges/viewMyProfile.png" width={120} height={50} /></a> */}
        </p>
        <p className="my-6 max-w-xl">
          Recently I got 14+ client reviews on one of the best{" "}
          <a
            href="https://www.teacheron.com"
            target={"_blank"}
            rel="noreferrer"
            className="text-mainGreen font-bold text-opacity-90 hover:border-b-2 hover:border-b-mainGreen"
          >
            freelancing websites teacherson
          </a>
          .I helped Two startups and more than 50+ students with their
          professional and academic projects.
        </p>
        <p className="my-4">
          Here are a few technologies I’ve been working with recently:
        </p>
        <div className="grid grid-cols-2 text-sm sm:text-base my-8 mx-2">
          <ul className="skills">
            <li>Javascript</li>
            <li>React Js</li>
            <li>Redux / Context</li>
            <li>Tailwind CSS</li>
            
          </ul>
          <ul className="skills">
            <li>Python 3</li>
            <li>Django Rest Framework</li>
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
