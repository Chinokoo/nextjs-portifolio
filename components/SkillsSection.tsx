import React from "react";
import SkillsItem from "./SkillsItem";
import SkillsLanguage from "./SkillsLanguage";

const SkillsSection = () => {
  const dmiParagraph =
    "I hold a Bachelor of Science degree in Computer Science (General). With this educational background i am equiped him with a solid foundation in various aspects of computer science, including programming, algorithms & data structures, Computer Network, Project Management and software development. With this qualification, I am well-prepared to contribute to the ever-evolving field of technology and innovation";
  const programmer =
    "familiar with languages like Python, C, and HTML, CSS and Javascript. These skills enable me to design and create functional computer programs.";
  const analysis =
    "As a computer scientist, I encounter complex problems. Analytical skills help me break down problems logically and find effective solutions.";
  const architect =
    "improves organizations' computer systems and boosts operational efficiency and  performing cost-benefit analyses of potential changes or upgrades and identifying ways to improve existing systems.";
  return (
    <div
      id="education"
      className="pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#09101a] "
    >
      <h1 className="header">
        Education & <span className="text-yellow-400 ">Skill</span>
      </h1>
      <div className="w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center ">
        <div>
          <SkillsItem
            title="Bachelor of science in Computer Science (Major)"
            year="2018 - 2022"
            desc={dmiParagraph}
          />
          <SkillsItem
            title="Software Developer"
            year="2022-2023"
            desc={programmer}
          />
          <SkillsLanguage
            skill1="Programming"
            skill2="Analytical Skills"
            skill3="Collaborative teamwork"
            skill4="Project Management"
            level1="w-[91%]"
            level2="w-[65%]"
            level3="w-[80%]"
            level4="w-[60%]"
          />
        </div>
        <div>
          <SkillsItem
            title="Data Analysitics"
            year="2023 - 2023"
            desc={analysis}
          />
          <SkillsItem title="Systems Architect" year="2024" desc={architect} />
          <SkillsLanguage
            skill1="Consultancy"
            skill2=" System Administration"
            skill3="Technical Writing"
            skill4="Networking & connectivity"
            level1="w-[50%]"
            level2="w-[40%]"
            level3="w-[70%]"
            level4="w-[60%]"
          />
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
