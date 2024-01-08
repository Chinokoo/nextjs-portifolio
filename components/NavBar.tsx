import { Bars3Icon } from "@heroicons/react/16/solid";
import React from "react";

interface Props {
  openNav: () => void;
}

const NavBar = ({ openNav }: Props) => {
  return (
    <div className=" fixed z-[10000] w-[100%] top-0 h-[12vh] bg-[#141c27] shadow-md">
      <div className="flex items-center justify-between w-[80%] mx-auto h-[100%] ">
        <h1 className="flex-[0.6] cursor-pointer text-[25px] text-yellow-300 font-bold ">
          <a href="#home">Chinoko</a>{" "}
          <span className="hidden lg:block">Peter</span>
        </h1>
        <div className="nav-link">
          <a href="#home">HOME</a>
        </div>
        <div className="nav-link">
          <a href="#about">ABOUT</a>
        </div>
        <div className="nav-link">
          <a href="#services">SERVICES</a>
        </div>
        <div className="nav-link">
          <a href="#education">EDUCATION</a>
        </div>
        <div className="nav-link">
          <a href="#projects">PROJECTS</a>
        </div>
        <div className="nav-link">
          <a href="#contact">CONTACT</a>
        </div>
        <div onClick={openNav}>
          <Bars3Icon className="w-[2rem] h-[2rem] md:hidden cursor-pointer text-yellow-300 " />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
