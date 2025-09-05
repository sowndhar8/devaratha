import { React, useState, useRef, useEffect } from "react";
import background from "../img/background.png";
import { FaArrowRight } from "react-icons/fa";
import RdCalculator from "./rd";
import FdCalculator from "./fdCal";
import img1 from "../img/service-detail-1.png";
import img2 from "../img/Business Consulting.png";
import img3 from "../img/Rectangle 1.png";
import img4 from "../img/Rectangle 2.png";
import img5 from "../img/Rectangle 3.png";
import GoldGraph from "./components/goldGraph";
import { MdLocalPhone } from "react-icons/md";

function Services() {
  const [activeTab, setActiveTab] = useState("fd");
  
  // Refs for the sections we want to animate
  const financialPlanningRef = useRef(null);
  const investmentAdvisoryRef = useRef(null);
  const taxComplianceRef = useRef(null);
  
  // State to track which sections are visible
  const [isVisible, setIsVisible] = useState({
    financialPlanning: false,
    investmentAdvisory: false,
    taxCompliance: false
  });

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2, // Trigger when 20% of the element is visible
      rootMargin: '0px 0px -10% 0px'
    };
    
    const observers = [];
    
    const handleIntersect = (entries, observerName) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(prev => ({
            ...prev,
            [observerName]: true
          }));
        }else {
          // Reset the animation when element leaves viewport
          setIsVisible(prev => ({
            ...prev,
            [observerName]: false
          }));
        }
      });
    };
    
    // Create separate observers for each section
    if (financialPlanningRef.current) {
      const observer = new IntersectionObserver(
        (entries) => handleIntersect(entries, 'financialPlanning'), 
        observerOptions
      );
      observer.observe(financialPlanningRef.current);
      observers.push(observer);
    }
    
    if (investmentAdvisoryRef.current) {
      const observer = new IntersectionObserver(
        (entries) => handleIntersect(entries, 'investmentAdvisory'), 
        observerOptions
      );
      observer.observe(investmentAdvisoryRef.current);
      observers.push(observer);
    }
    
    if (taxComplianceRef.current) {
      const observer = new IntersectionObserver(
        (entries) => handleIntersect(entries, 'taxCompliance'), 
        observerOptions
      );
      observer.observe(taxComplianceRef.current);
      observers.push(observer);
    }
    
    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);

  return (
    <div>
      <div className="relative bg-banner2 bg-cover h-[50vh] items-center justify-enter">
        <div className="absolute lg:top-[50%] md:top-[50%] top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 justify-center items-center flex flex-col">
          <h2 className="text-[#2956A6] lg:text-[50px] md:text-[50px] text-[35px] text-center">Services</h2>
          <h3 className="text-[#D8D8D8] lg:text-[20px] md:text-[18px] text-[16px] text-center tracking-wider !py-4 w-full">
            Explore our wide range of financial services designed to secure, grow, and manage your
            wealth. 
          </h3>
        </div>
      </div>

      {/* top section */}
      <section>
        <div className=" lg:!px-20 md:!px-15 !px-5  ">
          <div className="flex lg:flex-row flex-col ">
            <div className="flex lg:flex-col w-full lg:w-[30%] bg-[#F2F2F2] !p-5 !gap-2 rounded-lg !mt-10 !mb-5 overflow-hidden ">
              <button
                onClick={() => setActiveTab("fd")}
                className={`relative text-[#2956A6] bg-white !p-4 rounded-lg font-semibold cursor-pointer  overflow-hidden`}
              >
                <span
                  className={`absolute left-0 top-1/2 w-[3px] transition-all duration-300 ease-in-out transform -translate-y-1/2 ${activeTab === "fd"
                    ? "top-0 h-full -translate-y-0 bg-[#2956A6]"
                    : "h-4 bg-black"
                    }`}
                />
                Fixed Deposit
              </button>

              <button
                onClick={() => setActiveTab("rd")}
                className={`relative text-[#2956A6] bg-white !p-4 font-semibold rounded-lg cursor-pointer overflow-hidden `}
              >
                <span
                  className={`absolute left-0 top-1/2 w-[3px] transition-all duration-300 ease-in-out transform -translate-y-1/2 ${activeTab === "rd"
                    ? "top-0 h-full -translate-y-0 bg-[#2956A6]"
                    : "h-4 bg-black"
                    }`}
                />
                Recurring Deposit
              </button>

              <button
                onClick={() => setActiveTab("gold")}
                className={`relative text-[#2956A6] bg-white !p-4 rounded-lg font-semibold cursor-pointer overflow-hidden `}
              >
                <span
                  className={`absolute left-0 top-1/2 w-[3px] transition-all duration-300 ease-in-out transform -translate-y-1/2 ${activeTab === "gold"
                    ? "top-0 h-full -translate-y-0 bg-[#2956A6]"
                    : "h-4 bg-black"
                    }`}
                />
                Gold Investment
              </button>

              <div className="relative flex  ">
                <img src={img1} alt="" className="w-full h-fit relative  !p-5 lg:flex md:flex hidden" />
                <div className="absolute bottom-0 left-0 w-full  bg-[#2956A6] text-white !py-10  clip-diagonal ">
                  <div className="flex justify-center !mb-3">
                    <div className="bg-white text-[#2956A6] w-14 h-14 flex items-center justify-center rounded-full shadow-md">
                      <MdLocalPhone size={28} />
                    </div>
                  </div>
                  <p className="text-sm text-center opacity-80">MON–SAT 8:00–9:00</p>
                  <p className="text-xl font-semibold text-center mt-1">+88 0123 654 99</p>
                </div>
              </div>
            </div>

            {activeTab === "fd" &&
              <div className="flex flex-col lg:w-[70%] w-[100%] bg-white !p-5 !gap-2 rounded-lg lg:!mt-10 lg:!m-5 lg:!pl-20 ">
                <img src={img2} alt="" className=" lg:w-fit w-full  lg:h-[40%] !py-5" />
                <p className="text-[#767682] text-[16px] !py-2 rounded-lg ">
                  Grow your wealth with secure Fixed Deposits, disciplined Recurring Deposits, and
                  trusted Gold Investments. Whether you seek guaranteed returns, steady savings, or
                  timeless value, our solutions are designed to match your financial goals. With flexible
                  options and expert guidance, we make your money work smarter for you.
                </p>
                <FdCalculator />
              </div>
            }
            {activeTab === "rd" &&
              <div className="flex flex-col lg:w-[70%] w-[100%] bg-white !p-5 !gap-2 rounded-lg lg:!mt-10 lg:!m-5 lg:!pl-20  ">
                <img src={img2} alt="" className=" w-fit  h-[40%]  !py-5" />
                <p className="text-[#767682] text-[16px] !py-2 rounded-lg ">
                  Grow your wealth with secure Fixed Deposits, disciplined Recurring Deposits, and
                  trusted Gold Investments. Whether you seek guaranteed returns, steady savings, or
                  timeless value, our solutions are designed to match your financial goals. With flexible
                  options and expert guidance, we make your money work smarter for you.
                </p>
                <RdCalculator  />
              </div>
            }
            {activeTab === "gold" &&
              <div className="flex flex-col lg:w-[70%] w-[100%] bg-white !p-5 !gap-2 rounded-lg lg:!mt-10 lg:!m-5 lg:!pl-20 ">
                <img src={img2} alt="" className=" w-fit  h-[40%] !py-5" />
                <p className="text-[#767682] text-[16px] !py-2 rounded-lg ">
                  Grow your wealth with secure Fixed Deposits, disciplined Recurring Deposits, and
                  trusted Gold Investments. Whether you seek guaranteed returns, steady savings, or
                  timeless value, our solutions are designed to match your financial goals. With flexible
                  options and expert guidance, we make your money work smarter for you.
                </p>
                <GoldGraph />
              </div>
            }
          </div>
        </div>
      </section >

      {/* financial planning - Left side image, right side text */}
      <div section>
        <div ref={financialPlanningRef}>
          <div className="lg:!px-20 md:!px-20 !px-10 !py-10 grid rev lg:grid-cols-2 md:grid-cols-2 grid-cols-1 justify-evenly items-center">
            <div className={`transition-all duration-700 ease-out ${isVisible.financialPlanning ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <img
                src={img3}
                alt=""
                className='w-fit !py-5'
              />
            </div>
            <div className={`flex justify-center items-center transition-all duration-700 ease-out delay-300 ${isVisible.financialPlanning ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-0'}`}>
              <div>
                <h1 className="relative inline-block lg:text-[20px] md:text-[18px] text-[16px] font-semibold text-[#2956A6] ">
                  Financial Planning
                  <span className="absolute left-0 bottom-1 w-full h-[30%] bg-[#DFAE51] -z-10"></span>
                </h1>
                <h2 className='lg:text-[50px] md:text-[35px] text-[25px] font-bold text-black '>
                  Plan today for a <br /> <span className='text-[#2956A6]'> stronger tomorrow.</span>
                </h2>
                <p className='lg:text-[18px] md:text-[18px] text-[16px] text-[#666666] lg:leading-10 md:leading-8 leading-8 lg:w-[90%] md:w-[90%] w-full text-justify'>
                  we understand the challenges and complexities that businesses face in today's dynamic marketplace.
                  That's why we offer a comprehensive suite of consulting services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Investment Advisory - Right side image, left side text */}
      <section>
        <div ref={investmentAdvisoryRef}>
          <div className="lg:!px-20 md:!px-20 !px-10 !py-0 grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 justify-evenly items-center">
            {/* Mobile image (shown first on mobile) */}
            <div className='block md:hidden lg:hidden'>
              <div className={`transition-all duration-700 ease-out ${isVisible.investmentAdvisory ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                <img
                  src={img4}
                  alt=""
                  className='w-fit place-self-center !py-5'
                />
              </div>
            </div>
            
            {/* Text content */}
            <div className={`flex justify-center items-center transition-all duration-700 ease-out ${isVisible.investmentAdvisory ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div>
                <h1 className="relative inline-block lg:text-[20px] md:text-[18px] text-[16px] font-semibold text-[#2956A6] ">
                  Investment Advisory
                  <span className="absolute left-0 bottom-1 w-full h-[30%] bg-[#DFAE51] -z-10"></span>
                </h1>
                <h2 className='lg:text-[50px] md:text-[35px] text-[25px] font-bold text-black '>
                  Advisory that grows<br /> with <span className='text-[#2956A6]'> your ambitions.</span>
                </h2>
                <p className='lg:text-[18px] md:text-[18px] text-[16px] text-[#666666] lg:leading-10 md:leading-8 leading-8 lg:w-[90%] md:w-[90%] w-full text-justify'>
                  we understand the challenges and complexities that businesses face in today's dynamic marketplace.
                  That's why we offer a comprehensive suite of consulting services.
                </p>
              </div>
            </div>
            
            {/* Desktop/tablet image (shown after text on larger screens) */}
            <div className='hidden md:block lg:block'>
              <div className={`transition-all duration-700 ease-out delay-300 ${isVisible.investmentAdvisory ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                <img
                  src={img4}
                  alt=""
                  className='w-fit place-self-center !py-5'
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tax & compliance strategy - Left side image, right side text */}
      <div section>
        <div ref={taxComplianceRef}>
          <div className="lg:!px-20 md:!px-20 !px-10 !py-10 grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 justify-evenly items-center">
            <div className={`transition-all duration-700 ease-out ${isVisible.taxCompliance ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <img
                src={img5}
                alt=""
                className='w-fit !py-5'
              />
            </div>
            <div className={`flex justify-center items-center transition-all duration-700 ease-out delay-300 ${isVisible.taxCompliance ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div>
                <h1 className="relative inline-block lg:text-[20px] md:text-[18px] text-[16px] font-semibold text-[#2956A6] ">
                  Tax & compliance strategy
                  <span className="absolute left-0 bottom-1 w-full h-[30%] bg-[#DFAE51] -z-10"></span>
                </h1>
                <h2 className='lg:text-[50px] md:text-[35px] text-[25px] font-bold text-black '>
                  Right strategy,  <br /> <span className='text-[#2956A6]'> risk-free growth.</span>
                </h2>
                <p className='lg:text-[18px] md:text-[18px] text-[16px] text-[#666666] lg:leading-10 md:leading-8 leading-8 lg:w-[90%] md:w-[90%] w-full text-justify'>
                  we understand the challenges and complexities that businesses face in today's dynamic marketplace.
                  That's why we offer a comprehensive suite of consulting services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;