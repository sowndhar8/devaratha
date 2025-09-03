import React from "react";
import ava1 from "../../img/avatar-1.png";
import ava2 from "../../img/avatar-2.png";
import ava3 from "../../img/avatar-3.png";
import ava4 from "../../img/avatar-4.png";
import ava5 from "../../img/avatar-5.png";
import ava6 from "../../img/avatar-6.png";
import Marquee from "react-fast-marquee";
import { Rate } from "antd";




const comment = [
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

function Comments() {
  return (
    <div>
      <section>
        <Marquee pauseOnHover={true} speed={40}>
          <div className=" flex !gap-20 lg:!mx-10 md:!mx-15 !mx-10 !pb-10 ">
            {comment.map((item) => (
              <div
                key={item.id}
                className=" flex rounded-4xl lg:!p-10 md:!p-10 !p-5 border-2 border-[#D9E9FF] lg:w-100 md:w-100 w-70 h-75"
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
            {comment.map((item) => (
              <div
                key={item.id}
                className=" flex rounded-4xl lg:!p-10 md:!p-10 !p-5 border-2 border-[#D9E9FF] lg:w-100 md:w-100 w-70 h-75"
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
    </div>
  );
}

export default Comments;
