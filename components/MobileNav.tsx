import { XMarkIcon } from "@heroicons/react/16/solid";
import React from "react";

interface Props {
  closeNav: () => void;
  nav: boolean;
}

const MobileNav = ({ closeNav, nav }: Props) => {
  const navAnimation = nav ? "translate-x-0" : "translate-x-[100%]";
  return (
    <div
      className={`${navAnimation} fixed transform transition-all duration-300 top-0 left-0 right-0 bottom-0 z-[1000000] bg-[#09101a]`}
    >
      <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center ">
        <div className="nav-link-mobile">
          <a href="#home" onClick={closeNav}>
            HOME
          </a>
        </div>
        <div className="nav-link-mobile">
          <a href="#about" onClick={closeNav}>
            ABOUT
          </a>
        </div>
        <div className="nav-link-mobile">
          {" "}
          <a href="#services" onClick={closeNav}>
            SERVICES
          </a>
        </div>
        <div className="nav-link-mobile">
          <a href="#education" onClick={closeNav}>
            EDUCATION
          </a>
        </div>
        <div className="nav-link-mobile">
          <a href="#projects" onClick={closeNav}>
            PROJECTS
          </a>
        </div>
        <div className="nav-link-mobile">
          <a href="#contact" onClick={closeNav}>
            CONTACTS
          </a>
        </div>
      </div>
      <div
        onClick={closeNav}
        className="absolute z-[100000000] cursor-pointer top-[2rem] right-[2rem] w-[2rem] h-[2rem] text-yellow-400 "
      >
        <XMarkIcon />
      </div>
    </div>
  );
};

export default MobileNav;
