import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="h-[4.5rem] w-screen px-2 sm:text-[10px] md:text-[12px] lg:text-[16px] lg:px-[350px] z-10 bg-white flex items-center justify-between font-roboto font-semibold fixed top-0 left-0 shadow-md">
      <a href="/">
        <img
          className="sm:w-[50px] md:w-[100px] lg:w-[120px]"
          src="https://patternlib-all.prod.external.eu-tm-prod.vorwerk-digital.com/logo_thermomix-647b6c2b12e9c4521859a52248f64587.svg"
          alt="logo"
        />
      </a>
      <div className="flex items-center gap-6 text-green ">
        <NavLink
          to="/"
          className="relative before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-[100%] hover:before:bg-litegreen"
        >
          Odkrywaj
        </NavLink>
        <NavLink
          to="/abonament"
          className="relative before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-[100%] hover:before:bg-litegreen"
        >
          Abonament
        </NavLink>
        <NavLink
          to="/pomoc"
          className="relative before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-[100%] hover:before:bg-litegreen"
        >
          Pomoc
        </NavLink>
      </div>
      <div className="px-4 border-l-[1px] border-gray-300">
        <a href="/recipes">
          <BiSearchAlt2 className="sm:text-[12px] md:text-[14px] lg:text-[18px]   hover:text-litegreen" />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
