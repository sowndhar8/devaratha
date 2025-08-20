import React, { useState } from "react";
import Img from "../../img/faq.png";
import { motion, AnimatePresence } from "framer-motion";
import { MdOutlineKeyboardArrowUp , MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowRight } from "react-icons/md";

function Faq() {
    const Faq = [
        {
            id: 1,
            title: "Why should I care about financial planning?",
            answer:
                "Financial planning is essential because it helps you achieve your financial goals and secure your financial future.",
        },
        {
            id: 2,
            title: "What are the different types of investments?",
            answer:
                "We start by understanding your brand, audience, and goals. From there, we plan a solution that’s strategic, scalable, and visually aligned with your identity.",
        },
        {
            id: 3,
            title: "How can I start saving for retirement?",
            answer:
                "Absolutely. We welcome collaboration and encourage feedback throughout the process, allowing you to tailor features that best suit your business needs.",
        },
        {
            id: 4,
            title: "What is the importance of emergency funds?",
            answer:
                "Yes. Our team offers continuous support, including updates, bug fixes, and performance optimization so your platform always runs smoothly.",
        },
    ];

    const [selected, setSelected] = useState(null);

    return (
        <section className=" bg-[#2956A6]">
            <div className="w-full flex flex-col gap-10 lg:py-20 py-10">
                <div className="flex flex-col md:flex-row lg:flex-row justify-between items-center !my-10 !mx-10 " >

                    {/* Left Image */}
                    <div className="lg:w-1/2 md:w-1/2 w-full flex justify-center items-center !mb-20 md:mb-0">
                        <img src={Img} alt="" />
                    </div>

                    {/* Right Content */}
                    <div className="lg:w-1/2 md:w-1/2 w-full flex flex-col justify-center lg:!pl-10 md:!pl-10  ">
                        <h1 className="relative inline-block text-[20px]  font-semibold text-white">
                            Have Any Questions
                            <span className="absolute left-0 bottom-1 w-full h-[30%] text-[#DFAE51] -z-5"></span>
                        </h1>
                        <h2 className="lg:text-[40px] md:text-[30px] text-[20px] font-bold text-white">
                            Your burning question,answered
                        </h2>



                        {/* FAQ List */}
                        <div className="lg:w-[100%] md:w-[80%] w-full flex flex-col  !gap-5 !py-10">
                            {Faq?.map((item) => {
                                const isSelected = selected?.id === item?.id;

                                return (
                                    <div key={item.id} className="shadow-lg rounded">
                                        {/* Title Row */}
                                        <div
                                            className="flex !p-3 justify-between items-center rounded-xl cursor-pointer transition-all duration-300 bg-white"
                                            onClick={() => {
                                                setSelected(isSelected ? null : item);
                                            }}
                                        >
                                            <h2
                                                className={`lg:text-[20px] md:text-[18px] sm:text-[16px] text-[14px] font-semibold w-full font-poppins capitalize "
                                                    }`}
                                            >
                                                {item?.title}
                                            </h2>
                                            {isSelected ? (
                                                <MdOutlineKeyboardArrowDown 

                                                    size={25}
                                                    color={isSelected ? "#fff" : "#AF4BFF"}
                                                />
                                            ) : (
                                                <MdOutlineKeyboardArrowRight size={25} color="#2C48A2" />
                                            )}
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
                                                    className="overflow-hidden bg-white rounded-xl border-t border-gray-200"
                                                >
                                                    <div className="!p-5">
                                                        <p className="lg:text-[16px] md:text-[16px] sm:text-[14px] text-[12px] text-[#828282] font-nunito">
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
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Faq;
