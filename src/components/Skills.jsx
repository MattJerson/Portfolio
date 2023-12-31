import React from "react";
import { skills } from "../data";
import { DiJavascript } from "react-icons/di";
import { FaReact, FaAngular, FaHtml5, FaCss3Alt, FaPython } from "react-icons/fa";

const getIconComponent = (icon) => {
  switch (icon) {
    case "FaHtml5":
      return <FaHtml5 color="#E34C26" size={100}/>;
    case "FaCss3Alt":
      return <FaCss3Alt color="#1572B6" size={100}/>;
    case "DiJavascript":
      return <DiJavascript color="#F7DF1E" size={100}/>
    case "FaReact":
      return <FaReact color="#61DAFB" size={100}/>;
    case "FaAngular":
      return <FaAngular color="#DD1B16" size={100}/>;
    case "FaPython":
      return <FaPython color="#306998" size={100}/>;
    default:
      return null;
  }
};

const Skills = () => {
  return (
    <>
      {skills.map(({ title, icon }, index) => {
        const IconComponent = getIconComponent(icon);
        return (
          <div className="skill__box" key={index}>
            <div className="skill__circle">{IconComponent}</div>
            <h3 className="skill__title">{title}</h3>
          </div>
        );
      })}
    </>
  );
};

export default Skills;
