import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectSection = () => {
  return (
    <div
      id="projects"
      className="bg-[#02050a] pt-[4rem] md:pt-[8rem] pb-[1rem] "
    >
      <h1 className="header">
        My <span className="text-yellow-400">Projects</span>{" "}
      </h1>
      <h2 className=" header  text-[1.5rem] mt-10 text-yellow-400">
        {" "}
        Software Developement
      </h2>
      <div className="w-[80%] pt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem]">
        <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px] ">
          <Link href="https://peter-games.vercel.app/" target="_blank">
            <Image
              src="/images/p1.png"
              alt="game-hub"
              className="object-contain"
              layout="fill"
            />
          </Link>
        </div>
        <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px] ">
          <Link href="https://peter-chinoko.vercel.app/" target="_blank">
            <Image
              src="/images/p2.png"
              alt="html and css portifolio"
              className="object-contain"
              layout="fill"
            />
          </Link>
        </div>
        <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px] ">
          <Link href="https://gym-website-532.pages.dev/" target="_blank">
            <Image
              src="/images/p3.png"
              alt="evolve gym website"
              className="object-contain"
              layout="fill"
            />
          </Link>
        </div>
        <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px] ">
          <Link href="https://rsalawn.vercel.app/" target="_blank">
            <Image
              src="/images/p4.png"
              alt="evolve gym"
              className="object-contain"
              layout="fill"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
