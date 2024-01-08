import React from "react";
import SkillsItem from "./SkillsItem";
import SkillsLanguage from "./SkillsLanguage";

const SkillsSection = () => {
  const dmiParagraph =
    "I have a bachelor of science degree in computer science from the University of DMI st John the Baptist University. Computer Science is the study of computation, algorithms, data structures, programming languages, software engineering, and artificial intelligence. During my studies, I learned how to design, develop, and test various software applications and systems. I also gained skills in problem-solving, logical thinking, and teamwork. I enjoyed learning about the theory and practice of computer science and applying them to real-world problems.";
  const nodejsParagraph =
    "Node.js is a JavaScript runtime environment that allows me to create and run server-side applications using JavaScript. I have used Node.js for various projects, such as building RESTful APIs, chatbots, and more. I have also used different frameworks and libraries with Node.js, such as Express, Socket.io, Axios, Mongoose, etc. I enjoy working with Node.js because it is fast, scalable, and easy to use. I have learned a lot from using Node.js and I am always eager to learn more.";
  const reactParagraph =
    "React is a JavaScript library that allows me to create and manage user interfaces for web applications. I have used React for various projects, such as building websites. I have also used different tools and technologies with React, such as React Router, Axios, etc.";
  const nextjsParagraph =
    "Next.js is a framework that allows me to create fast and scalable web applications using React. I have just started learning Next.js and I am impressed by its features and benefits. I am excited to learn more about Next.js and use it for my future projects. I think Next.js is a great framework for web development and I recommend it to anyone who wants to create modern and powerful web applications.";
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
            title="Node Js Developer"
            year="2022-2023"
            desc={nodejsParagraph}
          />
          <SkillsLanguage
            skill1="html"
            skill2="css"
            skill3="javascript"
            skill4="Nodejs"
            level1="w-[91%]"
            level2="w-[65%]"
            level3="w-[80%]"
            level4="w-[60%]"
          />
        </div>
        <div>
          <SkillsItem
            title="React Developer"
            year="2023 - present"
            desc={reactParagraph}
          />
          <SkillsItem
            title="Next JS Developer"
            year="2024 - present"
            desc={nextjsParagraph}
          />
          <SkillsLanguage
            skill1="React"
            skill2="Next"
            skill3="Typescript"
            skill4="Problem Solving"
            level1="w-[50%]"
            level2="w-[40%]"
            level3="w-[30%]"
            level4="w-[50%]"
          />
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
