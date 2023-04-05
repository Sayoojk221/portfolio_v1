import React, { useState } from "react";
import Heading from "./common/Heading";
import { companies } from "./helper/constant";

function Experience({ sectionId }) {
  const [active, setActive] = useState(companies[0]);

  return (
    <div
      data-aos="fade-up-left"
      className="my-36 xl:my-56 min-h-fit lg:mx-40  text-gray   font-main"
    >
      <Heading title={"Where I've worked"} titleCount={"02"} />
      <div className="flex flex-col md:flex-row">
        <div className="md:mr-10">
          <ul className="flex  md:flex-col overflow-auto text-slate  text-base cursor-pointer">
            {companies.map((company, key) => (
              <li
                className={
                  active?.name === company.name
                    ? "p-4 text-mainGreen transition duration-700 ease-in-out md:mb-0 focus:bg-gray-lighter  border-b-2 md:border-l-2 md:border-b-0 border-mainGreen  "
                    : "p-4 hover:bg-gray-lighter opacity-60   hover:text-mainGreen border-b-2 md:border-l-2 md:border-b-0 border-gray  "
                }
                key={key}
                onClick={() => setActive(company)}
              >
                {company?.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="my-6 md:my-0 md:py-0  ">
          <p className="text-lightSlate xs:text-sm sm:text-base md:text-lg font-bold transition duration-700 ease-in-out">
            {active?.job}{" "}
            <a
              href={active.link}
              target="_blank"
              rel="noreferrer"
              className="text-mainGreen"
            >
              @ {active?.name}
            </a>
          </p>
          <p className="my-2 text-sm md:text-base font-extralight">
            {active?.start} - {active.end}
          </p>
          <ul className="text-sm mt-4 mx-4 md:mx-0">
            {active.roles.map((role, key) => (
              <li className="flex my-2 " key={key}>
                <span className="text-mainGreen mr-4 text-lg sm:text-xl md:text-base transition duration-700 ease-in-out">
                  ▹
                </span>
                <p className="font-extrabold">{role}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Experience;
