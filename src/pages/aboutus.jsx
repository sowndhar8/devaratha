import React from "react";
import background from "../img/background.png";
import { FaArrowRight } from "react-icons/fa";

function Aboutus() {
  return (
    <div>
      <div className="w-full h-full ">
        <img src={background} alt="" className="w-full h-[100%]" />
        <div className="absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 justify-center items-center flex flex-col">
          <h2 className="text-[#2956A6] text-[50px]">About Us</h2>
          <h3 className="text-[#D8D8D8] text-[20px] text-center !py-7">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum doloreaeu fugiat nulla pariatur.
          </h3>
          <div className="bg-[#FFFFFF] flex !p-3 rounded-[30px] cursor-pointer">
            <span className="flex items-center gap-2">
              Home
              <FaArrowRight />
              <span className="text-[#2956A6]">About Us</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;

