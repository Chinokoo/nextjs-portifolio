import React from "react";
import Particle from "./Particle";
import TextEffect from "./TextEffect";
import Image from "next/image";
import { ArrowDownTrayIcon } from "@heroicons/react/16/solid";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div
      id="home"
      className="h-[88vh] bg-[url('/images/banner.jpg')] pt-[10vh] bg-cover bg-center"
    >
      <Particle />
      <div className="w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center">
        <div>
          <h1 className="text-[35px] md:text-[50px] text-white font-bold">
            Hi, I am <span className="text-yellow-400">Peter</span>
          </h1>
          <p className="mt-[1.5rem] text-[18px] text-[#ffffff92] ">
            I love Coding and building software Applications.
          </p>
          <div className="mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6">
            <Link
              href="/PetersCv.pdf"
              target="_blank"
              className="px-[2rem] w-[15rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2 "
            >
              <p>Download CV</p>
              <ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem] text-black " />
            </Link>
          </div>
          <TextEffect />
        </div>
        <div className="w-[500px] hidden bg-[#55e6a5] relative lg:flex items-center rounded-full h-[500px]  ">
          <Image
            className="object-cover rounded-full"
            src="/images/programmer.jpg"
            alt="image of a developer"
            layout="fill"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
