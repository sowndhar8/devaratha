import React from "react";
import img4 from "../img/touch.png";
import { Formik, Form as FormikForm, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

function Enquire() {
  const initialValues = {
    name: "",
    email: "",
    service: "",
    message: "",
  };

  const TouchSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    service: Yup.string().required("Service is required"),
    message: Yup.string().required("Message is required"),
  });

  return (
    <div>
      <div className="relative bg-banner2 bg-cover h-[50vh] items-center justify-enter">
        <div className="absolute top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 justify-center items-center flex flex-col">
          <h2 className="text-[#2956A6] lg:text-[50px] md:text-[50px] text-[35px]">
            Enquire
          </h2>
          <h3 className="text-[#D8D8D8] lg:text-[20px] md:text-[18px] text-[16px] tracking-wider text-center !py-7">
           Fill out the enquiry form to get quick assistance from our team. Provide your details, and we’ll get back to you shortly
          </h3>
        </div>
      </div>

      <section>
        <div className="!px-10 lg:!px-15 !p-10">
          <div className="flex flex-col items-center justify-center">
            <h1 className="relative inline-block lg:text-[20px] md:text-[20px] text-[18px]  font-semibold text-[#2956A6] z-10">
              Enquiry Form
              <span className="absolute left-0 bottom-1 w-full h-[30%] bg-[#DFAE51] z-[-1]"></span>
            </h1>
            <p className="lg:text-[44px] md:text-[35px] text-[25px] font-bold font-manrope text-black">
              Enquire for Service
            </p>
            <p className="lg:text-[20px] md:text-[18px] text-[16px] font-medium text-[#666666] !py-4 text-center w-[80%]">
              Please feel free to contact us through our support center. Simply
              choose the appropriate support options to send us your questions,
              concerns and feedback.Our customer service team is ready to
              overcome any issues that might occur.
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 lg:!gap-12">
            {/* Left - Image */}
            <div className="flex justify-center items-center w-full md:w-1/2">
              <img src={img4} alt="" className="max-w-full h-auto" />
            </div>

            {/* Right - Form */}
            <div className="w-full md:w-1/2  shadow-2xl !p-10 rounded-xl ">
              <p className="lg:text-[24px] md:text-[20px] text-[18px] font-semibold text-black">
                Enquire
              </p>
              <div className="!py-4">
                <Formik
                  initialValues={{
                    name: "",
                    email: "",
                    service: "",
                    message: "",
                  }}
                  validationSchema={TouchSchema}
                  onSubmit={(values, { resetForm }) => {
                    const serviceId = "service_y4cv8mg";
                    const templateId = "template_gtp26kl";
                    const publicKey = "xgdv_LIi48-pDVLg8";

                    const templateparams = {
                      formType: "Enquiry",
                      name: values.name,
                      email: values.email,
                      service: values.service,
                      message: values.message,
                    };

                    emailjs
                      .send(serviceId, templateId, templateparams, publicKey)
                      .then((response) => {
                        console.log("Email sent successfully", response);
                        toast.success("Email sent successfully");
                        resetForm();
                      })
                      .catch((error) => {
                        console.error("Email error", error);
                        toast.error("Failed to send email");
                      });
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
                          className=" w-full focus:bg-white border-b-1 text-gray-900 text-md  !px-3 !py-3 focus:outline-none focus:border-b-2  focus:border-b-[#2956A6]"
                        />
                        <ErrorMessage
                          name="email"
                          component="div"
                          className="text-red-500 text-sm !pt-2"
                        />
                      </div>

                      {/* Service Field */}
                      <div className="relative w-full">
                        <Field
                          as="select"
                          name="service"
                          id="service"
                          placeholder="Service Looking for "
                          className="peer w-full focus:bg-white border-b-1 text-gray-900 text-md !px-2 !py-3 focus:outline-none focus:border-b-2  focus:border-b-[#2956A6]"
                        >
                          <option
                            className="text-sm text-[#666666]"
                            selected
                            hidden
                          >
                            Service Looking For
                          </option>
                          <option value="Gold Loan" className="text-sm ">
                            Gold Loan
                          </option>
                          <option value="Personal Loan" className="text-sm ">
                            Personal Loan
                          </option>
                          <option value="Mortage Loan" className="text-sm ">
                            Mortage Loan
                          </option>
                          <option value="Business Loan" className="text-sm ">
                            Business Loan
                          </option>
                        </Field>
                        <ErrorMessage
                          name="service"
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
                          className="peer w-full focus:bg-white border-b-1 text-gray-900 text-md  !px-3 !py-3 focus:outline-none focus:border-b-2  focus:border-b-[#2956A6]"
                        />
                        <ErrorMessage
                          name="message"
                          component="div"
                          className="text-red-500 text-sm !pt-2"
                        />
                      </div>

                      {/* Submit Button */}
                      <div className="group flex justify-center items-center rounded-xl bg-[#2956A6] text-white lg:h-15 lg:w-50 h-10 md:h-12 md:w-40 w-40 cursor-pointer transition-colors duration-300 hover:bg-white hover:text-[#2956A6] hover:border-2 hover:border-[#2956A6] !gap-2"
                      >
                        <button
                          type="submit"
                          className="lg:text-[22px] font-semibold group-hover:cursor-pointer md:text-[16px] text-[14px] transition-colors duration-300 "
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

export default Enquire;
