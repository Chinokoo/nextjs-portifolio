import {
  CodeBracketSquareIcon,
  CommandLineIcon,
  RocketLaunchIcon,
} from "@heroicons/react/16/solid";
import React from "react";

const ServicesSection = () => {
  return (
    <div
      id="services"
      className="bg-[#121212] pt-[4rem] md:pt-[8rem] pb-[5rem] "
    >
      <p className="header">
        My <span className="text-yellow-400">Services</span>
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto items-center gap-[3rem] mt-[4rem] text-white">
        <div>
          <div
            className="bg-blue-700 hover:scale-110 transform transition-all duration-300 hover:-rotate-6
            uppercase font-semibold text-center p-[2rem]"
          >
            <CodeBracketSquareIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
            <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem] ">
              Software development
            </h1>
            <p className="text-[15px] text-[#d3d2d2] font-normal ">
              I design, code, test, and maintain software applications. It’s a
              critical skill for building robust, efficient, and user-friendly
              software systems
            </p>
          </div>
        </div>
        <div>
          <div
            className="bg-orange-700 hover:scale-110 transform transition-all duration-300
            uppercase font-semibold text-center p-[2rem]"
          >
            <RocketLaunchIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
            <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem] ">
              Analysis
            </h1>
            <p className="text-[15px] text-[#d3d2d2] font-normal ">
              Extracting meaningful insights from large datasets. Skills in data
              manipulation, visualization, and statistical analysis are valuable
              for decision-making and problem-solving.
            </p>
          </div>
        </div>
        <div>
          <div
            className="bg-red-700 hover:scale-110 transform transition-all duration-300 hover:rotate-6
            uppercase font-semibold text-center p-[2rem]"
          >
            <CommandLineIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
            <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem] ">
              Networking
            </h1>
            <p className="text-[15px] text-[#d3d2d2] font-normal ">
              Ability to design robust network architectures that are scalable,
              secure, and optimized for performance. Proficiency in configuring
              and troubleshooting network devices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
