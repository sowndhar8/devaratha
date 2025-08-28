import { React, useState } from "react";
import background from "../img/background.png";
import { FaArrowRight } from "react-icons/fa";
import SipCalculator from "./sip";
import FdCalculator from "./fdCal";
import img1 from "../img/service-detail-1.png";
import img2 from "../img/Business Consulting.png";
import img3 from "../img/Rectangle 1.png";
import img4 from "../img/Rectangle 2.png";
import img5 from "../img/Rectangle 3.png";

function Services() {

  const [activeTab, setActiveTab] = useState("fd");

  return (
    <div>
      <div className="relative bg-banner2 bg-cover h-[50vh] items-center justify-enter">
        <div className="absolute top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 justify-center items-center flex flex-col">
          <h2 className="text-[#2956A6] text-[50px]">Services</h2>
          <h3 className="text-[#D8D8D8] text-[20px] text-center !py-7">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum doloreaeu fugiat nulla pariatur.
          </h3>

        </div>
      </div>


      {/* top section */}
      <section>
        <div className=" !px-20  ">
          <div className="flex">
            <div className="flex flex-col w-[30%] bg-[#F2F2F2] !p-5 !gap-2 rounded-lg !mt-10 !mb-5 ">
              <p className="text-[#2956A6] bg-white !p-4 rounded-lg  ">Fixed Deposit</p>
              <p className="text-[#2956A6] bg-white !p-4 rounded-lg">Recurring Deposit</p>
              <p className="text-[#2956A6] bg-white !p-4 rounded-lg">Gold Investment</p>
              <img src={img1} alt="" className="w-full h-fit !p-5" />
            </div>

             <div className="flex gap-6">
      {/* Sidebar */}
      <div className="w-1/3 bg-white shadow-md rounded-xl p-4 space-y-4">
        <button
          onClick={() => setActiveTab("fd")}
          className={`block w-full text-left p-2 pl-4 border-l-4 rounded-md ${
            activeTab === "fd" ? "border-blue-600 text-blue-600 font-semibold"
        : "border-transparent text-gray-600" 
          }`}
        >
          Fixed Deposit
        </button>

        <button
          onClick={() => setActiveTab("rd")}
          className={`block w-full text-left p-2 rounded-md ${
            activeTab === "rd" ? "bg-blue-600 text-white" : "bg-gray-100"
          }`}
        >
          Recurring Deposit
        </button>

        <button
          onClick={() => setActiveTab("gold")}
          className={`block w-full text-left p-2 rounded-md ${
            activeTab === "gold" ? "bg-blue-600 text-white" : "bg-gray-100"
          }`}
        >
          Gold Investment
        </button>
      </div>

      {/* Content Area */}
      <div className="w-2/3 bg-white shadow-md rounded-xl p-6">
        {activeTab === "fd" && (
          <div>
            <h2 className="text-xl font-bold mb-4">FD Calculator</h2>
            {/* 👉 Place your FD Calculator component here */}
          </div>
        )}

        {activeTab === "rd" && (
          <div>
            <h2 className="text-xl font-bold mb-4">RD Calculator</h2>
            {/* 👉 Place your RD Calculator component here */}
          </div>
        )}

        {activeTab === "gold" && (
          <div>
            <h2 className="text-xl font-bold mb-4">Gold Investment Calculator</h2>
            {/* 👉 Place your Gold Calculator component here */}
          </div>
        )}
      </div>
    </div>

            <div className="flex flex-col w-[70%] bg-white !p-5 !gap-2 rounded-lg !mt-10 !m-5 !pl-20 ">
              <img src={img2} alt="" className=" w-fit  h-[40%] place-self-center !p-5" />
              <p className="text-[#767682] !p-2 rounded-lg ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum molestiae error, itaque ea consectetur aspernatur inventore
                accusamus molestias pariatur fugit quasi vero similique quae ex maiores illo. Corporis, consequuntur harum.
              </p>
              <FdCalculator />
            </div>
          </div>
        </div>
      </section>

      {/* financial planning */}

      <section>
        <div>
          <div className='lg:!px-20 md:!px-20 !px-10 !py-20 grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1  justify-evenly items-center  '>
            <div className=' '>
              <img
                src={img3}
                alt=""
                className=' w-fit place-self-center '
              />
            </div>
            <div className='flex justify-center items-center '>
              <div>

                <h1 className="relative inline-block lg:text-[20px] md:text-[20px] text-[18px] font-semibold text-[#2956A6] ">
                  Financial Planning
                  <span className="absolute left-0 bottom-1 w-full h-[30%] bg-[#DFAE51] -z-10"></span>
                </h1>

                <h2 className='lg:text-[50px] md:text-[35px] text-[25px] font-bold  text-black '>
                  Plan today for a <br /> in <span className='text-[#2956A6]'> stronger tomorrow.</span>
                </h2>
                <p className='lg:text-[18px] md:text-[18px] text-[16px]  text-[#666666] lg:leading-10 md:leading-8 leading-8 lg:w-[80%] md:w-[80%] w-full  text-justify  '>
                  we understand the challenges and complexities that businesses face in today's dynamic marketplace.
                  That's why we offer a comprehensive suite of consulting services.
                </p>
                <div className='!mt-5 '>
                  <button className=" flex items-center rounded-4xl bg-[#2956A6] text-white font-semibold text-[16px] !px-5 !py-2 cursor-pointer">
                    Know More
                    <FaArrowRight color="black" size={30} className="!ml-2 bg-white rounded-full !p-2 " />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Advisory */}

      <section>
        <div>
          <div className='lg:!px-20 md:!px-20 !px-10 !py-20 grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1  justify-evenly items-center  '>
            <div className='flex justify-center items-center '>
              <div>

                <h1 className="relative inline-block lg:text-[20px] md:text-[20px] text-[18px] font-semibold text-[#2956A6] ">
                  Investment Advisory
                  <span className="absolute left-0 bottom-1 w-full h-[30%] bg-[#DFAE51] -z-10"></span>
                </h1>

                <h2 className='lg:text-[50px] md:text-[35px] text-[25px] font-bold  text-black '>
                  Advisory that grows<br /> with <span className='text-[#2956A6]'> your ambitions.</span>
                </h2>
                <p className='lg:text-[18px] md:text-[18px] text-[16px]  text-[#666666] lg:leading-10 md:leading-8 leading-8 lg:w-[80%] md:w-[80%] w-full  text-justify  '>
                  we understand the challenges and complexities that businesses face in today's dynamic marketplace.
                  That's why we offer a comprehensive suite of consulting services.
                </p>
                <div className='!mt-5 '>
                  <button className=" flex items-center rounded-4xl bg-[#2956A6] text-white font-semibold text-[16px] !px-5 !py-2 cursor-pointer">
                    Know More
                    <FaArrowRight color="black" size={30} className="!ml-2 bg-white rounded-full !p-2 " />
                  </button>
                </div>
              </div>
            </div>
            <div className=' '>
              <img
                src={img4}
                alt=""
                className=' w-fit place-self-center '
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tax & compliance strategy */}

      <section>
        <div>
          <div className='lg:!px-20 md:!px-20 !px-10 !py-20 grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1  justify-evenly items-center  '>
            <div className=' '>
              <img
                src={img5}
                alt=""
                className=' w-fit place-self-center '
              />
            </div>
            <div className='flex justify-center items-center '>
              <div>

                <h1 className="relative inline-block lg:text-[20px] md:text-[20px] text-[18px] font-semibold text-[#2956A6] ">
                  Tax & compliance strategy
                  <span className="absolute left-0 bottom-1 w-full h-[30%] bg-[#DFAE51] -z-10"></span>
                </h1>

                <h2 className='lg:text-[50px] md:text-[35px] text-[25px] font-bold  text-black '>
                  Right strategy,  <br /> <span className='text-[#2956A6]'> risk-free growth.</span>
                </h2>
                <p className='lg:text-[18px] md:text-[18px] text-[16px]  text-[#666666] lg:leading-10 md:leading-8 leading-8 lg:w-[80%] md:w-[80%] w-full  text-justify  '>
                  we understand the challenges and complexities that businesses face in today's dynamic marketplace.
                  That's why we offer a comprehensive suite of consulting services.
                </p>
                <div className='!mt-5 '>
                  <button className=" flex items-center rounded-4xl bg-[#2956A6] text-white font-semibold text-[16px] !px-5 !py-2 cursor-pointer">
                    Know More
                    <FaArrowRight color="black" size={30} className="!ml-2 bg-white rounded-full !p-2 " />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>

  );
}

export default Services;

//  <SipCalculator  />