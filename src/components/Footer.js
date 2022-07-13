import React from "react";
import { FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

function Footer() {
  const iconLists = [
    { Icon: FiGithub },
    { Icon: FaLinkedinIn },
    { Icon: FaInstagram },
    { Icon: FaFacebookF },
  ];
  return (
    <div className="my-8 md:hidden">
      <ul className="flex justify-center">
        {iconLists.map((Item, key) => (
          <li key={key}>
            <Item.Icon
              size={"24px"}
              className="text-gray cursor-pointer hover:text-mainGreen transition-colors duration-300 mx-4 hover:animate-bounce"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Footer;
