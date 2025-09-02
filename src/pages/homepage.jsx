import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";
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
import { FaArrowRight } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import { Rate } from "antd";
import Faq from "./components/faq";
import OurServices from "./components/ourServices";
import Marquee from "react-fast-marquee";

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

const data2 = [
  {
    id: 1,
    value: "5",
    img: ava1,
    name: "Aarav Sharma",
    role: "Founder & CEO at FinEdge",
    description:
      "FinPoan simplified my entire investment journey. Their expert team guided me at every step, making finance truly stress-free.",
  },
  {
    id: 2,
    value: "5",
    img: ava2,
    name: "Priya Iyer",
    role: "Marketing Head at TechNova",
    description:
      "They provided a clear strategy that balanced growth with stability. I felt confident knowing my money was in safe hands.",
  },
  {
    id: 3,
    value: "5",
    img: ava3,
    name: "Rohan Verma",
    role: "CFO at MedCare Solutions",
    description:
      "What impressed me most was their customer-first approach. FinPoan’s platform makes complex financial planning seamless.",
  },
  {
    id: 4,
    value: "5",
    img: ava4,
    name: "Ananya Gupta",
    role: "Director at GreenLeaf Enterprises",
    description:
      "Their personalized planning helped me set realistic goals and achieve them faster than expected. Highly recommended!",
  },
  {
    id: 5,
    value: "5",
    img: ava5,
    name: "Vikram Singh",
    role: "Entrepreneur & Angel Investor",
    description:
      "I’ve worked with several financial advisors, but FinPoan stands out with their professionalism, accuracy, and long-term vision.",
  },
  {
    id: 6,
    value: "5",
    img: ava6,
    name: "Meera Reddy",
    role: "HR Head at FuturePath Global",
    description:
      "The team patiently explained every detail and ensured I understood where my money was going. That trust means everything.",
  },
  {
    id: 7,
    value: "5",
    img: ava2,
    name: "Siddharth Menon",
    role: "CTO at CloudBridge",
    description:
      "Thanks to FinPoan, I now have a diversified portfolio that grows steadily without unnecessary risks. Excellent service!",
  },
  {
    id: 8,
    value: "5",
    img: ava3,
    name: "Kavya Nair",
    role: "Business Consultant",
    description:
      "Their guidance gave me the confidence to start investing. The results have been fantastic, and the journey has been smooth.",
  },
  {
    id: 9,
    value: "5",
    img: ava4,
    name: "Arjun Desai",
    role: "Startup Founder at EduNext",
    description:
      "FinPoan’s expertise and proactive support helped me secure both my business finances and personal investments.",
  },
  {
    id: 10,
    value: "5",
    img: ava5,
    name: "Neha Kapoor",
    role: "Operations Manager at BrightWorks",
    description:
      "They crafted a plan that matched my financial aspirations. I truly appreciate their professionalism and customer care.",
  },
];

