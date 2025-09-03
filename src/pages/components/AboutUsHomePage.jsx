import React from 'react'
import img2 from "../../img/aboutus-bg.png";


function AboutUsHomePage() {
  return (
    <div>
          <section>
              <div>
                <div className="lg:!px-20 md:!px-20 !px-10 !py-20 grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1  justify-evenly items-center  ">
                  <div className="lg:!py-0 md:!py-0 !py-5 ">
                    <img src={img2} alt="" className=" w-fit place-self-center " />
                  </div>
                  <div className="flex justify-center items-center ">
                    <div>
                      <h1 className="relative inline-block lg:text-[20px] md:text-[20px] text-[18px] font-semibold text-[#2956A6] ">
                        About Us
                        <span className="absolute left-0 bottom-1 w-full h-[30%] bg-[#DFAE51] -z-10"></span>
                      </h1>
      
                      <h2 className="lg:text-[50px] md:text-[35px] text-[25px] font-bold  text-black ">
                        Building Wealth with <br />{" "}
                        <span className="text-[#2956A6]">Trust and Expertise</span>
                      </h2>
                      <p className="lg:text-[18px] md:text-[18px] text-[16px]  text-[#666666] lg:leading-10 md:leading-8 leading-8 lg:w-[80%] md:w-[80%] w-full  text-justify  ">
                        We are a trusted financial services company committed to
                        helping individuals and businesses make smarter money
                        decisions. Our expertise spans across deposits, investments,
                        financial planning, and tax strategies tailored to your unique
                        goals. With transparency and integrity at the core, we ensure
                        every solution is designed to protect and grow your wealth.
                        Our team combines experience with a client-first approach to
                        deliver reliable results. Together, we help you achieve
                        financial stability and long-term prosperity.
                      </p>
                      {/* <div className="!mt-5 ">
                        <button className=" flex items-center rounded-4xl bg-[#2956A6] text-white font-semibold text-[16px] !px-5 !py-2 cursor-pointer">
                          Read More
                          <FaArrowRight
                            color="black"
                            size={30}
                            className="!ml-2 bg-white rounded-full !p-2 "
                          />
                        </button>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </section>
    </div>
  )
}

export default AboutUsHomePage
