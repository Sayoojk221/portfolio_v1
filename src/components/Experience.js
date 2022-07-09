import React, { useState } from "react";
import Heading from "./common/Heading";

function Experience() {
  const companies = [
    { name: "Freelance",job:'Full stack developer' },
    { name: "Execomusa",job:'Full stack developer' },
    { name: "TeacherOn",job:'Python tutor' },
    { name: "Btrac",job:'Full stack developer' },
  ];
  const [active, setActive] = useState(companies[0]);
  
  return (
    <div className="my-36 xl:my-44 mx-4  lg:mx-40  text-gray   font-main">
      <Heading title={"Where I've worked"} titleCount={"02"} />
      <div className="flex flex-col md:flex-row">
        <div className="md:mr-10">
          <ul className="flex  md:flex-col overflow-auto text-slate  text-base cursor-pointer">
            {companies.map((company, key) => (
              <li
                className={
                  active?.name === company.name
                    ? "p-4 text-mainGreen mb-1 md:mb-0 focus:bg-gray-lighter  border-b-2 md:border-l-2 md:border-b-0 border-mainGreen  "
                    : "p-4 hover:bg-gray-lighter opacity-60 hover:text-mainGreen border-b-2 md:border-l-2 md:border-b-0 border-gray  "
                }
                key={key}
                onClick={() => setActive(company)}
              >
                {company?.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="my-6 md:my-0 md:py-0 ">
          <p className="text-lightSlate text-lg font-bold">
            {active?.job}{" "}
            <a href="#" className="text-mainGreen">
              @ {active?.name}
            </a>
          </p>
          <p className="my-2 text-base font-extralight">January - April 2002</p>
          <ul className="text-sm mt-4 ">
            <li className="flex my-2 ">
              <span className="text-mainGreen mr-4 text-xl md:text-base">▹</span>
              <p className="font-extrabold">
                Write modern, performant, maintainable code for a diverse array
                of client and internal projects
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Experience;
