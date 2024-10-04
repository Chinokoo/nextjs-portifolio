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
        My <span className="text-yellow-400"> Projects</span>
        <br />
        <p className="text-[1rem]">-click on the project to preview-</p>
      </h1>
      <h2 className=" header  text-[1.5rem] mt-10 text-yellow-400">
        FullStack Development
      </h2>
      <div className="w-[80%] pt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem]">
        <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px] ">
          <Link href="https://github.com/Chinokoo/KJV" target="_blank">
            <Image
              src="/images/kjv.png"
              alt="bible screenshot"
              className="object-contain"
              layout="fill"
            />
          </Link>
        </div>
        <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px] ">
          <Link href="https://github.com/Chinokoo//recipe_app" target="_blank">
            <Image
              src="/images/recipe_app.png"
              alt="bible screenshot"
              className="object-contain"
              layout="fill"
            />
          </Link>
        </div>
        <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px] ">
          <Link
            href="https://github.com/Chinokoo/habit_tracker"
            target="_blank"
          >
            <Image
              src="/images/habit_tracker.png"
              alt="habit tracker screenshot"
              className="object-contain"
              layout="fill"
            />
          </Link>
        </div>
      </div>

      <h2 className=" header  text-[1.5rem] mt-10 text-yellow-400">
        Frontend Development
      </h2>
      <div className="w-[80%] pt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem]">
        <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px] ">
          <Link href="https://peter-games.vercel.app/" target="_blank">
            <Image
              src="/images/peter-games.png"
              alt="game-hub"
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
