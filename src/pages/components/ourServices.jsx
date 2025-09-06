import { MdOutlineArrowOutward } from "react-icons/md";
import subtract1 from "../../img/Subtract1.png";
import subtract2 from "../../img/Subtract2.png";
import subtract3 from "../../img/Subtract3.png";

const image = [
  {
    id: 1,
    img: subtract1,
    title: "Fixed deposit",
    desc: "Secure your savings with guaranteed returns through Fixed Deposits. Enjoy stable growth with flexible tenures and assured interest",
  },
  {
    id: 2,
    img: subtract2,
    title: "Recurring deposit",
    desc: "Invest small amounts regularly with Recurring Deposits. Build a disciplined savings habit while earning steady interest over time.",
  },
  {
    id: 3,
    img: subtract3,
    title: "Gold Investment",
    desc: "Keep your gold safe,and your goals moving.Instant gold loans with minimum paperwork.",
  },
];

function OurServices() {
  return (
    <div className=" bg-[#2956A6] ">
      {/* what we do */}

      <div className="text-center !pt-10 ">
        <h1 className="relative inline-block lg:text-[20px] md:text-[20px] text-[18px]  font-semibold text-white z-10">
          Our Services
          <span className="absolute left-0 bottom-1 w-full h-[30%] bg-[#DFAE51] z-[-1]"></span>
        </h1>

        <h2 className="lg:text-[50px] md:text-[35px] text-[25px] text-center font-bold !px-10  text-white ">
          Your Trusted Advisors in Business Success
        </h2>
      </div>

      <div className="!mt-10 !mb-1  flex flex-col justify-center items-center">
        {/* Services Grid */}
        <div className="lg:!mb-20 md:!mb-40 !mb-15">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:!gap-30 md:!gap-20 gap-10 !px-10 lg:!px-15">
            {image.map((thing) => (
              <div
                key={thing.id}
                className="relative flex group cursor-pointer  rounded-2xl"
              >
                {/* Image Wrapper */}
                <div className="flex overflow-hidden rounded-4xl">
                  <img
                    src={thing.img}
                    alt="service"
                    className=" object-fit transition-transform duration-2000 group-hover:scale-110"
                  />

                  {/* White Rounded Container with Icon */}
                  <div className="absolute -top-2 -right-2 h-30 w-30 bg-[#2956A6] p-2 rounded-2xl  flex justify-center items-center ">
                    <div className="bg-white group-hover:bg-[#007DF2] rounded-full w-20 h-20 flex items-center justify-center ">
                      <MdOutlineArrowOutward className="w-12 h-12 object-contain text-[#2956A6] group-hover:text-white transition-colors duration-1500 " />
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 w-full  !p-4">
                    <h4 className="text-white font-bold text-[20px] mt-4 ">
                      {thing.title}
                    </h4>
                    <p className="text-white text-[14px]">{thing.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurServices;
