import React from "react";
import img from "../img/logo.png";
import { FaArrowRight } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { nav } from "framer-motion/client";

function Footer() {
  return (
    <div className="bg-[#0D0D0D] lg:!px-15 md:!px-10 !px-10 lg:!py-10 ">
      <div className="lg:grid-cols-2 md:grid-cols-2 grid-cols-1 grid gap-4 md:!px-5 md:!py-12 !py-6">
        <div>
          <a href="/">
            <img src={img} alt="" className="w-[50px] h-[50px] !mb-5 " />
            <p className="text-[#D0DAF5] text-[14px] font-bold ">
              Devavratha Consultency Services
            </p>
          </a>
        </div>

        <div className="flex lg:flex-row md:flex-row flex-col gap-10 justify-evenly md:!px-5 md:!py-12 !py-6">
          <div className=" ">
            <h2 className="text-[#D0DAF5] text-[16px] !pb-5">Explore</h2>
            <div className="flex flex-col gap-2">
              <a
                href="/"
                className="relative text-[#6F7481] text-[16px] w-fit after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px]
               after:w-0 after:bg-[#2956A6] hover:text-white after:transition-all after:duration-300 hover:after:w-full"
              >
                Home
              </a>
              <a
                href="/Services"
                className="relative text-[#6F7481] text-[16px] w-fit after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px]
               after:w-0 after:bg-[#2956A6] hover:text-white after:transition-all after:duration-300 hover:after:w-full"
              >
                Services
              </a>
              <a
                href="/Aboutus"
                className="relative text-[#6F7481] text-[16px] w-fit after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] 
              after:w-0 after:bg-[#2956A6] hover:text-white after:transition-all after:duration-300 hover:after:w-full"
              >
                About us
              </a>
              <a
                href="/Contactus"
                className="relative text-[#6F7481] text-[16px] w-fit after:content-[''] after:absolute after:left-0 after:-bottom-0 after:h-[2px] 
              after:w-0 after:bg-[#2956A6] hover:text-white after:transition-all after:duration-300 hover:after:w-full"
              >
                Contact us
              </a>
            </div>
          </div>

          <div className="">
            <h2 className="text-[#D0DAF5] text-[16px] !pb-5">Loans</h2>
            <div className="flex flex-col gap-2">
              <a
                href="/GoldLoans"
                className="relative text-[#6F7481] text-[16px] w-fit after:content-[''] after:absolute after:left-0 after:-bottom-0 after:h-[2px] 
              after:w-0 after:bg-[#2956A6] hover:text-white after:transition-all after:duration-300 hover:after:w-full"
              >
                Gold Loan
              </a>
              <a
                href="/PersonalLoan"
                className="relative text-[#6F7481] text-[16px] w-fit after:content-[''] after:absolute after:left-0 after:-bottom-0 after:h-[2px] 
              after:w-0 after:bg-[#2956A6] hover:text-white after:transition-all after:duration-300 hover:after:w-full"
              >
                Personal Loan
              </a>
              <a
                href="/BusinessLoan"
                className="relative text-[#6F7481] text-[16px] w-fit after:content-[''] after:absolute after:left-0 after:-bottom-0 after:h-[2px] 
              after:w-0 after:bg-[#2956A6] hover:text-white after:transition-all after:duration-300 hover:after:w-full"
              >
                Business Loan
              </a>
              <a
                href="/MortageLoan"
                className="relative text-[#6F7481] text-[16px] w-fit after:content-[''] after:absolute after:left-0 after:-bottom-0 after:h-[2px] 
              after:w-0 after:bg-[#2956A6] hover:text-white after:transition-all after:duration-300 hover:after:w-full"
              >
                Mortage Loan
              </a>
            </div>
          </div>
          <div className="">
            <h2 className="text-[#D0DAF5] text-[16px] !pb-5">Company</h2>
            <div className="flex flex-col gap-2">
              <a
                href="/Aboutus"
                className="relative text-[#6F7481] text-[16px] w-fit after:content-[''] after:absolute after:left-0 after:-bottom-0 after:h-[2px] 
              after:w-0 after:bg-[#2956A6] hover:text-white after:transition-all after:duration-300 hover:after:w-full"
              >
                About us
              </a>
              <a
                href="#"
                className="relative text-[#6F7481] text-[16px] w-fit after:content-[''] after:absolute after:left-0 after:-bottom-0 after:h-[2px] 
              after:w-0 after:bg-[#2956A6] hover:text-white after:transition-all after:duration-300 hover:after:w-full"
              >
                Partners
              </a>
              <a
                href="#"
                className="relative text-[#6F7481] text-[16px] w-fit after:content-[''] after:absolute after:left-0 after:-bottom-0 after:h-[2px] 
              after:w-0 after:bg-[#2956A6] hover:text-white after:transition-all after:duration-300 hover:after:w-full"
              >
                Customers
              </a>
              <a
                href="#"
                className="relative text-[#6F7481] text-[16px] w-fit after:content-[''] after:absolute after:left-0 after:-bottom-0 after:h-[2px] 
              after:w-0 after:bg-[#2956A6] hover:text-white after:transition-all after:duration-300 hover:after:w-full"
              >
                Contact us
              </a>
            </div>
          </div>
          {/* <div className="bg-[#0E1014] md:!px-5 md:!py-3 !py-5 ">
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
        </div> */}

          <div>
            <h2 className="text-[#D0DAF5] text-[16px] !pb-5">Contact Us</h2>
            <ul className="!space-y-3 sm:!space-y-4">
              <li>
                <a
                  href="mailto:www.devavrathaconsultancy@gmail.com"
                  className="relative text-[#6F7481] text-[16px] w-fit after:content-[''] after:absolute after:left-0 after:-bottom-0 after:h-[2px]  
              after:w-0 after:bg-[#2956A6] hover:text-white after:transition-all after:duration-300 hover:after:w-full "
                >
                  devavrathaconsultancy@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+91 8310968313"
                  className="relative text-[#6F7481] text-[16px] w-fit after:content-[''] after:absolute after:left-0 after:-bottom-0 after:h-[2px] 
              after:w-0 after:bg-[#2956A6] hover:text-white after:transition-all after:duration-300 hover:after:w-full"
                >
                  +91 8310968313
                </a>
              </li>
              <li>
                <a
                  href="https://maps.app.goo.gl/TvLKzYiKDKixGPxz8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative text-[#6F7481] text-[16px] w-fit after:content-[''] after:absolute after:left-0 after:-bottom-0 after:h-[2px] 
                after:w-0 after:bg-[#2956A6] hover:text-white after:transition-all after:duration-300 hover:after:w-full"
                >
                  H-22, Peelamedu, HUDCO Colony,
                  <br />
                  Coimbatore, Tamil Nadu-641004
                </a>
              </li>
            </ul>
          </div>
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
