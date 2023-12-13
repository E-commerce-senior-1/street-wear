import React from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaUser } from "react-icons/fa";
import ExploreDropDown from "./ExploreDropDown";
import DropDownProfile from "./DropDownProfile";
const NavBar = () => {
  return (
    <header className="navbar flex justify-evenly md:flex-row">
      <div className="flex items-center mt-4 md:mt-0 mb-4 md:mb-0 md:ml-4">
        <Link
          to={"/"}
          className="[font-family:'SF_Pro_Display-Semibold',Helvetica] font-normal text-white text-2xl md:text-4xl tracking-[0] leading-[normal] whitespace-nowrap"
        >
          Logo
        </Link>
      </div>

      <div className="relative ml-5 md:ml-10 md:mr-12">
        <input
          type="text"
          placeholder="Search Items, Fashion, Collection and Users"
          className="w-full md:w-[390px] h-[36px] sm:h-[48px] rounded-[18px] border-[0.5px] border-solid border-[#ffffff80] bg-transparent pl-10 pr-8 text-white"
        />
        <FaSearch className="text-white absolute right-3 top-3.5" />
      </div>

      <div className="flex items-center mt-4 md:mt-0 ml-4 md:ml-4 md:mr-4">
        <Link
          to={"/home"}
          className="[font-family:'SF_Pro_Display-Semibold',Helvetica] font-normal text-white text-base md:text-lg tracking-[0] leading-[normal] whitespace-nowrap"
        >
          Home
        </Link>
      </div>
      
      <div className="flex items-center mt-4 md:mt-0 ml-4 md:ml-4 md:mr-4 ">
        <ExploreDropDown />
      
      </div>
      <div className="flex items-center mt-4 md:mt-0 ml-4 md:ml-4 md:mr-4">
        <Link
          to={"/PeronalCollection"}
          className="[font-family:'SF_Pro_Display-Semibold',Helvetica] font-normal text-white text-base md:text-lg tracking-[0] leading-[normal] whitespace-nowrap"
        >
          Personal Collection
        </Link>
      </div>
      <div className="flex items-center mt-4 md:mt-0 ml-4 md:ml-4 md:mr-4">
        <Link
          to={"/Drops"}
          className="[font-family:'SF_Pro_Display-Semibold',Helvetica] font-normal text-white text-base md:text-lg tracking-[0] leading-[normal] whitespace-nowrap"
        >
          Drops
        </Link>
      </div>
      <div className="flex items-center mt-4 md:mt-0 ml-4 md:ml-4 md:mr-4">
        <Link
          to={"/Aboutus"}
          className="[font-family:'SF_Pro_Display-Semibold',Helvetica] font-normal text-white text-base md:text-lg tracking-[0] leading-[normal] whitespace-nowrap"
        >
          More
        </Link>
      </div>
      <div className="flex items-center mt-4 md:mt-0 ml-4 md:ml-4 md:mr-4">
        <DropDownProfile   />
      </div>
     
    </header>
  );
};

export default NavBar;

