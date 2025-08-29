import React from 'react'
import { useNavigate } from 'react-router-dom';
import img2 from "../img/aboutus-bg.png";
import img3 from "../img/choose-us-bg.png";
import img4 from "../img/we-do.png";
import img5 from "../img/advantage.png";
import comp1 from "../img/Component 1.png";
import comp2 from "../img/Component 2.png";
import comp3 from "../img/Component 3.png";
import comp4 from "../img/Component 4.png";
import comp5 from "../img/Component 5.png";
import comp6 from "../img/Component 6.png";
import ava1 from "../img/avatar-1.png";
import ava2 from "../img/avatar-2.png";
import ava3 from "../img/avatar-3.png";
import ava4 from "../img/avatar-4.png";
import ava5 from "../img/avatar-5.png";
import ava6 from "../img/avatar-6.png";
import { FaArrowRight } from 'react-icons/fa';
import { FaCircleCheck } from 'react-icons/fa6';
import { Rate } from "antd";
import Faq from "./components/faq";
import OurServices from './components/ourServices';



const choose = [
    {
        id: 1,
        img: comp1,
        title: "Personalized for you",
        description: "Designed front to back, FinPoan card features tone on tone..."
    },
    {
        id: 2,
        img: comp2,
        title: "Unlimited virtual cards",
        description: "Control by generating as many virtual credit cards as you need."
    },
    {
        id: 3,
        img: comp3,
        title: "Enhanced privacy",
        description: "With no visible card number on it surface, FinPoan keeps your..."
    },
    {
        id: 4,
        img: comp4,
        title: "Streamlined payments",
        description: "Streamlined empowers you to establish milestones according."
    },
    {
        id: 5,
        img: comp5,
        title: "Accelerate your savings",
        description: "A high interest online savings account with no monthly fees."
    },
    {
        id: 6,
        img: comp6,
        title: "Built for growth",
        description: "Get access to financial risks data and build a crisis strategy."
    }
];

const data = [
    {
        id: 1,
        title: "Strategic Decision Making",
        description: "Business finance is crucial for making informed and strategic decisions within a company."
    },
    {
        id: 2,
        title: "Resource Allocation",
        description: "Effective resource allocation ensures that a company uses its financial resources wisely."
    },
    {
        id: 3,
        title: "Risk Management",
        description: "This includes having sufficient working capital to cover unforeseen expenses."
    },
];

const data2 = [
    {
        id: 1,
        value: "5",
        img: ava1,
        name: "Kate Barton",
        role: "Founder and CEO at Gymdesk",
        description: "The team at FinPoan goes above and beyond to ensure customer satisfaction, and I highly recommend their services."
    },
    {
        id: 2,
        value: "5",
        img: ava2,
        name: "Shelby Baldwin",
        role: "Founder and CEO at Gymdesk",
        description: "They tailored a personalized investment strategy that aligned perfectly with my risk tolerance and long term objectives. Thanks to their expertise and continuous support."
    },
    {
        id: 3,
        value: "5",
        img: ava3,
        name: "Eran Galperin",
        role: "Founder and CEO at Gymdesk",
        description: "FinPoan’s ease of integration, flexibility and time to market has helped us give our customers an unrivalled, technology driven mobile banking experience."
    },
    {
        id: 4,
        value: "5",
        img: ava4,
        name: "Kate Barton",
        role: "Founder and CEO at Gymdesk",
        description: "Running on FinPoan not only enables us to focus on scaling and innovation, but it also is a great cultural fit."
    },
    {
        id: 5,
        value: "5",
        img: ava5,
        name: "Keyla Ramira",
        role: "Founder and CEO at Gymdesk",
        description: "They took the time to understand my unique financial situation, patiently answered all my questions & designed a comprehensive financial plan."
    },
    {
        id: 6,
        value: "5",
        img: ava6,
        name: "Dan Wok",
        role: "Founder and CEO at Gymdesk",
        description: "We have a very pragmatic approach to lending and savings and saw a great match of culture and ethos in FinPoan."
    },
];

