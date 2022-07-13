import React from "react";

function Contact() {
  return (
    <div className="my-36 xl:my-56 lg:mx-40  text-gray   font-main">
      <div className="flex flex-col text-center items-center mx-4">
        <p className="text-mainGreen text-lg">04. What's Next ?</p>
        <p className="my-6 text-lightSlate font-bold  font-sans text-3xl sm:text-4xl lg:text-5xl">Get In Touch</p>
        <p >
          Although I’m not currently looking for any new opportunities, my inbox
          is always open. Whether you have a question or just want to say hi,
          I’ll try my best to get back to you!
        </p>
        <button className="my-14 rounded align-middle text-mainGreen font-main text-base bg-transparent py-4 px-6 border border-mainGreen hover:bg-mainGreen transition-colors duration-700 hover:bg-opacity-10">
          Say Hellow
        </button>
      </div>
    </div>
  );
}

export default Contact;
