import React from "react";
import { skills } from "../data";
import { DiJavascript } from "react-icons/di";
import { FaReact, FaNodeJs, FaAngular, FaBootstrap, FaHtml5, FaCss3Alt, FaPhp } from "react-icons/fa";

const getIconComponent = (icon) => {
  switch (icon) {
    case "FaHtml5":
      return <FaHtml5 color="#E34C26" size={80}/>;
    case "FaCss3Alt":
      return <FaCss3Alt color="#1572B6" size={80}/>;
    case "DiJavascript":
      return <DiJavascript color="#F7DF1E" size={80}/>;
    case "FaPhp":
      return <FaPhp color="#8892BF" size={80}/>;
    case "FaReact":
      return <FaReact color="#61DAFB" size={80}/>;
    case "FaNodeJs":
      return <FaNodeJs color="#68A063" size={80}/>;
    case "FaAngular":
      return <FaAngular color="#DD1B16" size={80}/>;
    case "FaBootstrap":
      return <FaBootstrap color="#7952B3" size={80}/>;
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
