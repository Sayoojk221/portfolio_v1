import React from "react";
import { FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
function SocialLinks() {
  const iconLists = [
    { Icon: FiGithub },
    { Icon: FaLinkedinIn },
    { Icon: FaInstagram },
    { Icon: FaFacebookF },
  ];
  return (
    <div className=" text-gray fixed bottom-px ">
      <div className="hidden lg:visible lg:flex flex-col ">
        <ul className="sideContainer">
          {iconLists.map((Item,key) => (
            <li key={key}>
              <Item.Icon
                size={"24px"}
                className="text-gray cursor-pointer hover:text-mainGreen transition-colors duration-300 my-6 hover:animate-bounce"
              />
            </li>
          ))}
          
        </ul>
      </div>
    </div>
  );
}

export default SocialLinks;
