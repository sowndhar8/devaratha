import { useState, useRef, useEffect } from "react";
import img1 from "../img/mortage-loan.png";
import { FaArrowRight } from "react-icons/fa";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import { FaCircleCheck } from "react-icons/fa6";

function mortageLoan() {
  const Faq = [
    {
      id: 1,
      title: "What is a mortgage loan?",
      answer:
        "A loan provided against property such as land, house, or commercial building.",
    },
    {
      id: 2,
      title: " How much funding can I get?",
      answer: "The loan amount is based on the market value of your property.",
    },
    {
      id: 3,
      title: ". Can I continue using my property?",
      answer:
        " Yes, you retain ownership and can continue to use your property during the loan period.",
    },
    {
      id: 4,
      title: "What is the repayment process?",
      answer:
        "You can repay through monthly EMIs with flexible tenure options.",
    },
  ];

  const [selected, setSelected] = useState(null);

  // Refs for the sections we want to animate
  const topSectionRef = useRef(null);
  const textSectionRef = useRef(null);
  const textSection1Ref = useRef(null);
  const textSection2Ref = useRef(null);
  const textSection3Ref = useRef(null);
  const textSection4Ref = useRef(null);
  const faqSectionRef = useRef(null);

  // State to track which sections are visible
  const [isVisible, setIsVisible] = useState({
    topSection: false,
    textSection: false,
    textSection1: false,
    textSection2: false,
    textSection3: false,
    textSection4: false,
    faqSection: false,
  });

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2, // Trigger when 20% of the element is visible
      rootMargin: "0px 0px -10% 0px",
    };

    const observers = [];

    const handleIntersect = (entries, observerName) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible((prev) => ({
            ...prev,
            [observerName]: true,
          }));
        }
      });
    };
    // Create separate observers for each section
    if (topSectionRef.current) {
      const observer = new IntersectionObserver(
        (entries) => handleIntersect(entries, "topSection"),
        observerOptions
      );
      observer.observe(topSectionRef.current);
      observers.push(observer);
    }

    if (textSectionRef.current) {
      const observer = new IntersectionObserver(
        (entries) => handleIntersect(entries, "textSection"),
        observerOptions
      );
      observer.observe(textSectionRef.current);
      observers.push(observer);
    }

    if (textSection1Ref.current) {
      const observer = new IntersectionObserver(
        (entries) => handleIntersect(entries, "textSection1"),
        observerOptions
      );
      observer.observe(textSection1Ref.current);
      observers.push(observer);
    }

    if (textSection2Ref.current) {
      const observer = new IntersectionObserver(
        (entries) => handleIntersect(entries, "textSection2"),
        observerOptions
      );
      observer.observe(textSection2Ref.current);
      observers.push(observer);
    }

    if (textSection3Ref.current) {
      const observer = new IntersectionObserver(
        (entries) => handleIntersect(entries, "textSection3"),
        observerOptions
      );
      observer.observe(textSection3Ref.current);
      observers.push(observer);
    }

    if (textSection4Ref.current) {
      const observer = new IntersectionObserver(
        (entries) => handleIntersect(entries, "textSection4"),
        observerOptions
      );
      observer.observe(textSection4Ref.current);
      observers.push(observer);
    }

    if (faqSectionRef.current) {
      const observer = new IntersectionObserver(
        (entries) => handleIntersect(entries, "faqSection"),
        observerOptions
      );
      observer.observe(faqSectionRef.current);
      observers.push(observer);
    }

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <div>
      <div className="relative bg-banner2 bg-cover h-[50vh] items-center justify-center">
        <div className="absolute lg:top-[50%] md:top-[50%] top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 justify-center items-center flex flex-col">
          <h2 className="text-[#2956A6] lg:text-[50px] md:text-[50px] text-[35px] text-center">
            Mortage Loan
          </h2>
          <h3 className="text-[#D8D8D8] lg:text-[20px] md:text-[18px] text-[16px] text-center tracking-wider !py-7">
            our home, your asset let it power your financial growth. Safe,
            transparent, and reliable mortgage solutions.
          </h3>
        </div>
      </div>

      <div className="lg:!px-20 md:!px-20 !px-10 ">
        <section>
          <div ref={topSectionRef}>
            <div className="!py-10 grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1  justify-evenly items-center  ">
              <div className="flex justify-center items-center ">
                <div
                  className={`transition-all duration-1000 ease-out ${
                    isVisible.topSection
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-20"
                  }`}
                >
                  <h1 className="relative inline-block lg:text-[20px] md:text-[20px] text-[18px] font-semibold text-[#2956A6] ">
                    Mortgage Loan
                    <span className="absolute left-0 bottom-1 w-full h-[30%] bg-[#DFAE51] -z-10"></span>
                  </h1>

                  <h2 className="lg:text-[50px] md:text-[35px] text-[25px] font-bold  text-black font-poppins">
                    Your Trusted Partner <br /> in{" "}
                    <span className="text-[#2956A6]">Mortgage Loan. </span>
                  </h2>
                  <p className="lg:text-[18px] md:text-[18px] text-[16px]  text-[#666666] lg:leading-10 md:leading-8 leading-8 lg:w-[80%] md:w-[80%] w-full  text-justify  ">
                    we understand the challenges and complexities that
                    businesses face in today's dynamic marketplace. That's why
                    we offer a comprehensive suite of consulting services.
                  </p>
                  <div className="!mt-5 ">
                    <button className=" flex items-center rounded-4xl bg-[#2956A6] text-white font-semibold text-[16px] !px-5 !py-2 cursor-pointer">
                      Connect Us
                      <FaArrowRight
                        color="black"
                        size={30}
                        className="!ml-2 bg-white rounded-full !p-2 "
                      />
                    </button>
                  </div>
                  <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 items-center">
                    <div className="!mt-5 flex !gap-5 items-center">
                      <FaCircleCheck className="text-[#2956A6] mt-5 text-[20px] md:text-[20px] lg:text-[20px]" />
                      <span className="text-[#666666] ">Easy Process</span>
                    </div>
                    <div className="!mt-5 flex !gap-5 items-center">
                      <FaCircleCheck className="text-[#2956A6] mt-5 text-[20px] md:text-[20px] lg:text-[20px]" />
                      <span className="text-[#666666] ">
                        15 minutes disbursal
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`transition-all duration-1000 ease-out ${
                  isVisible.topSection
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-20"
                }`}
              >
                <img
                  src={img1}
                  alt=""
                  className="w-fit place-self-center !pt-5"
                />
              </div>
            </div>
          </div>
        </section>

        <section>
          <div ref={textSectionRef}>
            <div
              className={`transition-all duration-1000 ease-out ${
                isVisible.textSection
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-20"
              }`}
            >
              <h2 className="relative inline-block lg:text-[28px] md:text-[24px] text-[20px] font-semibold text-black lg:!mt-10 md:!mt-10 !mt-0 !mb-5">
                Why Mortgage Loan?
              </h2>
              <p className="text-[#666666] lg:text-[18px] md:text-[18px] text-[16px]  lg:leading-10 md:leading-8 leading-8  w-full  text-justify lg:!pb-5 md:!pb-5 !pb-2 ">
                For every business, funding is a key concern and a requisite for
                scaling up. But getting loans is not that simple, especially for
                small businesses. This is where Devavratha consultency
                MyBusiness promises to support. Our financial services are aimed
                at helping you overcome financial constraints and realise your
                business goals.
              </p>

              <p className="text-[#666666] lg:text-[18px] md:text-[18px] text-[16px]  lg:leading-10 md:leading-8 leading-8  w-full  text-justify lg:!pb-5 md:!pb-5 !pb-2 ">
                To fulfil all your business endeavours; expansion, office
                renovation, modernisation, automation, equipment purchases,
                skill development, and more, you need capital. With Devavratha
                consultency Business Loans, specially designed for MSMEs, you
                can provide your business with the momentum it needs and take it
                to newer heights. To make things convenient, we guarantee loans
                at reduced turnaround time for short and long term business
                needs.
              </p>
            </div>
          </div>
        </section>

        <section>
          <div ref={textSection1Ref}>
            <div
              className={`transition-all duration-1000 ease-out ${
                isVisible.textSection1
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-20"
              }`}
            >
              <h2 className=" lg:text-[28px] md:text-[24px] text-[20px] font-semibold text-black !mt-10 !mb-5">
                Features of Mortgage Loan
              </h2>
              <div>
                <h3 className=" lg:text-[20px] md:text-[20px] text-[18px] font-bold lg:leading-10 md:leading-8 leading-8  w-full  text-justify lg:!pb-5 md:!pb-5 !pb-2 ">
                  High Loan Amounts
                </h3>
                <p className="text-[#666666] lg:text-[18px] md:text-[18px] text-[16px]  lg:leading-10 md:leading-8 leading-8  w-full  text-justify lg:!pb-5 md:!pb-5 !pb-2 ">
                  Get a loan worth up to 65% of the market value of the
                  property. Our high loan amounts also come with longer
                  repayment tenures, all at attractive interest rates.
                </p>
              </div>

              <div>
                <h3 className=" lg:text-[20px] md:text-[20px] text-[18px] font-bold  lg:leading-10 md:leading-8 leading-8  w-full  text-justify lg:!pb-5 md:!pb-5 !pb-2 ">
                  Loan Against Rent Receivables
                </h3>
                <p className="text-[#666666] lg:text-[18px] md:text-[18px] text-[16px]  lg:leading-10 md:leading-8 leading-8  w-full  text-justify lg:!pb-5 md:!pb-5 !pb-2 ">
                  Get up to 50% of the value of your commercial property as loan
                  against rental receivables, Amount depends on net rentals,
                  balance tenure of rental agreement and other factors.
                </p>
              </div>

              <div>
                <h3 className=" lg:text-[20px] md:text-[20px] text-[18px] font-bold lg:leading-10 md:leading-8 leading-8  w-full  text-justify lg:!pb-5 md:!pb-5 !pb-2 ">
                  Fulfil Your Every Need
                </h3>
                <p className="text-[#666666] lg:text-[18px] md:text-[18px] text-[16px]  lg:leading-10 md:leading-8 leading-8  w-full  text-justify lg:!pb-5 md:!pb-5 !pb-2 ">
                  Both residential and commercial properties* are accepted
                  as collateral, and the money from the Devavratha consultency
                  Loan Against Property can be used for a variety of personal or
                  business needs.
                </p>
              </div>

              <div>
                <h3 className="lg:text-[20px] md:text-[20px] text-[18px] font-bold lg:leading-10 md:leading-8 leading-8  w-full  text-justify lg:!pb-5 md:!pb-5 !pb-2 ">
                  Easy Debt Consolidation
                </h3>
                <p className="text-[#666666] lg:text-[18px] md:text-[18px] text-[16px]  lg:leading-10 md:leading-8 leading-8  w-full  text-justify lg:!pb-5 md:!pb-5 !pb-2 ">
                  Remember, our Devavratha consultency Loan Against Property is
                  an excellent debt consolidation tool.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div ref={textSection2Ref}>
            <div
              className={`transition-all duration-1000 ease-out ${
                isVisible.textSection2
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-20"
              }`}
            >
              <h2 className=" lg:text-[28px] md:text-[24px] text-[20px] font-semibold text-black !mt-10 !mb-5">
                Eligibility for Mortage Loan
              </h2>

              <p className="text-[#666666] lg:text-[18px] md:text-[18px] text-[16px]  lg:leading-10 md:leading-8 leading-8  w-full  text-justify lg:!pb-5 md:!pb-5 !pb-2 ">
                The following people are eligible to apply for a Mortgage Loan:
                <ul className="list-disc !pl-7">
                  <li>Salaried Individuals</li>
                  <li>Self Employed</li>
                </ul>
              </p>
            </div>
          </div>
        </section>

        <section>
          <div ref={textSection3Ref}>
            <div
              className={`transition-all duration-1000 ease-out ${
                isVisible.textSection3
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-20"
              }`}
            >
            <h2 className=" lg:text-[28px] md:text-[24px] text-[20px] font-semibold text-black !mt-10 !mb-5">
              Documents for Mortage Loan
            </h2>

            <p className="text-[#666666] lg:text-[18px] md:text-[18px] text-[16px]  lg:leading-10 md:leading-8 leading-8  w-full  text-justify lg:!pb-5 md:!pb-5 !pb-2 ">
              The following documents are required along with your Mortgage Loan
              application:
            </p>
            <p className=" lg:text-[18px] md:text-[18px] text-[16px]  lg:leading-10 md:leading-8 leading-8  w-full font-bold  text-justify lg:!pb-5 md:!pb-5 !pb-2 ">
              For Salaried Individuals:
              <ul className="list-disc text-[#666666] font-normal !pl-7">
                <li>
                  A copy of any of the following as proof of residence:
                  <ul className="list-disc !pl-7">
                    <li>Ration Card</li>
                    <li>Telephone Bill</li>
                    <li>Electricity Bill</li>
                    <li>Voter's ID</li>
                  </ul>
                </li>
                <li>
                  A copy of any of the following as proof of identity:
                  <ul className="list-disc !pl-7">
                    <li>Employer's Card</li>
                    <li>Voter's ID</li>
                  </ul>
                </li>
                <li>
                  Latest Bank Statement/Passbook from where you can show a
                  salary/income being credited for the previous 6 months
                </li>
                <li>
                  Salary slip for the previous 6 months showing all deductions
                </li>
                <li>Form 16 for the previous 2 years</li>
                <li>
                  Copies of all the property documents of the concerned property
                  to be pledged for the loan
                </li>
              </ul>
            </p>
          </div>
          </div>
        </section>

        <section>
          <div ref={textSection4Ref}>
            <div
              className={`transition-all duration-1000 ease-out ${
                isVisible.textSection4
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-20"
              }`}
            >
              <p className=" lg:text-[18px] md:text-[18px] text-[16px]  lg:leading-10 md:leading-8 leading-8  w-full font-bold  text-justify lg:!pb-5 md:!pb-5 !pb-2 ">
                For Self Employed Professionals/Individuals:
                <ul className="list-disc text-[#666666] font-normal !pl-7">
                  <li>
                    Certified Financial Statement for the previous 3 years
                  </li>
                  <li>
                    A copy of any of the following as proof of residence:
                    <ul className="list-disc !pl-7">
                      <li>Ration Card</li>
                      <li>Telephone Bill</li>
                      <li>Electricity Bill</li>
                      <li>Voter's ID</li>
                    </ul>
                  </li>
                  <li>
                    A copy of any of the following as proof of identity:
                    <ul className="list-disc !pl-7">
                      <li>Employer's Card</li>
                      <li>Voter's ID</li>
                    </ul>
                  </li>
                  <li>
                    Latest Bank Statement/Passbook from where you can show a
                    salary/income being credited for the previous 6 months
                  </li>
                  <li>
                    Copies of all the property documents of the concerned
                    property to be pledged for the loan
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </section>

        {/* faq */}

        <section>
          <div ref={faqSectionRef}>
            <h2 className="text-center lg:text-[44px] md:text-[30px] text-[20px] font-semibold text-black !mt-10 !mb-5">
              FAQ's
            </h2>

            <div
              className={`transition-all duration-1000 ease-out ${
                isVisible.faqSection
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-20"
              }`}
            >
              {/* FAQ List */}
              <div className="lg:w-[100%] md:w-[80%] w-full flex flex-col !gap-5 !py-10">
                {Faq?.map((item) => {
                  const isSelected = selected?.id === item?.id;

                  return (
                    <div key={item.id} className="rounded-xl overflow-hidden">
                      <p
                        className={`bg-[#A3B5FF] w-[3px] ${
                          isSelected ? "opacity-100" : "opacity-0"
                        }`}
                      ></p>

                      {/* Title Row */}
                      <div
                        className={`flex !p-3 justify-between items-center cursor-pointer transition-all duration-300 ${
                          isSelected
                            ? "bg-[#F8F7FD] border-l-4 border-[#2956A6]"
                            : "bg-[#FBFBFE] border-l-4 border-[#F1F2F9]"
                        }`}
                        onClick={() => {
                          setSelected(isSelected ? null : item);
                        }}
                      >
                        {isSelected ? (
                          <MdOutlineKeyboardArrowUp size={25} color="#170F49" />
                        ) : (
                          <MdOutlineKeyboardArrowDown
                            size={25}
                            color="#2956A6"
                          />
                        )}

                        <h2
                          className={`lg:text-[20px] md:text-[18px] sm:text-[16px] text-[14px] font-semibold w-full lg:!py-4 md:!py-4 !py-2 ${
                            isSelected ? "text-[#170F49]" : "text-[#2956A6]"
                          } font-poppins capitalize`}
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
                            className="overflow-hidden bg-[#F9F8FD] border-l-4 border-[#2956A6]"
                          >
                            <div>
                              <p className="lg:text-[16px] md:text-[16px] sm:text-[14px] text-[12px] text-[#6F6C8F] !px-10 !pb-5">
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
        </section>
      </div>
    </div>
  );
}

export default mortageLoan;
