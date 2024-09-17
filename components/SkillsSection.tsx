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
  const architect = ".";
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
            title="Mobile Developer"
            year="present"
            desc={programmer}
          />
          <SkillsLanguage
            skill1="Flutter"
            skill2="Dart"
            skill3="Firebase"
            skill4="Git"
            level1="w-[91%]"
            level2="w-[65%]"
            level3="w-[80%]"
            level4="w-[60%]"
          />
        </div>
        <div>
          <SkillsItem
            title="Backend Developer"
            year="2023 - 2023"
            desc={analysis}
          />
          <SkillsItem title=" . . ." year="2024" desc={architect} />
          <SkillsLanguage
            skill1="javascript"
            skill2=" Docker"
            skill3="Node JS"
            skill4="Adobe XD"
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
