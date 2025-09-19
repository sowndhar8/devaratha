import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";
import img4 from "../img/we-do.png";
import img5 from "../img/advantage.png";
import comp1 from "../img/Component 1.png";
import comp2 from "../img/Component 2.png";
import comp3 from "../img/Component 3.png";
import comp4 from "../img/Component 4.png";
import comp5 from "../img/Component 5.png";
import comp6 from "../img/Component 6.png";
import { FaCircleCheck } from "react-icons/fa6";
import Faq from "./components/faq";
import OurServices from "./components/ourServices";
import AboutUsHomePage from "./components/AboutUsHomePage";
import Comments from "./components/comments";

gsap.registerPlugin(ScrollTrigger);

const choose = [
  {
    id: 1,
    img: comp1,
    title: "Trusted Expertise",
    description:
      "Years of experience guiding clients toward secure and profitable financial choices.",
  },
  {
    id: 2,
    img: comp2,
    title: "Personalized Solutions",
    description:
      "Tailored strategies designed to match your unique goals and lifestyle.",
  },
  {
    id: 3,
    img: comp3,
    title: "Transparent Process",
    description: "Clear, honest advice with no hidden terms or surprises.",
  },
  {
    id: 4,
    img: comp4,
    title: "Comprehensive Services",
    description: "From deposits to tax planning, everything under one roof.",
  },
  {
    id: 5,
    img: comp5,
    title: "Reliable Support",
    description:
      "Dedicated assistance whenever you need financial clarity or guidance.",
  },
  {
    id: 6,
    img: comp6,
    title: "Proven Results",
    description:
      "A track record of helping individuals and businesses grow their wealth.",
  },
];

const data = [
  {
    id: 1,
    title: "Understanding Your Goal",
    description:
      "We begin by listening to your needs and financial aspirations.",
  },
  {
    id: 2,
    title: "Crafting the Right Plan",
    description:
      "Our experts design tailored strategies that align with your objectives.",
  },
  {
    id: 3,
    title: "Guiding Every Step",
    description:
      "We provide continuous support to keep you on track toward success.",
  },
];

const data1 = [
  {
    id: 1,
    title: "Safe & Secure Investments",
    description:
      "We prioritize reliability to protect your money at every step.",
  },
  {
    id: 2,
    title: "Expert Financial Guidance",
    description:
      "Our team offers trusted advice backed by years of experience.",
  },
  {
    id: 3,
    title: "Hassle-Free Process",
    description:
      "Simple, transparent, and easy solutions for all your financial needs.",
  },
];

