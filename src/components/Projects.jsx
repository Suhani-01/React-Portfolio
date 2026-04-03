import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaCss3Alt,
  FaHtml5,
  FaJs,
} from "react-icons/fa";

import { SiExpress } from "react-icons/si";

import ProjectCard from "./ProjectCard";

const Projects = () => {
  const allProjects = [
    {
      image: "/images/split-mates.png",
      heading: "SplitMates",
      content:
        "A full-stack expense-splitting app that tracks group expenses and automatically calculates individual balances.",

      techStack: [
        {
          icon: <FaReact style={{ color: "#61DBFB", fontSize: "18px" }} />,
          name: "React",
        },
        {
          icon: <FaNodeJs style={{ color: "#3C873A", fontSize: "18px" }} />,
          name: "Node.js",
        },
        {
          icon: <FaDatabase style={{ color: "#4DB33D", fontSize: "18px" }} />,
          name: "MongoDB",
        },
        {
          icon: <FaCss3Alt style={{ color: "#38BDF8", fontSize: "18px" }} />,
          name: "Tailwind CSS",
        },
        {
          icon:<SiExpress style={{ color: "#4e8d4b", fontSize: "18px" }} />,
          name:"Express.js"
        }
      ],
      link:"https://github.com/Suhani-01/Split-Mates",
    },

    {
      image: "/images/razorpay-clone.png",
      heading: "Razorpay Clone",
      content:
        "A responsive Razorpay homepage clone built with HTML and Tailwind CSS, featuring a clean UI and consistent layout across devices.",

      techStack: [
        {
          icon: <FaHtml5 style={{ color: "#E34F26", fontSize: "18px" }} />,
          name: "HTML",
        },
        {
          icon: <FaCss3Alt style={{ color: "#38BDF8", fontSize: "18px" }} />,
          name: "Tailwind CSS",
        },
      ],
      link:"https://github.com/Suhani-01/Razorpay-clone",
      
    },

    {
      image: "/images/flip-and-match.png",
      heading: "Flip & Match",
      content:
        "An interactive memory card game built with React. Includes animations, levels, and engaging gameplay for a fun experience.",

      techStack: [
        {
          icon: <FaReact style={{ color: "#61DBFB", fontSize: "18px" }} />,
          name: "React",
        },
      ],
      link:"https://github.com/Suhani-01/Flip-and-Match-React",
    },
  ];
  return (
    <section id="project" className="project-outer">

      <div className="view-port project-section">
        {/* heading */}
        <div className="section-heading">
          <h1>Projects</h1>

          <p>A showcase of what I've built with passion & logic ✨</p>
        </div>

        {/* all prjects */}
        <div className="project-showcase">
          {allProjects.map((project, index) => (
            <ProjectCard projectDetails={project} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
