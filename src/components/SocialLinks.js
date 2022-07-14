import React from "react";
import { FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
function SocialLinks() {
  const iconLists = [
    { Icon: FiGithub, link: "https://github.com/Sayoojk221" },
    { Icon: FaLinkedinIn, link: "https://www.linkedin.com/in/sayooj-k-627462188/" },
    { Icon: FaInstagram, link: "#" },
    { Icon: FaFacebookF, link: "#" },
  ];
  return (
    <div className=" text-gray fixed bottom-px ">
      <div className="hidden lg:visible lg:flex flex-col ">
        <ul className="sideContainer">
          {iconLists.map((Item, key) => (
            <li key={key}>
              <a href={Item.link} target="_blank" rel="noreferrer">
                <Item.Icon
                  size={"24px"}
                  className="text-gray cursor-pointer hover:text-mainGreen transition-colors duration-300 my-6 hover:animate-bounce"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SocialLinks;
