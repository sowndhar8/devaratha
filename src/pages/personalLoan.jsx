import { useState } from "react";
import img1 from "../img/personal-loan.png";
import { FaArrowRight } from 'react-icons/fa';
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowUp } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import { FaCircleCheck } from "react-icons/fa6";

function PersonalLoan() {

    const Faq = [
        {
            id: 1,
            title: "What is a personal loan?",
            answer:
                " It is an unsecured loan offered for personal needs such as education, travel, or emergencies.",
        },
        {
            id: 2,
            title: "What is the repayment tenure?",
            answer:
                " Tenure usually ranges from 1 to 5 years, depending on the loan amount.",
        },
        {
            id: 3,
            title: " Do I need collateral for a personal loan?",
            answer:
                " No, personal loans are unsecured and do not require collateral.",
        },
        {
            id: 4,
            title: " How is the loan amount decided?",
            answer:
                " It depends on your income, credit score, and repayment capacity.",
        },
    ];

    const [selected, setSelected] = useState(null);


    return (
        <div>

            <div className="relative bg-banner2 bg-cover h-[50vh] items-center justify-center">
                <div className="absolute lg:top-[50%] md:top-[50%] top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 justify-center items-center flex flex-col">
                    <h2 className="text-[#2956A6] lg:text-[50px] md:text-[50px] text-[35px] text-center">Personal Loan</h2>
                    <h3 className="text-[#D8D8D8] lg:text-[20px] md:text-[18px] text-[16px] text-center tracking-wider !py-7">
                        From dreams to emergencies, we’ve got you covered.
                        Fast, easy, and stress-free personal loans
                    </h3>
                </div>
            </div>




            <div className='lg:!px-20 md:!px-20 !px-10 '>

                <section>
                    <div className=' !py-10 grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1  justify-evenly items-center  '>

                        <div className='flex justify-center items-center '>
                            <div>

                                <h1 className="relative inline-block lg:text-[20px] md:text-[20px] text-[18px] font-semibold text-[#2956A6] ">
                                    Personal Loan
                                    <span className="absolute left-0 bottom-1 w-full h-[30%] bg-[#DFAE51] -z-10"></span>
                                </h1>

                                <h2 className='lg:text-[50px] md:text-[35px] text-[25px] font-bold  text-black font-poppins'>
                                    Your Trusted Partner  <br /> in <span className='text-[#2956A6]'>Personal Loan. </span>
                                </h2>
                                <p className='lg:text-[18px] md:text-[18px] text-[16px]  text-[#666666] lg:leading-10 md:leading-8 leading-8 lg:w-[80%] md:w-[80%] w-full  text-justify  '>
                                    we understand the challenges and complexities that businesses face in today's dynamic marketplace. That's why we offer a comprehensive suite of consulting services.
                                </p>
                                <div className='!mt-5 '>
                                    <button className=" flex items-center rounded-4xl bg-[#2956A6] text-white font-semibold text-[16px] !px-5 !py-2 cursor-pointer">Connect Us
                                        <FaArrowRight color="black" size={30} className="!ml-2 bg-white rounded-full !p-2 " />
                                    </button>
                                </div>
                                <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 items-center">
                                    <div className='!mt-5 flex !gap-5 items-center'>
                                        <FaCircleCheck className="text-[#2956A6] mt-5 text-[20px] md:text-[20px] lg:text-[20px]" />
                                        <span className='text-[#666666] '>Easy Process</span>
                                    </div>
                                    <div className='!mt-5 flex !gap-5 items-center'>
                                        <FaCircleCheck className="text-[#2956A6] mt-5 text-[20px] md:text-[20px] lg:text-[20px]" />
                                        <span className='text-[#666666] '>15 minutes disbursal</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=' '>
                            <img
                                src={img1}
                                alt=""
                                className='w-fit place-self-center !pt-5 '
                            />
                        </div>
                    </div>
                </section>

                <section>

                    <h2 className="relative inline-block lg:text-[28px] md:text-[24px] text-[20px] font-semibold text-black lg:!mt-10 md:!mt-10 !mt-0 !mb-5">
                        Why Personal Loan?
                    </h2>
                    <p className='text-[#666666] lg:text-[18px] md:text-[18px] text-[16px]  lg:leading-10 md:leading-8 leading-8  w-full  text-justify lg:!pb-5 md:!pb-5 !pb-2 '>
                        A Personal Loan is an unsecured loan where you can borrow funds without having to pledge any form of security.
                        The approval for your Personal Loan will depend on your income, employment status and creditworthiness. With devavratha consultency,
                        you get XPRESS Personal Loan up to ₹40 Lakh and repay it through pocket-friendly EMIs across flexible tenures.
                    </p>

                    <p className='text-[#666666] lg:text-[18px] md:text-[18px] text-[16px]  lg:leading-10 md:leading-8 leading-8  w-full  text-justify lg:!pb-5 md:!pb-5 !pb-2 '>
                        At devavratha consultency, we bring to you a fully digital and streamlined application process to help you get access to funds from anywhere,
                        at any time; 24/7 even on bank holidays! Enjoy fixed interest rates and flexible repayment tenures
                        that make budgeting straightforward and allow you to focus on what truly matters.
                    </p>
                </section>

                <section>

                    <h2 className=" lg:text-[28px] md:text-[24px] text-[20px] font-semibold text-black !mt-10 !mb-5">
                        Features of Personal Loan
                    </h2>
                    <div>
                        <h3 className=' lg:text-[20px] md:text-[20px] text-[18px] font-bold lg:leading-10 md:leading-8 leading-8  w-full  text-justify lg:!pb-5 md:!pb-5 !pb-2 '>
                            No Collateral Required
                        </h3>
                        <p className='text-[#666666] lg:text-[18px] md:text-[18px] text-[16px]  lg:leading-10 md:leading-8 leading-8  w-full  text-justify lg:!pb-5 md:!pb-5 !pb-2 '>
                            Enjoy hassle-free financing without pledging any assets or property. Loan approval is based solely on your income and creditworthiness.
                        </p>
                    </div>

                    <div>
                        <h3 className=' lg:text-[20px] md:text-[20px] text-[18px] font-bold  lg:leading-10 md:leading-8 leading-8  w-full  text-justify lg:!pb-5 md:!pb-5 !pb-2 '>
                            Quick Access to Funds
                        </h3>
                        <p className='text-[#666666] lg:text-[18px] md:text-[18px] text-[16px]  lg:leading-10 md:leading-8 leading-8  w-full  text-justify lg:!pb-5 md:!pb-5 !pb-2 '>
                            Personal Loans are processed swiftly, ensuring you receive the funds in no time—often within seconds or just a few days after approval.
                        </p>
                    </div>

                    <div>
                        <h3 className=' lg:text-[20px] md:text-[20px] text-[18px] font-bold lg:leading-10 md:leading-8 leading-8  w-full  text-justify lg:!pb-5 md:!pb-5 !pb-2 '>
                            Flexible Usage
                        </h3>
                        <p className='text-[#666666] lg:text-[18px] md:text-[18px] text-[16px]  lg:leading-10 md:leading-8 leading-8  w-full  text-justify lg:!pb-5 md:!pb-5 !pb-2 '>
                            Use your loan for virtually any purpose; be it a wedding, home renovation, medical emergency or travel. There are no restrictions on how you spend the funds.
                        </p>
                    </div>

                    <div>
                        <h3 className='lg:text-[20px] md:text-[20px] text-[18px] font-bold lg:leading-10 md:leading-8 leading-8  w-full  text-justify lg:!pb-5 md:!pb-5 !pb-2 '>
                            Budget-Friendly EMIs
                        </h3>
                        <p className='text-[#666666] lg:text-[18px] md:text-[18px] text-[16px]  lg:leading-10 md:leading-8 leading-8  w-full  text-justify lg:!pb-5 md:!pb-5 !pb-2 '>
                            Benefit from fixed and affordable EMIs that ensure easy repayment without stretching your finances.
                        </p>
                    </div>
                </section>

                {/* faq */}

                <section>

                    <h2 className="text-center lg:text-[44px] md:text-[30px] text-[20px] font-semibold text-black !mt-10 !mb-5">
                        FAQ's
                    </h2>

                    {/* FAQ List */}
                    <div className="lg:w-[100%] md:w-[80%] w-full flex flex-col  !gap-5 !py-10">
                        {Faq?.map((item) => {
                            const isSelected = selected?.id === item?.id;

                            return (
                                <div key={item.id} className=" rounded-xl overflow-hidden">
                                    <p
                                        className={` bg-[#A3B5FF] w-[3px]  ${isSelected ? "opacity-100" : "opacity-0"
                                            }`}
                                    ></p>
                                    {/* Title Row */}
                                    <div
                                        className={`flex !p-3 justify-between items-center cursor-pointer transition-all duration-300 ${isSelected ? "bg-[#F8F7FD] border-l-4 border-[#2956A6]" : "bg-[#FBFBFE] border-l-4 border-[#F1F2F9]"
                                            }`}
                                        onClick={() => {
                                            setSelected(isSelected ? null : item);
                                        }}
                                    >


                                        {isSelected ? (
                                            <MdOutlineKeyboardArrowUp

                                                size={25}
                                                color="#170F49"
                                            />
                                        ) : (
                                            <MdOutlineKeyboardArrowDown size={25} color="#2956A6" />
                                        )}
                                        <h2
                                            className={`lg:text-[20px] md:text-[18px] sm:text-[16px] text-[14px] font-semibold w-full lg:!py-4 md:!py-4 !py-2 ${isSelected ? "text-[#170F49]" : "text-[#2956A6]"} font-poppins capitalize`}
                                        >
                                            {item?.title}

                                        </h2>

                                    </div>

                                    {/* Answer */}
                                    <AnimatePresence initial={false}>
                                        {isSelected && (
                                            <motion.div
                                                key="faq"
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.4, ease: "easeInOut" }}
                                                className="overflow-hidden bg-[#F9F8FD] border-l-4 border-[#2956A6] "
                                            >
                                                <div className=" ">
                                                    <p className="lg:text-[16px] md:text-[16px] sm:text-[14px] text-[12px] text-[#6F6C8F] !px-10 !pb-5   ">
                                                        {item?.answer}
                                                    </p>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>


                                </div>
                            );
                        })}
                    </div>

                </section>
            </div>
        </div>
    )
}

export default PersonalLoan
