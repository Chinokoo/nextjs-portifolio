import {
  ChatBubbleOvalLeftIcon,
  DevicePhoneMobileIcon,
  EnvelopeIcon,
  MapIcon,
} from "@heroicons/react/16/solid";
import React from "react";

const FooterSection = () => {
  return (
    <div id="contact" className="pt-[8rem] pb-[4rem] bg-[#02050a] ">
      <div className="grid border-b-[1px] pb-[6rem] border-gray-400 grid-cols-1 lg:grid-cols-2 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center justify-center">
        <div className="flex items-center space-x-6">
          <div className="md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#55e6a5] ">
            <MapIcon className="md:w-[4rem] md:h-[4rem] w-[3.5rem] h-[3.5rem] text-black" />
          </div>
          <div>
            <h1 className="text-[18px] mb-[0.2rem] font-semibold text-white ">
              Address
            </h1>
            <p className="text-[17px] w-[90%] text-white opacity-60 ">
              <span className="text-yellow-300">Lilongwe :</span> Area 49 dubai,
              Dimba street. <br />
              <span className="text-yellow-300">Johannesburg :</span> Oaklands:
              Pretoria street, 31A
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <div className="md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#55e6a5] ">
            <DevicePhoneMobileIcon className="md:w-[4rem] md:h-[4rem] w-[3.5rem] h-[3.5rem] text-black" />
          </div>
          <div>
            <h1 className="text-[18px] mb-[0.2rem] font-semibold text-white ">
              Phone
            </h1>
            <p className="text-[17px] w-[90%] text-white opacity-60 ">
              <a href="tel:+27624190143">+27624190143</a> <br />{" "}
              <a href="tel:+27691344907">+27691344907</a>
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <div className="md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#55e6a5] ">
            <EnvelopeIcon className="md:w-[4rem] md:h-[4rem] w-[3.5rem] h-[3.5rem] text-black" />
          </div>
          <div>
            <h1 className="text-[25px] mb-[0.2rem] font-semibold text-white ">
              Email
            </h1>
            <p className="text-[17px] w-[90%] text-white opacity-60 ">
              <a href="mailto:peterchinokoo@gmail.com">
                peterchinokoo@gmail.com
              </a>
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <div className="md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#55e6a5] ">
            <ChatBubbleOvalLeftIcon className="md:w-[4rem] md:h-[4rem] w-[3.5rem] h-[3.5rem] text-black" />
          </div>
          <div>
            <h1 className="text-[18px] mb-[0.2rem] font-semibold text-white ">
              whatsapp
            </h1>
            <p className="text-[17px] w-[90%] text-white opacity-60 ">
              <a href="https://wa.me/+27624190143">+27624190143</a>
            </p>
          </div>
        </div>
      </div>
      <div className="w-[80%] mt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-between ">
        <div className="text-[18px] mb-[2rem] md:mb-0 text-white opacity-20 ">
          Peter Chinoko 2024 | All Right Reserved.
        </div>
        <div className="flex items-center space-x-10">
          <p className="text-[18px] text-white opacity-20">
            The Architect, Terms & Conditions.
          </p>
          <p className="text-[18px] text-white opacity-20">
            The Architect: Solving Problems with Technology.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
