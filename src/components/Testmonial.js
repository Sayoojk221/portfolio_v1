import React from "react";

function Testmonial() {
  return (
    <div className="my-20 text-gray">
      <div className="my-6  flex justify-start items-center font-semibold ">
        <span className="text-mainGreen mr-2">02.</span>
        <span className="text-lightSlate whitespace-nowrap mr-2  text-xl">
          Testmonial
        </span>
        <hr className="w-full" />
      </div>
      <div className="m-8 flex flex-col items-center">
        <img className="w-20 h-20 rounded-full" src="profile.jpg" />
        <div className="my-2 text-center">
          <p>
            "Sayooj helped me with my python project. He is a fast worker and he
            proceeded to submission before the due date. And if you want to
            modify anything in the project he can do."
          </p>
          <p className="my-2 text-mainGreen">Mariam</p>
          <p>Client</p>
        </div>
      </div>

    </div>
  );
}

export default Testmonial;
