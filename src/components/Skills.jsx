import React from "react";
import SkillCard from "./SkillCard";
import {
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import { SiTailwindcss, SiMysql } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const Skills = () => {
  const skillsData = [
    {
      groupIcon: "/images/dev-icon.png",
      heading: "Development & Programming",
      allSkills: [
        { icon: <FaHtml5 color="#E34F26" />, skillName: "HTML" },
        { icon: <FaReact color="#61DAFB" />, skillName: "React JS" },
        { icon: <FaJava color="#f89820" />, skillName: "Java" },
        { icon: <FaCss3Alt color="#1572B6" />, skillName: "CSS" },
        { icon: <FaJs color="#F7DF1E" />, skillName: "JavaScript" },
        { icon: <SiTailwindcss color="#38BDF8" />, skillName: "Tailwind CSS" },
      ],
    },
    {
      groupIcon: "/images/tools-icon.png",
      heading: "Tools & Technologies",
      allSkills: [
        { icon: <VscVscode size={20} color="#007ACC" />, skillName: "VS Code" },
        { icon: <FaGitAlt size={20} color="#F05032" />, skillName: "Git" },
        { icon: <FaGithub size={20} color="#181717" />, skillName: "GitHub" },
        { icon: <SiMysql size={20} color="#4479A1" />, skillName: "MySQL" },
      ],
    },
    {
      groupIcon: "/images/core-icon.png",
      heading: "Core Concepts",
      allSkills: [
        { skillName: "Data Structures & Algorithms" },
        { skillName: "Problem Solving" },
        { skillName: "Object Oriented Programming" },
        { skillName: "Database Management Systems" },
      ],
    },
  ];

  return (
    <section id="skill" className="section skill-outer">
      <div className="view-port skill-section">
        <div className="section-heading">
          {/* vectors */}
          <img src="/images/skill-vector1.png" className="skill-vector-1" />
          <img src="/images/skill-vector1.png" className="skill-vector-2" />

          <h1>Skills</h1>
          <p>Here are the skills and technology I work with 💡</p>
        </div>


        <div className="skill-card-section">
          <img
            alt="skill-tape"
            className="skill-card-vector-1"
            src="/images/skillCard-vector.png"
          />

          {skillsData.map((skillGroup, index) => (
            <SkillCard skillSet={skillGroup} key={index} />
          ))}

          <img
            alt="skill-tape"
            className="skill-card-vector-2"
            src="/images/skillCard-vector.png"
          />
        </div>
 
      </div>
    </section>
  );
};

export default Skills;
