import React from 'react'
import { useNavigate } from 'react-router-dom';
import img1 from "../img/home-bg.png";
import img2 from "../img/aboutus-bg.png";
import { FaArrowRight  } from 'react-icons/fa';



function Homepage() {
    const navigate = useNavigate();
    return (
        <div>

            {/* top section */}
            <section>
                <div className='absolute w-full h-full  '>
                    <img src={img1} alt="" className='w-full h-[100%]' />
                </div>
                <div className='relative w-full h-full lg:!px-20 md:!px-15 !px-10 !py-60'>
                    <h1 className='lg:text-[78px] md:text-[50px] text-[28px] font-bold text-white '>
                        Strategic Guidance.<br /> Lasting Success
                    </h1>
                    <p className='lg:text-[24px] md:text-[22px] text-[20px] font-medium  text-white '>
                        These services can be tailored to meet the specific needs <br /> and challenges of each client.
                    </p>
                    <button
                        // onClick={() => navigate("/Contactus")}
                        className='bg-[#DFAE51] text-[#2956A6] !px-10 !py-4 rounded-lg !mt-12 text-[16px] font-semibold cursor-pointer'>
                        Contact Us
                    </button>
                </div>
            </section>

            {/* aboutus */}
            <section>
                <div className='lg:!px-20 md:!px-20 !px-10 !py-20 grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1  justify-evenly items-center  '>
                    <div className=' '>
                        <img
                            src={img2}
                            alt=""
                            className='w-fit place-self-center '
                        />
                    </div>
                    <div className='flex justify-center items-center '>
                        <div>
                        <h1 className='lg:text-[20px] md:text-[18px] text-[16px] font-semibold text-[#2956A6] '>
                            About Us
                        </h1>
                        <h2 className='lg:text-[50px] md:text-[30px] text-[25px] font-bold  text-black '>
                            Your Trusted Advisors <br /> in <span className='text-[#2956A6]'> Business Success.</span>
                        </h2>
                        <p className='lg:text-[18px] md:text-[18px] text-[16px]  text-[#666666] lg:leading-10 md:leading-8 leading-8 lg:w-[80%] md:w-[80%] w-full  text-justify  '>
                            we understand the challenges and complexities that businesses face in today's dynamic marketplace.
                            That's why we offer a comprehensive suite of consulting services. we understand the challenges and
                            complexities that businesses face in today's dynamic marketplace. That's why we offer a comprehensive
                            suite of consulting services. we understand the challenges and complexities.
                        </p>
                        <div className='!mt-5 '>
                            <button className=" flex items-center rounded-4xl bg-[#2956A6] text-white font-semibold text-[16px] !px-5 !py-2 cursor-pointer">Read More
                                <FaArrowRight  color="black" size={30} className="!ml-2 bg-white rounded-full !p-2 " />
                            </button>
                           </div>
                        </div>
                    </div>
                </div>
            </section>

            












        </div>
    )
}
export default Homepage
