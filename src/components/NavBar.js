import React from "react";
import Resume from 'images/resume.pdf'

function NavBar() {
  const navItems = ["about", "experience", "work", "contact"];

  return (
    <nav className="flex shadow-4xl justify-between items-center px-2 h-12">
      <div className="p-0" >
        <img
          width={50}
          height={50}
          src="https://plugins.jetbrains.com/files/10044/181514/icon/pluginIcon.png"
        />
      </div>
      <div className="md:hidden ham_box mt-4 mx-2">
        <div className="ham_box_inner"></div>
      </div>
      <div className="hidden md:visible md:flex  text-mainGreen font-main  " data-aos="fade-right">
        <ul className="flex justify-center items-center">
          {navItems.map((nav, key) => (
            <li className="mx-3 capitalize" key={key} >
              <span className="font-medium text-base">0{key + 1}.</span>
              <span className="text-gray font-bold mx-1 cursor-pointer hover:text-mainGreen transition-colors duration-300">
                <a href={'#'+nav} >{nav}</a>
              </span>
            </li>
          ))}
          <a href={Resume}  className="mx-3 px-4 py-2 rounded border border-mainGreen hover:bg-mainGreen focus:bg-mainGreen transition-colors duration-700 hover:bg-opacity-10 focus:bg-opacity-10">
            Resume
          </a>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
