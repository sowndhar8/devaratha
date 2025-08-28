import React from "react";
import img from "../img/logo.png";
import { FaArrowRight } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { nav } from "framer-motion/client";

function Footer() {
  return (
    <div className="bg-[#0D0D0D] lg:!px-40 lg:!py-10 ">
      <div className="lg:grid-cols-4 md:grid-cols-1 grid-cols-1 grid gap-4 md:!px-12 md:!py-12 !px-6 !py-6">
        <div>
          <a href ="/">
          <img src={img} alt="" className="w-[50px] h-[50px] !mb-5 " />
          <p className="text-[#D0DAF5] text-[14px] font-bold ">
            Devavratha Consultency Services
          </p>
          </a>
        </div>
        <div className="">
          <h2 className="text-[#D0DAF5] text-[16px] !pb-5">Explore</h2>
          <div>
            <a href="/">
              <h4 className="text-[#6F7481] text-[16px] !pb-2">Home</h4>
            </a>
            <a href="/Services">
              <h4 className="text-[#6F7481] text-[16px] !pb-2">Services</h4>
            </a>
            <a href="/Aboutus">
              <h4 className="text-[#6F7481] text-[16px] !pb-2">About us</h4>
            </a>
            <a href="/Contactus">
              <h4 className="text-[#6F7481] text-[16px] !pb-2">Contact us</h4>
            </a>
          </div>
        </div>
        <div className="">
          <h2 className="text-[#D0DAF5] text-[16px] !pb-5">Company</h2>
          <div className="">
            <a href="/Aboutus">
              <h4 className="text-[#6F7481] text-[16px] !pb-2">About us</h4>
            </a>
            <a href="#">
              <h4 className="text-[#6F7481] text-[16px] !pb-2">Partners</h4>
            </a>
            <a href="#">
              <h4 className="text-[#6F7481] text-[16px] !pb-2">Customers</h4>
            </a>
            <a href="#">
              <h4 className="text-[#6F7481] text-[16px] !pb-2">Contact us</h4>
            </a>
          </div>
        </div>
        <div className="bg-[#0E1014] md:!px-5 md:!py-10 !py-5 !px-5">
          <h2 className="text-[#D0DAF5]">Connect</h2>
          <div className="flex h-[50px] border-1 border-[#161829] items-center justify-between rounded-[10px] !my-5 ">
            <input
              type="text"
              placeholder="Email address"
              className="!py-1 !px-2 h-full w-full 
               focus:outline-none focus:ring-0 focus:border-transparent text-[#6F7481]"
            />
            <div className="bg-[#2956A6] w-[50px] h-[100%] flex justify-center items-center rounded-tr-[10px] rounded-br-[10px] cursor-pointer">
              <FaArrowRight color="#0D0D0D" />
            </div>
          </div>
          <p className="text-[#6F7481] text-[16px]">
            Hello, we are ABC. trying to make an effort to put the right people
            for you to get the best results. Just insight
          </p>
        </div>
      </div>
      <div className="lg:!px-12 !px-6  ">
      <div className="h-[2px] w-[100%] bg-[#18181B] md:!my-5 !my-5 "></div>
      </div>
      <div className="flex  md:!px-12 md:!py-5 justify-between items-center !px-6 !py-6 ">
        <div className="">
          <a href="">
            <span className="text-[#D0DAF5] text-[14px] !pr-4">Terms</span>
          </a>
          <a href="">
            <span className="text-[#D0DAF5] text-[14px]">Privacy</span>
          </a>
        </div>
        <div className="flex gap-4">
          <div className="w-[50px] h-[50px] border-1 border-[#212325] rounded-full flex justify-center items-center">
            <FaFacebookF color="#D0DBF4" />
          </div>
          <div className="w-[50px] h-[50px] border-1 border-[#212325] rounded-full flex justify-center items-center">
            <FaTwitter color="#D0DBF4" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
