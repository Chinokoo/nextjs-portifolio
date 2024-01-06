import AboutSection from "@/components/AboutSection";
import HeroSection from "@/components/HeroSection";
import MobileNav from "@/components/MobileNav";
import NavBar from "@/components/NavBar";
import React, { useState } from "react";

const HomePage = () => {
  const [nav, setNav] = useState(false);
  const openNav = () => {
    setNav(true);
  };
  const closeNav = () => setNav(false);
  return (
    <div className="overflow-x-hidden">
      <div>
        {/*Navigation Bar*/}
        <MobileNav nav={nav} closeNav={closeNav} />
        <NavBar openNav={openNav} />

        {/*Hero Section*/}
        <HeroSection />
        <div className="relative z-[30]">
          {/*About section*/}
          <AboutSection />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