function Homepage() {
    const navigate = useNavigate();
    return (
        <div>

            {/* top section */}
            
            <section>
                <div className='bg-banner  bg-cover flex justify-center items-center'>
                    <div className=' w-full h-full lg:!px-20 md:!px-15 !px-10 !py-60'>
                        <h1 className='lg:text-[78px] md:text-[50px] text-[28px] font-bold text-white '>
                            Secure Wealth,<br /> Smart Future 
                        </h1>
                        <p className='lg:text-[24px] md:text-[22px] text-[18px] font-medium  text-white '>
                            Build your savings with trusted financial solutions. From deposits to investments and tax strategies, we help you grow your wealth with clarity and confidence.
                        </p>
                        <button
                            onClick={() => navigate("/Contactus")}
                            className='bg-[#DFAE51] text-[#2956A6] !px-10 !py-4 rounded-lg !mt-12 text-[16px] font-semibold cursor-pointer'>
                            Contact Us
                        </button>
                    </div>
                </div>
            </section>


            
            {/* aboutus */}
            <section>
                <div>
                    <div className='lg:!px-20 md:!px-20 !px-10 !py-20 grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1  justify-evenly items-center  '>
                        <div className=' '>
                            <img
                                src={img2}
                                alt=""
                                className=' w-fit place-self-center '
                            />
                        </div>
                        <div className='flex justify-center items-center '>
                            <div>

                                <h1 className="relative inline-block lg:text-[20px] md:text-[20px] text-[18px] font-semibold text-[#2956A6] ">
                                    About Us
                                    <span className="absolute left-0 bottom-1 w-full h-[30%] bg-[#DFAE51] -z-10"></span>
                                </h1>

                                <h2 className='lg:text-[50px] md:text-[35px] text-[25px] font-bold  text-black '>
                                   Building Wealth with <br /> in <span className='text-[#2956A6]'> Business Success.</span>
                                </h2>
                                <p className='lg:text-[18px] md:text-[18px] text-[16px]  text-[#666666] lg:leading-10 md:leading-8 leading-8 lg:w-[80%] md:w-[80%] w-full  text-justify  '>
                                    we understand the challenges and complexities that businesses face in today's dynamic marketplace.
                                    That's why we offer a comprehensive suite of consulting services. we understand the challenges and
                                    complexities that businesses face in today's dynamic marketplace. That's why we offer a comprehensive
                                    suite of consulting services. we understand the challenges and complexities.
                                </p>
                                <div className='!mt-5 '>
                                    <button className=" flex items-center rounded-4xl bg-[#2956A6] text-white font-semibold text-[16px] !px-5 !py-2 cursor-pointer">Read More
                                        <FaArrowRight color="black" size={30} className="!ml-2 bg-white rounded-full !p-2 " />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Services */}
            <section>
                <div>
                    <OurServices />
                </div>
            </section>

            {/* why choose us */}
            <section>
                <div className=' bg-[#D9E9FF] rounded-4xl lg:!m-20 md:!m-15 !m-10 lg:!p-10 md:!p-10 !py-5 '>
                    <div className='text-center '>

                        <h1 className="relative inline-block lg:text-[20px] md:text-[20px] text-[18px]  font-semibold text-[#2956A6] z-10">
                            Why Choose Us
                            <span className="absolute left-0 bottom-1 w-full h-[30%] bg-[#DFAE51] z-[-1]"></span>
                        </h1>

                        <h2 className='lg:text-[50px] md:text-[35px] text-[25px] text-center font-bold  text-black '>
                            why ---- is the right choice for you
                        </h2>
                    </div>
                    <div className='flex lg:flex-row md:flex-row flex-col gap-10 !mt-5 lg:!p-10 md:!p-10 !p-5 lg:w-[70%] md:w-[70%] !w-[90%] bg-white rounded-2xl !mx-auto '>
                        <div className='!mt-5 lg:w-[70%] md:w-[70%] w-full '>
                            <h3 className='lg:text-[18px] md:text-[18px] text-[16px]  text-white bg-[#007DF2] rounded-tr-2xl w-fit !px-5 !py-2 '>
                                Strategize & Succeed
                            </h3>
                            <h2 className='lg:text-[50px] md:text-[35px] text-[20px]  text-black font-bold lg:leading-15  '>
                                Driving Success <br /> Through Strategic <br /> Guidance.
                            </h2>
                            <p className='lg:text-[18px] md:text-[18px] text-[16px]  text-[#666666]  '>
                                These services are tailored to meet the specific needs and challenges of each client,
                                providing valuable expertise and support to drive business success.
                            </p>

                            <div className='flex lg:flex-row md:flex-row flex-col lg:gap-10 md:gap-10 gap-5 !mt-5 '>
                                <button className=" flex items-center rounded-lg bg-[#007DF2] text-white font-semibold text-[16px] justify-center lg:w-[30%] md:w-[30%] w-[100%] !py-3 cursor-pointer">
                                    CONTACT US
                                </button>
                                <button className=" flex items-center rounded-lg bg-white text-[#007DF2] border-2 font-semibold text-[16px] justify-center lg:w-[30%] md:w-[30%] w-[100%] !py-3 cursor-pointer">
                                    FREE CONSULT
                                </button>
                            </div>
                        </div>
                        <div className='lg:flex md:flex hidden !mt-5 '>
                            <img src={img3} alt="" />
                        </div>
                    </div>
                    <div className='!mt-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 lg:!p-10 md:!p-10  '>
                        {choose.map((item) => (
                            <div key={item.id} className=' !p-5 '>
                                <div className='grid lg:grid-cols-[auto_1fr] md:grid-cols-[auto_1fr] grid-cols-1 items-center gap-4 '>
                                    <div className="w-20 h-20 flex items-center justify-center bg-white rounded-full">
                                        <img src={item.img} alt={item.title} className="w-12 h-12 object-contain" />
                                    </div>

                                    <div className=' '>
                                        <h2 className='lg:text-[20px] md:text-[18px] text-[16px] text-black font-semibold mt-2'>
                                            {item.title}
                                        </h2>
                                        <p className='text-[#666] mt-2'>
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}



                    </div>
                </div>
            </section >

            {/* how we do */}
            <section>
                <div className=' bg-[#D9E9FF] flex lg:flex-row md:flex-col flex-col rounded-4xl lg:!m-20 md:!m-15 !m-10 !px-10 lg:!py-20 md:!py-20 !py-10 '>
                    <div className='items-center justify-center flex lg:w-[60%] md:w-[100%] w-[100%] '>
                        <div>
                            <h1 className="relative inline-block lg:text-[20px] md:text-[20px] text-[18px]  font-semibold text-[#2956A6] z-10">
                                How We Do
                                <span className="absolute left-0 bottom-1 w-full h-[30%] bg-[#DFAE51] z-[-1]"></span>
                            </h1>

                            <h2 className='lg:text-[50px] md:text-[35px] text-[25px]  font-bold  text-black '>
                                The importance of business finance
                            </h2>
                            <div>
                                {data.map((item) => (
                                    <div key={item.id} className=' mt-5 !py-5 '>

                                        <div className="flex items-center gap-10 ">
                                            <div className=' '>
                                                <div className='flex gap-5 items-center'>
                                                    <FaCircleCheck className="text-[#2956A6] mt-5 text-[20px] md:text-[20px] lg:text-[20px]" />
                                                    <h2 className='lg:text-[20px] md:text-[18px] text-[16px] text-black font-semibold mt-2'>
                                                        {item.title}
                                                    </h2>
                                                </div>
                                                <p className='text-[#666] !mt-2 !px-10'>
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                                }
                            </div>
                        </div>
                    </div>

                    <div className='!mt-5 lg:w-[40%] md:w-[100%] w-[100%] '>
                        <img src={img4} alt="" />
                    </div>
                </div>

            </section>

            {/* Advantage */}
            <section>
                <div className=' bg-[#D9E9FF] flex lg:flex-row md:flex-col flex-col rounded-4xl lg:!m-20 md:!m-15 !m-10 !px-10 lg:!py-20 md:!py-20 !py-10 gap-10 '>
                    <div className='!mt-5 lg:w-[40%] md:w-[100%] w-[100%] '>
                        <img src={img5} alt="" />
                    </div>
                    <div className='items-center justify-center flex lg:w-[60%] md:w-[60%] w-[100%] '>
                        <div>
                            <h1 className="relative inline-block lg:text-[20px] md:text-[20px] text-[18px] font-semibold text-[#2956A6] z-10">
                                Advantages
                                <span className="absolute left-0 bottom-1 w-full h-[30%] bg-[#DFAE51] z-[-1]"></span>
                            </h1>

                            <h2 className='lg:text-[50px] md:text-[35px] text-[25px]  font-bold  text-black '>
                                Manage finance for your business
                            </h2>
                            <div>
                                {data.map((item) => (
                                   <div key={item.id} className=' mt-5 !py-5 '>

                                        <div className="flex items-center gap-10 ">
                                            <div className=' '>
                                                <div className='flex gap-5 items-center'>
                                                    <FaCircleCheck className="text-[#2956A6] mt-5 text-[20px] md:text-[20px] lg:text-[20px]" />
                                                    <h2 className='lg:text-[20px] md:text-[18px] text-[16px] text-black font-semibold mt-2'>
                                                        {item.title}
                                                    </h2>
                                                </div>
                                                <p className='text-[#666] !mt-2 !px-10'>
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                                }
                            </div>
                        </div>
                    </div>
                </div>

            </section >

            {/* Comments */}
            <section>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 lg:!m-20 md:!m-15 !m-10'>
                    {data2.map((item) => (
                        <div key={item.id} className=' flex rounded-4xl lg:!p-10 md:!p-10 !p-5 border-2 border-[#D9E9FF]'>
                            <div className=' '>
                                <div className='flex gap-5 items-center' >
                                    <div>
                                        <img src={item.img} alt="" className='w-20 h-20' />
                                    </div>
                                    <div>
                                        <p className='text-[#666] !mt-2'>
                                            <Rate disabled value={item.value} />
                                        </p>
                                        <h2 className='lg:text-[20px] md:text-[18px] text-[16px] text-black font-semibold mt-2'>
                                            {item.name}
                                        </h2>
                                        <p className='text-[#999999] !mt-2'>
                                            {item.role}
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <p className='text-[#666666] !mt-2'>
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* faq */}
            <section>
                <div className=' '>
                    <Faq />
                </div>
            </section>


        </div>



    )
}
export default Homepage
