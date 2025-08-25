import React from "react";
import background from "../img/background.png";
import img4 from "../img/touch.png";
import { Formik, Form as FormikForm, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FaArrowRight } from "react-icons/fa";

function Contactus() {

  const initialValues = {
      name: "",
      email: "",
      message: "",
    };
  
    const TouchSchema = Yup.object().shape({
      name: Yup.string().required("Name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      message: Yup.string().required("Message is required"),
    })

  return (
    <div>
      <div className="w-full h-full ">
        <img src={background} alt="" className="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[600px] object-cover" />
        <div className="absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 justify-center items-center flex flex-col">
          <h2 className="text-[#2956A6] text-[50px]">Contact us</h2>
          <h3 className="text-[#D8D8D8] text-[20px] text-center !py-7">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum doloreaeu fugiat nulla pariatur.
          </h3>
          <div className="bg-[#FFFFFF] flex !p-3 rounded-[30px] cursor-pointer">
            <span className="flex items-center gap-2">
              Home
              <FaArrowRight />
              <span className="text-[#2956A6]">Contact us</span>
            </span>
          </div>
        </div>
      </div>

      <section>

        <div className="!px-10 lg:!px-15 !p-10">
          <div className="flex flex-col items-center justify-center">
            <h1 className="relative inline-block lg:text-[20px] md:text-[20px] text-[18px]  font-semibold text-[#2956A6] z-10">
              Contact Us
              <span className="absolute left-0 bottom-1 w-full h-[30%] bg-[#DFAE51] z-[-1]"></span>
            </h1>
            <p className="lg:text-[44px] md:text-[35px] text-[25px] font-bold font-manrope text-black">
              Get in Touch
            </p>
            <p className="lg:text-[20px] md:text-[18px] text-[16px] font-medium text-[#666666] !py-4 text-center w-[80%]">
              Please feel free to contact us through our support center. Simply choose the appropriate support options to send us your questions,
              concerns and feedback.Our customer service team is ready to overcome any issues that might occur.
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 lg:!gap-12">

            {/* Left - Image */}
            <div className="flex justify-center items-center w-full md:w-1/2">
              <img src={img4} alt="" className="max-w-full h-auto" />
            </div>

            {/* Right - Form */}
            <div className="w-full md:w-1/2 relative shadow-2xl !p-10 rounded-xl ">
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
                          className="peer w-full focus:bg-white border-b-1 text-gray-900 text-md !px-3 !py-3 focus:outline-none focus:border-b-2  focus:border-b-[#2956A6] "
                        />
                        <ErrorMessage name="name" component="div" className="text-red-500 text-sm !pt-2" />
                      </div>

                      {/* Email Field */}
                      <div className="relative w-full">
                        <Field
                          type="email"
                          name="email"
                          id="email"
                          placeholder="Email * "
                          className=" w-full focus:bg-white border-b-1 text-gray-900 text-md  !px-3 !py-3 focus:outline-none focus:border-b-2  focus:border-b-[#2956A6]"
                        />
                        <ErrorMessage name="email" component="div" className="text-red-500 text-sm !pt-2" />
                      </div>

                      {/* Message Field */}
                      <div className="relative w-full">
                        <Field
                          as="textarea"
                          name="message"
                          id="message"
                          rows={5}
                          placeholder="Message * "
                          className="peer w-full focus:bg-white border-b-1 text-gray-900 text-md  !px-3 !py-3 focus:outline-none focus:border-b-2  focus:border-b-[#2956A6]"
                        />
                        <ErrorMessage name="message" component="div" className="text-red-500 text-sm !pt-2" />
                      </div>

                      {/* Submit Button */}
                      <div
                        // onClick={() => navigate("/")}
                        className="group flex justify-center items-center rounded-xl bg-[#2956A6] text-white
                   lg:h-15 lg:w-50 h-10 md:h-12 md:w-40 w-40 cursor-pointer transition-colors duration-300
                   hover:bg-white hover:text-[#2956A6] hover:border-2 hover:border-[#2956A6] !gap-2"
                      >
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

      </section>
    </div>
  );
}

export default Contactus;
