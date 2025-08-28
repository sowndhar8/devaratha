import { useState } from "react";
import img1 from "../img/business-loan.png";
import { FaArrowRight, FaCheck } from 'react-icons/fa';
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowUp } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

function Businessloan() {
    const Faq = [
        {
            id: 1,
            title: "Who is eligible to get a Gold Loan?",
            answer:
                "Financial planning is essential because it helps you achieve your financial goals and secure your financial future.",
        },
        {
            id: 2,
            title: "What documents are required to apply for a Gold Loan?",
            answer:
                "Webflow is a powerful visual development platform that allows designers to build fully responsive websites without writing a single line of code. It combines the flexibility of code with the simplicity of a visual editor, empowering creators to bring their ideas to life faster and more efficiently than ever before.",
        },
        {
            id: 3,
            title: "When should you apply for a Gold Loan?",
            answer:
                "Absolutely. We welcome collaboration and encourage feedback throughout the process, allowing you to tailor features that best suit your business needs.",
        },
        {
            id: 4,
            title: "What happens if a Gold Loan is not paid?",
            answer:
                "Yes. Our team offers continuous support, including updates, bug fixes, and performance optimization so your platform always runs smoothly.",
        },
    ];

    const [selected, setSelected] = useState(null);


    return (
        <div>

            <div className="relative bg-banner2 bg-cover h-[50vh] items-center justify-center">
                <div className="absolute top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 justify-center items-center flex flex-col">
                    <h2 className="text-[#2956A6] text-[50px]">Business Loan</h2>
                    <h3 className="text-[#D8D8D8] text-[20px] text-center !py-7">
                        Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum doloreaeu fugiat nulla pariatur.
                    </h3>
                </div>
            </div>




            <div className='lg:!px-20 md:!px-20 !px-6 '>

                <section>
                    <div className='!py-10 grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1  justify-evenly items-center  '>

                        <div className='flex justify-center items-center '>
                            <div>

                                <h1 className="relative inline-block lg:text-[20px] md:text-[20px] text-[18px] font-semibold text-[#2956A6] ">
                                    Business Loan
                                    <span className="absolute left-0 bottom-1 w-full h-[30%] bg-[#DFAE51] -z-10"></span>
                                </h1>

                                <h2 className='lg:text-[50px] md:text-[35px] text-[25px] font-bold  text-black font-poppins'>
                                    Your Trusted Partner  <br /> in <span className='text-[#2956A6]'>Business Loan. </span>
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
                                        <FaCheck /> <span className='text-[#666666] '>Easy Process</span>
                                    </div>
                                    <div className='!mt-5 flex !gap-5 items-center'>
                                        <FaCheck /> <span className='text-[#666666] '>15 minutes disbursal</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=' '>
                            <img
                                src={img1}
                                alt=""
                                className='w-fit place-self-center '
                            />
                        </div>
                    </div>
                </section>

                <section>

                    <h2 className="relative inline-block lg:text-[28px] md:text-[24px] text-[20px] font-semibold text-black lg:!mt-10 md:!mt-10 !mt-0 !mb-5">
                        Why Business Loan?
                    </h2>
                    <p className='text-[#666666] lg:text-[18px] md:text-[18px] text-[16px]  lg:leading-10 md:leading-8 leading-8  w-full  text-justify lg:!pb-5 md:!pb-5 !pb-2 '>
                        For every business, funding is a key concern and a requisite for scaling up. But getting loans is not that simple, especially for small businesses.
                        This is where Devavratha consultency  promises to support. Our financial services are aimed at helping you overcome financial constraints and realise your business goals.
                    </p>

                    <p className='text-[#666666] lg:text-[18px] md:text-[18px] text-[16px]  lg:leading-10 md:leading-8 leading-8  w-full  text-justify lg:!pb-5 md:!pb-5 !pb-2 '>
                        To fulfil all your business endeavours; expansion, office renovation, modernization, automation, equipment purchases, skill development, and more, you need capital.
                        With Devavratha consultency Business Loans, specially designed for MSMEs, you can provide your business with the momentum it needs and take it to newer heights.
                        To make things convenient, we guarantee loans at reduced turnaround time for short and long term business needs.
                    </p>
                </section>

                <section>

                    <h2 className=" lg:text-[28px] md:text-[24px] text-[20px] font-semibold text-black !mt-10 !mb-5">
                        Features of Business Loan
                    </h2>
                    <div>
                        <h3 className=' lg:text-[20px] md:text-[20px] text-[18px] font-bold lg:leading-10 md:leading-8 leading-8  w-full  text-justify lg:!pb-5 md:!pb-5 !pb-2 '>
                            Fulfil Your Every Need
                        </h3>
                        <p className='text-[#666666] lg:text-[18px] md:text-[18px] text-[16px]  lg:leading-10 md:leading-8 leading-8  w-full  text-justify lg:!pb-5 md:!pb-5 !pb-2 '>
                            Avail of a loan up to ₹50 lakhs (up to ₹75 lakhs in select locations) without any collateral, guarantor or security, to fulfil your
                            every business need, from business expansion and working capital, or any other personal work.
                        </p>
                    </div>

                    <div>
                        <h3 className=' lg:text-[20px] md:text-[20px] text-[18px] font-bold  lg:leading-10 md:leading-8 leading-8  w-full  text-justify lg:!pb-5 md:!pb-5 !pb-2 '>
                            Transfer Loan Balance with Ease
                        </h3>
                        <p className='text-[#666666] lg:text-[18px] md:text-[18px] text-[16px]  lg:leading-10 md:leading-8 leading-8  w-full  text-justify lg:!pb-5 md:!pb-5 !pb-2 '>
                            Transfer your existing Business Loan to Devavratha consultency for lower EMIs, and enjoy our benefits
                            <ul className="list-disc !pl-7">
                                <li>·Attractive Interest rates on existing loan transfer.</li>
                                <li>Flexible tenure upto 48 months to transfer your loan balance,</li>
                            </ul>
                        </p>
                    </div>

                    <div>
                        <h3 className=' lg:text-[20px] md:text-[20px] text-[18px] font-bold lg:leading-10 md:leading-8 leading-8  w-full  text-justify lg:!pb-5 md:!pb-5 !pb-2 '>
                            Dropline Overdraft Facility
                        </h3>
                        <p className='text-[#666666] lg:text-[18px] md:text-[18px] text-[16px]  lg:leading-10 md:leading-8 leading-8  w-full  text-justify lg:!pb-5 md:!pb-5 !pb-2 '>
                            It provides Overdraft Facility without any security. Limit is set in a separate Current Account which drops monthly till the end of the tenure.
                            Pay the interest only on the amount utilised.
                            <ul className="list-disc !pl-7">
                                <li>Dropline Overdraft Facility up to ₹1 lakh - ₹25 lakhs*</li>
                                <li>No guarantor/ security required</li>
                                <li>Tenure ranging from 12-48 months</li>
                                <li>Attractive rate of interest</li>
                            </ul>
                        </p>
                    </div>

                    <div>
                        <h3 className='lg:text-[20px] md:text-[20px] text-[18px] font-bold lg:leading-10 md:leading-8 leading-8  w-full  text-justify lg:!pb-5 md:!pb-5 !pb-2 '>
                            Quick Eligibility Check & Disbursal
                        </h3>
                        <p className='text-[#666666] lg:text-[18px] md:text-[18px] text-[16px]  lg:leading-10 md:leading-8 leading-8  w-full  text-justify lg:!pb-5 md:!pb-5 !pb-2 '>
                            Check your Business Loan eligibility in our consultency. Loans will be disbursed based on previous repayment of Home Loans, Auto Loans and Credit Cards.
                        </p>
                    </div>
                </section>

                <section>

                    <h2 className=" lg:text-[28px] md:text-[24px] text-[20px] font-semibold text-black !mt-10 !mb-5">
                        Eligibility for Business Loan
                    </h2>

                    <p className='text-[#666666] lg:text-[18px] md:text-[18px] text-[16px]  lg:leading-10 md:leading-8 leading-8  w-full  text-justify lg:!pb-5 md:!pb-5 !pb-2 '>
                        The following people are eligible to apply for a Business Loan:
                        <ul className="list-disc !pl-7">
                            <li>Self employed individuals, proprietors, private ltd. co. and partnership firms involved in the business of manufacturing, trading or services.</li>
                            <li>The business should have a minimum turnover of ₹40 lakhs</li>
                            <li>Individuals who have been in the current business for a minimum of 3 years, with 5 years total business experience.</li>
                            <li>Those whose business has been profit-making for the previous 2 years</li>
                            <li>The business should have a Minimal Annual Income (ITR) of ₹1.5 lakhs per annum</li>
                            <li>The applicant should be at least 21 years at the time of applying for the loan, and should be not older than 65 years at the time of loan maturity.</li>
                        </ul>
                    </p>


                </section>

                <section>

                    <h2 className=" lg:text-[28px] md:text-[24px] text-[20px] font-semibold text-black !mt-10 !mb-5">
                        Documents for Business Loan
                    </h2>

                    <p className='text-[#666666] lg:text-[18px] md:text-[18px] text-[16px]  lg:leading-10 md:leading-8 leading-8  w-full  text-justify lg:!pb-5 md:!pb-5 !pb-2 '>
                        The following documents are required along with your Business Loan application:
                        <ul className="list-disc !pl-7">
                            <li>PAN Card – For Company/Firm/Individual</li>
                            <li>A copy of any of the following documents as identity proof:
                                <ul className="list-disc !pl-7">
                                    <li>Aadhaar Card</li>
                                    <li>PAN Card</li>
                                    <li>Driving License</li>
                                    <li>Passport</li>
                                    <li>Voter's ID</li>
                                </ul>
                            </li>
                            <li>A copy of any of the following documents as address proof:
                                <ul className="list-disc !pl-7">
                                    <li>Aadhaar Card</li>
                                    <li>Driving License</li>
                                    <li>Passport</li>
                                    <li>Voter's ID</li>
                                </ul>
                            </li>
                            <li>Bank statement of the previous 6 months</li>
                            <li>Latest ITR along with computation of income, Balance Sheet and Profit & Loss account for the previous 2 years, after being CA Certified/Audited</li>
                            <li>Proof of continuation (ITR/Trade license/Establishment/Sales Tax Certificate).</li>
                            <li>Other Mandatory Documents [Sole Prop. Declaration Or Certified Copy of Partnership Deed, Certified true copy of Memorandum & Articles of Association (certified by Director) & Board resolution (Original)]</li>
                        </ul>
                    </p>


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
                                        className={`flex !p-3 justify-between items-center cursor-pointer transition-all duration-300 ${isSelected ? "bg-[#F8F7FD] border-l-4 border-[#A3B5FF]" : "bg-[#FBFBFE] border-l-4 border-[#F1F2F9]"
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
                                            <MdOutlineKeyboardArrowDown size={25} color="#170F49" />
                                        )}
                                        <h2
                                            className={`lg:text-[20px] md:text-[18px] sm:text-[16px] text-[14px] font-semibold w-full lg:!py-4 md:!py-4 !py-2 text-[#170F49] font-poppins capitalize`}
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
                                                className="overflow-hidden bg-[#F9F8FD] border-l-4 border-[#A3B5FF] "
                                            >
                                                <div className="!p-5 ">
                                                    <p className="lg:text-[16px] md:text-[16px] sm:text-[14px] text-[12px] text-[#6F6C8F] !px-5   ">
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


export default Businessloan
