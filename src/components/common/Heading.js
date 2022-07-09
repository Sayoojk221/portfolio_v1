import React from "react";

function Heading({title,titleCount}) {
  return (
    <div className="my-6  flex justify-start items-center font-medium text-xl lg:text-2xl">
      <span className="text-mainGreen mr-2 xl:text-lg">{titleCount}.</span>
      <span className="text-lightSlate text-lg md:text-2xl lg:text-3xl whitespace-nowrap mr-2 font-extrabold f ">
        {title}
      </span>
      <hr className="w-full md:w-2/3 bg-gray" />
    </div>
  );
}

export default Heading;
