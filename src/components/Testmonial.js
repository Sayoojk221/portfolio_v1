import React from "react";
import SectionHeader from "./common/SectionHeader";

function Testmonial() {
  return (
    <div className="my-20 text-gray">
      <SectionHeader title={'Testimonial'} titleCount="02"/>
      <div className="m-8 flex flex-col items-center md:mx-40">
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
      <div className="m-8 flex flex-col items-center md:mx-40">
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
