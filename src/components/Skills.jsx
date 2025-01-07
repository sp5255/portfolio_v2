import React from "react";
import CSSIcon from "../assets/images/css-3.svg";
import gitIcon from "../assets/images/git-icon.svg";
import htmlIcon from "../assets/images/html-1.svg";
import jqueryIcon from "../assets/images/jquery-4.svg";
import javascriptIcon from "../assets/images/logo-javascript.svg";
import nextIcon from "../assets/images/nextjs-icon.svg";
import reactIcon from "../assets/images/react-2.svg";
import reduxIcon from "../assets/images/redux.svg";
import tailwindIcon from "../assets/images/tailwind-css-2.svg";
import typescirptIcon from "../assets/images/typescript.svg";
import SectionTitle from "./SectionTitle";

const skills = [
  {
    name: "JavaScript",
    src: javascriptIcon,
  },
  {
    name: "TypeScript",
    src: typescirptIcon,
  },
  {
    name: "Reactjs",
    src: reactIcon,
  },
  {
    name: "Redux",
    src: reduxIcon,
  },
  {
    name: "Next.js",
    src: nextIcon,
  },
  {
    name: "Git",
    src: gitIcon,
  },
  {
    name: "HTML",
    src: htmlIcon,
  },
  {
    name: "CSS",
    src: CSSIcon,
  },
  {
    name: "jQuery",
    src: jqueryIcon,
  },

  {
    name: "Tailwind CSS",
    src: tailwindIcon,
  },
];

const Skills = () => {
  return (
    <section>
      <p className="section-title_mobile">Skills</p>
      <div className="skills-wrapper" id="skills">
        <SectionTitle title="Skills" />
        <p className="section-heading">
          The Skills, tools and technologies i've worked on:
        </p>
        <div className="skills-container">
          {skills.map((skill) => {
            return (
              <div className="skills-container__skill skill" key={skill.name}>
                <img
                  src={skill.src}
                  className="skills-container__icon"
                  alt={skill.name}
                />
                <p className="skills-container__name">{skill.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
