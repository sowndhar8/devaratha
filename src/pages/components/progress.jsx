import React, { useEffect, useRef, useState } from "react";

const Progress = () => {
  const [animated, setAnimated] = useState(false);
  const sectionRef = useRef(null);

  const progressBar = [
    {
      name: "Business Consulting",
      value: 60,
      color: "bg-[#4B164C]",
    },
    {
      name: "Finance Advice",
      value: 80,
      color: "bg-[#0A3D62]",
    },
    {
      name: "Startup Growth",
      value: 75,
      color: "bg-[#4C1D95]",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setAnimated(true);
          observer.disconnect(); // animate only once
        }
      },
      { threshold: 0.3 } // trigger when 30% visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="flex flex-col lg:flex-row  !gap-6 lg:!gap-12"
    >


      {/* Progress Details */}
      <div className="w-full ">
       

        <div className="!space-y-6">
          {progressBar.map((service, index) => (
            <div key={index}>
              {/* Label + Value */}
              <div className="flex justify-between items-center !mb-2">
                <span className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-medium ">
                  {service.name}
                </span>
                <span className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-medium ">
                  {service.value}%
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-[10px] bg-gray-200 rounded-full overflow-hidden">
                <div
                  className={`h-[10px] rounded-full transition-all duration-1000 ease-in-out bg-[#2956A6]`}
                  style={{ width: animated ? `${service.value}%` : "0%" }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Progress;