function Homepage() {
  const navigate = useNavigate();
  const sectionRef = useRef(null);

  useEffect(() => {
    const initAnimation = () => {
      if (window.innerWidth < 1024) {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        return;
      }

      const section = sectionRef.current;
      if (!section) return;
      const wrapper = section.querySelector(".wrapper");
      const items = wrapper?.querySelectorAll(".item") ?? [];
      if (items.length === 0) return;

      gsap.set(items, { yPercent: 150 });
      gsap.set(items[0], { yPercent: 0 });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          pin: true,
          start: "top top",
          end: () => `+=${items.length * 100}%`,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      items.forEach((item, index) => {
        timeline.to(item, { borderRadius: "10px" });
        if (index < items.length - 1) {
          timeline.to(items[index + 1], { yPercent: 0 }, "<");
        }
      });
    };

    initAnimation();
    window.addEventListener("resize", initAnimation);

    return () => {
      window.removeEventListener("resize", initAnimation);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div>
      {/* top section */}

      <section>
        <div className="lg:bg-banner bg-banner3 bg-cover h-[100vh] flex justify-center items-center">
          <div className=" flex items-center w-full h-full lg:!px-20 md:!px-15 !px-10 !py-25">
            <div>
              <h1 className="lg:text-[78px] md:text-[50px] text-[28px] font-bold text-white ">
                Secure Wealth,
                <br /> Smart Future
              </h1>
              <p className="lg:text-[24px] md:text-[22px] text-[18px] font-medium  text-white ">
                Build your savings with trusted financial solutions. From
                deposits <br /> to investments and tax strategies, we help you
                grow your wealth with <br /> clarity and confidence.
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

      {/* Our Services */}
      <section>
        <div>
          <OurServices />
        </div>
      </section>

      <div
        ref={sectionRef}
        className="scroll-section vertical-section"
        style={{
          height: "100vh",
          width: "100%",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <div className="wrapper ">
          {/* why choose us */}
          <section className="item h-[100vh] w-[100%] absolute top-0 left-0 justify-center items-center ">
            <div className=" bg-[#D9E9FF] rounded-4xl lg:!m-20 md:!m-15 !m-10 lg:!p-10 lg:!py-15 md:!p-10 !py-5 ">
              <div className="text-center ">
                <h1 className="relative inline-block lg:text-[20px] md:text-[20px] text-[18px]  font-semibold text-[#2956A6] z-10">
                  Why Choose Us
                  <span className="absolute left-0 bottom-1 w-full h-[30%] bg-[#DFAE51] z-[-1]"></span>
                </h1>
                <h2 className="lg:text-[50px] md:text-[35px] text-[25px] text-center font-bold  text-black !px-5 ">
                  why <span className="text-[#2956A6]">Devavratha </span> is the
                  right choice for you
                </h2>
              </div>
              {/* <div className="flex lg:flex-row md:flex-row flex-col gap-10 !mt-5 lg:!p-10 md:!p-10 !p-5 lg:w-[70%] md:w-[70%] !w-[90%] bg-white rounded-2xl !mx-auto ">
                <div className="!mt-5 lg:w-[70%] md:w-[70%] w-full ">
                  <h3 className="lg:text-[18px] md:text-[18px] text-[16px]  text-white bg-[#007DF2] rounded-tr-2xl w-fit !px-5 !py-2 ">
                    Strategize & Succeed
                  </h3>
                  <h2 className="lg:text-[50px] md:text-[35px] text-[20px]  text-black font-bold lg:leading-15  ">
                    Driving Success <br /> Through Strategic <br /> Guidance.
                  </h2>
                  <p className="lg:text-[18px] md:text-[18px] text-[16px]  text-[#666666]  ">
                    These services are tailored to meet the specific needs and
                    challenges of each client, providing valuable expertise and
                    support to drive business success.
                  </p>

                  <div className="flex lg:flex-row md:flex-row flex-col lg:gap-10 md:gap-10 gap-5 !mt-5 ">
                    <button className=" flex items-center rounded-lg bg-[#007DF2] text-white font-semibold text-[16px] justify-center lg:w-[30%] md:w-[30%] w-[100%] !py-3 cursor-pointer">
                      CONTACT US
                    </button>
                    <button className=" flex items-center rounded-lg bg-white text-[#007DF2] border-2 font-semibold text-[16px] justify-center lg:w-[30%] md:w-[30%] w-[100%] !py-3 cursor-pointer">
                      FREE CONSULT
                    </button>
                  </div>
                </div>
                <div className="lg:flex md:flex hidden !mt-5 ">
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
                          className="w-12 h-12 object-contain"
                        />
                      </div>

                      <div className=" ">
                        <h2 className="lg:text-[20px] md:text-[18px] text-[16px] text-black font-semibold mt-2">
                          {item.title}
                        </h2>
                        <p className="text-[#666] mt-2">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* how we do */}
          <section className="item h-[100vh] w-[100%] absolute top-0 left-0 justify-center items-center ">
            <div className=" bg-[#D9E9FF] flex lg:flex-row md:flex-col flex-col rounded-4xl lg:!m-20 md:!m-15 !m-10 !px-10 lg:!py-20 md:!py-20 !py-10 ">
              <div className="items-center justify- flex lg:w-[60%] md:w-[100%] w-[100%] ">
                <div>
                  <h1 className="relative inline-block lg:text-[20px] md:text-[20px] text-[18px]  font-semibold text-[#2956A6] z-10">
                    How We Do
                    <span className="absolute left-0 bottom-1 w-full h-[30%] bg-[#DFAE51] z-[-1]"></span>
                  </h1>

                  <h2 className="lg:text-[50px] md:text-[35px] text-[25px]  font-bold  text-black ">
                    The importance of
                    <br /> planning finances
                  </h2>
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

              <div className="!mt-5 lg:w-[50%] md:w-[100%] w-[100%] flex items-center justify-center ">
                <img src={img4} alt="" />
              </div>
            </div>
          </section>

          {/* Advantage */}
          <section className="item h-[100vh] w-[100%] absolute top-0 left-0 justify-center items-center ">
            <div className=" bg-[#D9E9FF] flex lg:flex-row md:flex-col flex-col rounded-4xl lg:!m-20 md:!m-15 !m-10 !px-10 lg:!py-10 md:!py-10 !py-10 gap-10 ">
              <div className="!mt-5 lg:w-[50%] md:w-[100%] w-[100%] ">
                <img
                  src={img5}
                  alt=""
                  className="flex items-center justify-center "
                />
              </div>
              <div className="items-center justify-center flex lg:w-[60%] md:w-[60%] w-[100%] ">
                <div>
                  <h1 className="relative inline-block lg:text-[20px] md:text-[20px] text-[18px] font-semibold text-[#2956A6] z-10">
                    Advantages
                    <span className="absolute left-0 bottom-1 w-full h-[30%] bg-[#DFAE51] z-[-1]"></span>
                  </h1>

                  <h2 className="lg:text-[50px] md:text-[35px] text-[25px]  font-bold  text-black ">
                    Safe Hands Leading Your Financial Journey
                  </h2>
                  <div>
                    {data1.map((item) => (
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
            </div>
          </section>
        </div>
      </div>

      {/* Comments */}

      <section>
        <Marquee pauseOnHover={true} speed={40}>
          <div className=" flex !gap-20 lg:!mx-10 md:!mx-15 !mx-10 !pb-10 ">
            {data2.map((item) => (
              <div
                key={item.id}
                className=" flex rounded-4xl lg:!p-10 md:!p-10 !p-5 border-2 border-[#D9E9FF] lg:w-100 md:w-100 w-80 h-80"
              >
                <div className=" ">
                  <div className="flex gap-5 items-center">
                    <div>
                      <img src={item.img} alt="" className="w-20 h-20" />
                    </div>
                    <div>
                      <p className="text-[#666] !mt-2">
                        <Rate disabled value={item.value} />
                      </p>
                      <h2 className="lg:text-[20px] md:text-[18px] text-[16px] text-black font-semibold mt-2">
                        {item.name}
                      </h2>
                      <p className="text-[#999999] !mt-2">{item.role}</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-[#666666] !mt-2">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Marquee>

        <Marquee pauseOnHover={true} speed={40} direction="right">
          <div className=" flex gap-20 lg:!mx-10 md:!mx-15 !mx-10 !pb-10">
            {data2.map((item) => (
              <div
                key={item.id}
                className=" flex rounded-4xl lg:!p-10 md:!p-10 !p-5 border-2 border-[#D9E9FF] lg:w-100 md:w-100 w-80 h-80"
              >
                <div className=" ">
                  <div className="flex gap-5 items-center">
                    <div>
                      <img src={item.img} alt="" className="w-20 h-20" />
                    </div>
                    <div>
                      <p className="text-[#666] !mt-2">
                        <Rate disabled value={item.value} />
                      </p>
                      <h2 className="lg:text-[20px] md:text-[18px] text-[16px] text-black font-semibold mt-2">
                        {item.name}
                      </h2>
                      <p className="text-[#999999] !mt-2">{item.role}</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-[#666666] !mt-2">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Marquee>
      </section>

      {/* <section>
                <div className='flex gap-10 lg:!mx-20 md:!mx-15 !mx-10 '>
                    <div className="bg-[#F8F4FF] !py-10 !px-5 ">
                        <div className="group overflow-hidden ">
                            <div className="flex lg:animate-none animate-loop-scroll-reverse sm:animate-loop-scroll-reverse space-x-16 min-w-max group gap-20 ">
                    {data2.map((item) => (
                        <div key={item.id} className=' flex rounded-4xl lg:!p-10 md:!p-10 !p-5 border-2 border-[#D9E9FF] '>
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
                </div>
                </div>
                </div>
                

                <div className='flex gap-10 lg:!mx-20 md:!mx-15 !mx-10 !pb-10'>
                    <div className="bg-[#F8F4FF] !py-10 !px-5 ">
                        <div className="group1  overflow-hidden ">
                            <div className="flex lg:animate-none animate-loop-scroll-reverse sm:animate-loop-scroll-reverse space-x-16 min-w-max group1-hover:paused gap-20 ">

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
                        </div>
                    </div>
                </div>
            </section> */}

      {/* faq */}
      <section>
        <div className=" ">
          <Faq />
        </div>
      </section>
    </div>
  );
}
export default Homepage;
