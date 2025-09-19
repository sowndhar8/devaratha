import { useRef, useEffect, useState } from "react";
import { FaArrowRight, FaCheck } from "react-icons/fa";
import img1 from "../img/aboutus-bg.png";
import img2 from "../img/mission.png";
import img3 from "../img/start.png";
import img4 from "../img/touch.png";
import Progress from "./components/progress";
import { Formik, Form as FormikForm, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { FaCircleCheck } from "react-icons/fa6";

function Aboutus() {
  const isHovered = false;
  const navigate = useNavigate();
  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  const TouchSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    message: Yup.string().required("Message is required"),
  });

  // Refs for the sections we want to animate
  const missionSectionRef = useRef(null);
  const startSectionRef = useRef(null);
  const contactSectionRef = useRef(null);

  // State to track which sections are visible
  const [isVisible, setIsVisible] = useState({
    mission: false,
    start: false,
    contact: false,
  });

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2, // Trigger when 20% of the element is visible
      rootMargin: "0px 0px -10% 0px",
    };

    const observers = [];
    const lastScrollY = { current: window.scrollY }; // Store the last scroll position

    const handleIntersect = (entries, observerName) => {
      entries.forEach((entry) => {
        const currentScrollY = window.scrollY;
        const scrollingDown = currentScrollY > lastScrollY.current;

        if (entry.isIntersecting && scrollingDown) {
          // only trigger animation when scrolling down into the section
          setIsVisible((prev) => ({
            ...prev,
            [observerName]: true,
          }));
        }
      });
    };

    // Create separate observers for each section
    if (missionSectionRef.current) {
      const observer = new IntersectionObserver(
        (entries) => handleIntersect(entries, "mission"),
        observerOptions
      );
      observer.observe(missionSectionRef.current);
      observers.push(observer);
    }

    if (startSectionRef.current) {
      const observer = new IntersectionObserver(
        (entries) => handleIntersect(entries, "start"),
        observerOptions
      );
      observer.observe(startSectionRef.current);
      observers.push(observer);
    }

    if (contactSectionRef.current) {
      const observer = new IntersectionObserver(
        (entries) => handleIntersect(entries, "contact"),
        observerOptions
      );
      observer.observe(contactSectionRef.current);
      observers.push(observer);
    }

    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsVisible({
          mission: false,
          start: false,
          contact: false,
        });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      observers.forEach((observer) => observer.disconnect());
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="relative bg-banner2 bg-cover h-[50vh] items-center justify-center">
        <div className="absolute lg:top-[50%] md:top-[50%] top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 justify-center items-center flex flex-col">
          <h2 className="text-[#2956A6] lg:text-[50px] md:text-[50px] text-[35px] text-center">
            About Us
          </h2>
          <h3 className="text-[#D8D8D8] lg:text-[20px] md:text-[18px] text-[16px] text-center tracking-wider !py-7">
            Our journey is driven by passion, trust, and a commitment to
            excellence.
          </h3>
        </div>
      </div>

      {/* About Section */}
      <section>
        <div>
          <div className="lg:!px-20 md:!px-20 !px-10 !py-10 grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 justify-evenly items-center">
            <div className="flex justify-center">
              <img src={img1} alt="About Us" title="Devavratha Loan Service" className="w-full max-w-md" />
            </div>
            <div className="flex justify-center items-center">
              <div>
                <h3 className="relative inline-block lg:text-[20px] md:text-[20px] text-[18px] font-semibold text-[#2956A6] ">
                  About Us
                  <span className="absolute left-0 bottom-1 w-full h-[30%] bg-[#DFAE51] -z-10"></span>
                </h3>

                <h4 className="lg:text-[50px] md:text-[35px] text-[25px] font-bold text-black ">
                  Your Trusted Advisors <br /> in
                  <span className="text-[#2956A6]"> Business Success.</span>
                </h4>
                <p className="lg:text-[18px] md:text-[18px] text-[16px] text-[#666666] lg:leading-10 md:leading-8 leading-8 lg:w-[80%] md:w-[80%] w-full text-justify">
                  we understand the challenges and complexities that businesses
                  face in today's dynamic marketplace. That's why we offer a
                  comprehensive suite of consulting services.
                </p>
                <div className="!mt-5 ">
                  <button className="flex items-center rounded-4xl bg-[#2956A6] text-white font-semibold text-[16px] !px-5 !py-2 cursor-pointer transition-transform duration-300 hover:scale-105">
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
                    <FaCircleCheck className="text-[#2956A6] text-[20px] md:text-[20px] lg:text-[20px]" />
                    <span className="text-[#666666] ">
                      Client-Centric Approach
                    </span>
                  </div>
                  <div className="!mt-5 flex !gap-5 items-center">
                    <FaCircleCheck className="text-[#2956A6] text-[20px] md:text-[20px] lg:text-[20px]" />
                    <span className="text-[#666666] ">
                      Best Financial Solutions
                    </span>
                  </div>
                  <div className="!mt-5 flex !gap-5 items-center">
                    <FaCircleCheck className="text-[#2956A6] text-[20px] md:text-[20px] lg:text-[20px]" />
                    <span className="text-[#666666] ">Expert Guidance</span>
                  </div>
                  <div className="!mt-5 flex !gap-5 items-center">
                    <FaCircleCheck className="text-[#2956A6] text-[20px] md:text-[20px] lg:text-[20px]" />
                    <span className="text-[#666666] ">
                      Commitment to Integrity
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <div section>
        <div ref={missionSectionRef}>
          <div className="lg:!px-20 md:!px-20 !px-10 !py-10 grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 !gap-10 justify-evenly items-center bg-[#F4FAFF]">
            <div
              className={` transition-all duration-1000 ease-out ${
                isVisible.mission
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-20"
              }`}
            >
              <div>
                <h3 className="relative inline-block lg:text-[20px] md:text-[20px] text-[18px] font-semibold text-[#2956A6] z-0 ">
                  Our Mission
                  <span className="absolute left-0 bottom-1 w-full h-[30%] bg-[#DFAE51] -z-10"></span>
                </h3>

                <h4 className="lg:text-[50px] md:text-[35px] text-[25px] font-bold text-black ">
                  Boosting Your <br />
                  <span className="text-[#2956A6]">Financial Knowledge</span>
                </h4>
                <p className="lg:text-[18px] md:text-[18px] text-[16px] text-[#666666] lg:leading-10 md:leading-8 leading-8 lg:w-[80%] md:w-[80%] w-full text-justify">
                  Delivers a clear summary of vital metrics and trends that
                  define your financial landscape. This section emphasizes
                  crucial data, performance indicators, and market insights to
                  support decision.
                </p>
                <div className="!mt-5">
                  <Progress />
                </div>
              </div>
            </div>
            <div
              className={`flex justify-center transition-all duration-1000 ease-out ${
                isVisible.mission
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-20"
              }`}
            >
              <img src={img2} alt="Our Mission" title="Devavratha Loan Service" className="w-full max-w-md rounded-lg" />
            </div>
          </div>
        </div>
      </div>

      {/* Start Section */}
      <section className="!pb-10">
        <div ref={startSectionRef}>
          <div className="flex justify-center !mt-10">
            {/* Background image */}
            <img
              src={img3}
              alt=""
              className="absolute w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover -z-10"
            />

            {/* Content */}
            <div className="relative flex flex-col items-center justify-center !px-4 sm:!px-6 lg:!px-15 !py-10 md:!py-25 lg:!py-auto">
              <p className="text-white text-[15px] md:text-[20px] lg:text-[25px] font-manrope text-center font-bold leading-8 md:leading-10">
                Start Now
              </p>
              <p className="text-[20px] md:text-[35px] lg:text-[57px] font-bold font-manrope text-center text-white !mb-10 md:!mb-12 lg:!mb-16">
                Ready to Transform Your <br />
                Financial Future With Us?
              </p>

              {/* Button */}
              <div className="flex justify-center">
                <button
                  onClick={() => navigate("/contactus")}
                  className="group flex justify-center items-center bg-[#2956A6] text-white
                     lg:h-15 lg:w-40 h-10 md:h-12 md:w-40 w-40 cursor-pointer transition-colors duration-300
                     hover:bg-white hover:text-[#2956A6] !gap-2 rounded-4xl font-semibold hover:scale-105"
                >
                  Get Started
                  <FaArrowRight
                    size={30}
                    className="!ml-2 text-[#2956A6] bg-white rounded-full !p-2 transition-colors duration-300 group-hover:text-white group-hover:bg-[#2956A6]"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section>
        <div className="!px-10 lg:!px-15 !p-10">
          <div ref={contactSectionRef}>
            <div
              className={`transition-all duration-1000 ease-out ${
                isVisible.contact
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-20"
              }`}
            >
              <div className="flex flex-col items-center justify-center">
                <h3 className="relative inline-block lg:text-[20px] md:text-[20px] text-[18px] font-semibold text-[#2956A6] z-10">
                  Contact Us
                  <span className="absolute left-0 bottom-1 w-full h-[30%] bg-[#DFAE51] z-[-1]"></span>
                </h3>
                <p className="lg:text-[44px] md:text-[35px] text-[25px] font-bold font-manrope text-black">
                  Get in Touch
                </p>
                <p className="lg:text-[20px] md:text-[18px] text-[16px] font-medium text-[#666666] !py-4 text-center w-[80%]">
                  Please feel free to contact us through our support center.
                  Simply choose the appropriate support options to send us your
                  questions, concerns and feedback.Our customer service team is
                  ready to overcome any issues that might occur.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 lg:!gap-12 mt-10">
              {/* Left - Image */}
              <div
                className={`flex justify-center items-center w-full md:w-1/2 transition-all duration-1000 ease-out ${
                  isVisible.contact
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-20"
                }`}
              >
                <img src={img4} alt="Contact Us" title="Devavratha Loan Service" className="max-w-full h-auto" />
              </div>

              {/* Right - Form */}
              <div
                className={`w-full md:w-1/2 relative shadow-2xl !p-10 rounded-xl transition-all duration-1000 ease-out ${
                  isVisible.contact
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-20"
                }`}
              >
                <p className="lg:text-[24px] md:text-[20px] text-[18px] font-semibold text-black">
                  Send Us a Message
                </p>
                <div className="!py-4">
                  <Formik
                    initialValues={{ name: "", email: "", message: "" }}
                    validationSchema={TouchSchema}
                    onSubmit={(values, { resetForm }) => {
                      console.log("Form Submitted", values);
                      resetForm();
                    }}
                  >
                    {() => (
                      <FormikForm className="flex flex-col !gap-6">
                        {/* Name Field */}
                        <div className="relative w-full">
                          <Field
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Name * "
                            className="peer w-full focus:bg-white border-b-1 text-gray-900 text-md !px-3 !py-3 focus:outline-none focus:border-b-2 focus:border-b-[#2956A6]"
                          />
                          <ErrorMessage
                            name="name"
                            component="div"
                            className="text-red-500 text-sm !pt-2"
                          />
                        </div>

                        {/* Email Field */}
                        <div className="relative w-full">
                          <Field
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email * "
                            className="w-full focus:bg-white border-b-1 text-gray-900 text-md !px-3 !py-3 focus:outline-none focus:border-b-2 focus:border-b-[#2956A6]"
                          />
                          <ErrorMessage
                            name="email"
                            component="div"
                            className="text-red-500 text-sm !pt-2"
                          />
                        </div>

                        {/* Message Field */}
                        <div className="relative w-full">
                          <Field
                            as="textarea"
                            name="message"
                            id="message"
                            rows={5}
                            placeholder="Message * "
                            className="peer w-full focus:bg-white border-b-1 text-gray-900 text-md !px-3 !py-3 focus:outline-none focus:border-b-2 focus:border-b-[#2956A6]"
                          />
                          <ErrorMessage
                            name="message"
                            component="div"
                            className="text-red-500 text-sm !pt-2"
                          />
                        </div>

                        {/* Submit Button */}
                        <div className="group flex justify-center items-center rounded-xl bg-[#2956A6] text-white lg:h-15 lg:w-50 h-10 md:h-12 md:w-40 w-40 cursor-pointer transition-colors duration-300 hover:bg-white hover:text-[#2956A6] hover:border-2 hover:border-[#2956A6] hover:scale-105 !gap-2">
                          <button className="lg:text-[22px] font-semibold md:text-[16px] text-[14px] transition-colors duration-300">
                            Submit Now
                          </button>
                        </div>
                      </FormikForm>
                    )}
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Aboutus;