function Homepage() {
  const navigate = useNavigate();
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const wrapper = section.querySelector(".wrapper");
    const items = wrapper?.querySelectorAll(".item") ?? [];
    if (items.length === 0) return;

    // Check screen size
    const isMobile = window.innerWidth < 768;

    if (isMobile) {
      // ❌ Do nothing (no animation on mobile)
      return;
    }

    // ✅ Desktop: full-page pinned scroll
    items.forEach((item, index) => {
      gsap.set(item, {
        yPercent: index === 0 ? 0 : 150,
      });
    });

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        pin: true,
        start: "top top",
        end: () => `+=${items.length * 100}%`,
        scrub: 1,
        invalidateOnRefresh: true,
      },
      defaults: { ease: "none" },
    });

    items.forEach((item, index) => {
      timeline.to(item, { borderRadius: "10px" });
      if (index < items.length - 1) {
        timeline.to(items[index + 1], { yPercent: 0 }, "<");
      }
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div>
      {/* top section */}

      <section>
        <div className="relative lg:bg-banner md:bg-banner bg-banner3 bg-cover h-[100vh] items-center justify-center">
          <div className=" flex items-center w-full h-full lg:!px-20 md:!px-15 !px-10 !py-25">
            <div>
              <h1 className="lg:text-[78px] md:text-[50px] text-[28px] font-bold text-white ">
                Secure Wealth,
                <br /> Smart Future
              </h1>
              <p className="lg:text-[24px] md:text-[22px] text-[18px] font-medium lg:w-[50%]  text-white ">
                Build your savings with trusted financial solutions. From
                deposits to investments and tax strategies, we help you grow
                your wealth with <br /> clarity and confidence.
              </p>
              <button
                onClick={() => navigate("/Contactus")}
                className="bg-[#DFAE51] text-[#2956A6] !px-10 !py-4 rounded-lg !mt-12 text-[16px] font-semibold cursor-pointer"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* aboutus */}
      <section>
        <div>
          <AboutUsHomePage />
        </div>
      </section>

      {/* Our Services */}
      <section>
        <div>
          <OurServices />
        </div>
      </section>

      <div
        ref={sectionRef}
        className="scroll-section vertical-section
                   w-full
                   lg:h-[100vh] h-auto
                   lg:overflow-hidden overflow-visible
                   lg:relative"
      >
        <div className="wrapper relative w-full lg:h-[100vh] h-auto">
          {/* why choose us */}
          <section className="item lg:h-[100vh] h-auto w-full lg:absolute lg:top-0 lg:left-0 relative flex justify-center items-center">
            <div className=" bg-[#D9E9FF] rounded-4xl lg:!m-20 md:!m-15 !m-10 lg:!p-10 lg:!py-15 md:!p-10 !py-5 ">
              <div className="text-center ">
                <h2 className="relative inline-block lg:text-[20px] md:text-[20px] text-[18px]  font-semibold text-[#2956A6] z-10">
                  Why Choose Us
                  <span className="absolute left-0 bottom-1 w-full h-[30%] bg-[#DFAE51] z-[-1]"></span>
                </h2>
                <h3 className="lg:text-[50px] md:text-[35px] text-[25px] text-center font-bold  text-black !px-5 ">
                  why <span className="text-[#2956A6]">Devaratha </span> is the
                  right choice for you
                </h3>
              </div>
              {/* <div className='flex lg:flex-row md:flex-row flex-col gap-10 !mt-5 lg:!p-10 md:!p-10 !p-5 lg:w-[70%] md:w-[70%] !w-[90%] bg-white rounded-2xl !mx-auto '>
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
                        </div> */}
              <div className="!mt-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 lg:!p-10 md:!p-10  ">
                {choose.map((item) => (
                  <div key={item.id} className=" !p-5 ">
                    <div className="grid lg:grid-cols-[auto_1fr] md:grid-cols-[auto_1fr] grid-cols-1 items-center gap-4 ">
                      <div className="w-20 h-20 flex items-center justify-center bg-white rounded-full">
                        <img
                          src={item.img}
                          alt={item.title}
                          title="Devavratha Loan Service"
                          className="w-12 h-12 object-contain"
                        />
                      </div>

                      <div className=" ">
                        <h3 className="lg:text-[20px] md:text-[18px] text-[16px] text-black font-semibold mt-2">
                          {item.title}
                        </h3>
                        <p className="text-[#666] mt-2">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* how we do */}
          <section className="item lg:h-[100vh] h-auto w-full lg:absolute lg:top-0 lg:left-0 relative justify-center items-center">
            <div className=" bg-[#D9E9FF] flex lg:flex-row md:flex-col flex-col rounded-4xl lg:!m-20 md:!m-15 !m-10 !px-10 lg:!py-20 md:!py-20 !py-10 ">
              <div className="items-center justify-center flex lg:w-[60%] md:w-[100%] w-[100%] ">
                <div>
                  <h2 className="relative inline-block lg:text-[20px] md:text-[20px] text-[18px]  font-semibold text-[#2956A6] z-10">
                    How We Do
                    <span className="absolute left-0 bottom-1 w-full h-[30%] bg-[#DFAE51] z-[-1]"></span>
                  </h2>

                  <h3 className="lg:text-[50px] md:text-[35px] text-[25px]  font-bold  text-black ">
                    The importance of planning finances
                  </h3>
                  <div>
                    {data.map((item) => (
                      <div key={item.id} className=" mt-5 !py-5 ">
                        <div className="flex items-center gap-10 ">
                          <div className=" ">
                            <div className="flex gap-5 items-center">
                              <FaCircleCheck className="text-[#2956A6] mt-5 text-[20px] md:text-[20px] lg:text-[20px]" />
                              <h2 className="lg:text-[20px] md:text-[18px] text-[16px] text-black font-semibold mt-2">
                                {item.title}
                              </h2>
                            </div>
                            <p className="text-[#666] !mt-2 !px-10">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="!mt-5 lg:w-[40%] md:w-[100%] w-[100%] ">
                <img
                  src={img4}
                  alt="Devavratha Loan Service"
                  title="Devavratha Loan Service"
                />
              </div>
            </div>
          </section>

          {/* Advantage */}
          <section className="item lg:h-[100vh] h-auto w-full lg:absolute lg:top-0 lg:left-0 relative justify-center items-center">
            <div className=" bg-[#D9E9FF] flex lg:flex-row md:flex-col flex-col rounded-4xl lg:!m-20 md:!m-15 !m-10 !px-10 lg:!py-10 md:!py-10 !py-10 gap-10 ">
              <div className="!mt-5 lg:w-[40%] md:w-[100%] w-[100%] ">
                <img
                  src={img5}
                  alt="Devavratha Loan Service"
                  title="Devavratha Loan Service"
                />
              </div>
              <div className="items-center justify-center flex lg:w-[60%] md:w-[60%] w-[100%] ">
                <div>
                  <h2 className="relative inline-block lg:text-[20px] md:text-[20px] text-[18px] font-semibold text-[#2956A6] z-10">
                    Advantages
                    <span className="absolute left-0 bottom-1 w-full h-[30%] bg-[#DFAE51] z-[-1]"></span>
                  </h2>

                  <h3 className="lg:text-[50px] md:text-[35px] text-[25px]  font-bold  text-black ">
                    Safe Hands Leading Your Financial Journey
                  </h3>
                  <div>
                    {data1.map((item) => (
                      <div key={item.id} className=" mt-5 !py-5 ">
                        <div className="flex items-center gap-10 ">
                          <div className=" ">
                            <div className="flex gap-5 items-center">
                              <FaCircleCheck className="text-[#2956A6] mt-5 text-[20px] md:text-[20px] lg:text-[20px]" />
                              <h3 className="lg:text-[20px] md:text-[18px] text-[16px] text-black font-semibold mt-2">
                                {item.title}
                              </h3>
                            </div>
                            <p className="text-[#666] !mt-2 !px-10">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Comments */}

      <section>
        <Comments />
      </section>

      {/* faq */}
      <section>
        <Faq />
      </section>
    </div>
  );
}
export default Homepage;
