import React from "react";

const MenuItem = (props) => {
  return (
    <div className="sm:w-[100px] md:w-[200px] lg:w-[285px] lg:mx-2 rounded-md overflow-hidden mt-6 border-[1px] hover:shadow-md duration-200 cursor-pointer">
      <img src={props.img} alt="dish" />
      <h1 className="text-center pb-2 mt-2 font-semibold text-green">
        {props.title}
      </h1>
    </div>
  );
};

export default MenuItem;
