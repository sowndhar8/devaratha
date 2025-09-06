import React, { useRef, useEffect, useState } from "react";
import img4 from "../img/touch.png";
import { Formik, Form as FormikForm, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function Contactus() {
  const contactSectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const TouchSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    message: Yup.string().required("Message is required"),
  });

  useEffect(() => {
    const observerOptions = { threshold: 0.2 };

    const handleIntersect = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    if (contactSectionRef.current) observer.observe(contactSectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      {/* Hero Banner */}
      <div className="relative bg-banner2 bg-cover h-[50vh] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-[#2956A6] lg:text-[50px] md:text-[50px] text-[35px]">
            Contact us
          </h2>
          <h3 className="text-[#D8D8D8] lg:text-[20px] md:text-[18px] text-[16px] tracking-wider !py-7">
            We’re just one text away. Join us and let’s shape your financial
            future together!
          </h3>
        </div>
      </div>

      {/* Contact Section */}
      <section ref={contactSectionRef}>
        <div className="!px-10 lg:!px-15 !py-10">
          <div
            className={`flex flex-col items-center justify-center transform transition-all duration-1000 ease-out
            ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="relative inline-block lg:text-[20px] text-[18px] font-semibold text-[#2956A6] z-10">
              Contact Us
              <span className="absolute left-0 bottom-1 w-full h-[30%] bg-[#DFAE51] z-[-1]"></span>
            </h1>
            <p className="lg:text-[44px] md:text-[35px] text-[25px] font-bold text-black">
              Get in Touch
            </p>
            <p className="lg:text-[20px] md:text-[18px] text-[16px] font-medium text-[#666666] !py-4 text-center w-[80%]">
              Please feel free to contact us through our support center. Our
              customer service team is ready to overcome any issues that might
              occur.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center !gap-8 lg:!gap-12">
            {/* Left - Image */}
            <div
              className={`flex justify-center items-center w-full md:w-1/2 transform transition-all duration-1000 ease-out
              ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-20"
              }`}
            >
              <img
                src={img4}
                alt="Get in touch"
                className="max-w-full h-auto"
              />
            </div>

            {/* Right - Form */}
            <div
              className={`w-full md:w-1/2 shadow-2xl !p-10 rounded-xl transform transition-all duration-1000 ease-out
              ${
                isVisible
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
                      <div className="relative w-full">
                        <Field
                          type="text"
                          name="name"
                          placeholder="Name * "
                          className="w-full border-b text-md !px-3 !py-3 focus:outline-none focus:border-b-2 focus:border-[#2956A6]"
                        />
                        <ErrorMessage
                          name="name"
                          component="div"
                          className="text-red-500 text-sm !pt-2"
                        />
                      </div>

                      <div className="relative w-full">
                        <Field
                          type="email"
                          name="email"
                          placeholder="Email * "
                          className="w-full border-b text-md !px-3 !py-3 focus:outline-none focus:border-b-2 focus:border-[#2956A6]"
                        />
                        <ErrorMessage
                          name="email"
                          component="div"
                          className="text-red-500 text-sm !pt-2"
                        />
                      </div>

                      <div className="relative w-full">
                        <Field
                          as="textarea"
                          name="message"
                          rows={5}
                          placeholder="Message * "
                          className="w-full border-b text-md !px-3 !py-3 focus:outline-none focus:border-b-2 focus:border-[#2956A6]"
                        />
                        <ErrorMessage
                          name="message"
                          component="div"
                          className="text-red-500 text-sm !pt-2"
                        />
                      </div>

                      <div className="group flex justify-center items-center rounded-xl bg-[#2956A6] text-white lg:!h-15 lg:!w-50 !h-10 md:!h-12 md:!w-40 !w-40 cursor-pointer transition-all duration-300 hover:bg-white hover:text-[#2956A6] hover:border-2 hover:border-[#2956A6] !gap-2">
                        <button
                          type="submit"
                          className="lg:text-[22px] font-semibold md:text-[16px] text-[14px] transition-colors duration-300"
                        >
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
      </section>
    </div>
  );
}

export default Contactus;
