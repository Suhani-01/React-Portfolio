import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaCss3Alt,
  FaHtml5,
  FaPython,
  FaJs,
} from "react-icons/fa";

import { SiExpress,SiTailwindcss , SiJinja } from "react-icons/si";

import ProjectCard from "./ProjectCard";

const Projects = () => {
  const allProjects = [
    {
      image: "/images/PowerDemand.png",
      heading: "PowerDemand",
      content: "Electricity demand prediction system for Delhi regions. Trained ML models on historical data and built UI using React to display real-time predictions.",

      techStack: [
        {
          icon: <FaReact style={{ color: "#61DBFB", fontSize: "18px" }} />,
          name: "React",
        },
        {
          icon: <SiTailwindcss style={{ color:"#38BDF8", fontSize: "18px" }} />, 
          name: "Tailwind CSS" 
        },
        {
          icon:<FaPython style={{color:"#3776AB", fontSize:"18px"}}/>,
          name:"Python"
        }
      ],
      link:"https://github.com/Suhani-01/PowerDemand",
      visit: "https://power-demand-fi6iq210t-suhani-01s-projects.vercel.app/"
    },
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
          icon:<SiExpress style={{ color: "#4e8d4b", fontSize: "18px" }} />,
          name:"Express.js"
        },
        {
          icon: <FaNodeJs style={{ color: "#3C873A", fontSize: "18px" }} />,
          name: "Node.js",
        },
        {
          icon: <FaDatabase style={{ color: "#4DB33D", fontSize: "18px" }} />,
          name: "MongoDB",
        }
        ,
        
        {
          icon: <SiTailwindcss style={{ color:"#38BDF8", fontSize: "18px" }} />, 
          name: "Tailwind CSS" 
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
          icon: <SiTailwindcss style={{ color:"#38BDF8", fontSize: "18px" }} />, 
          name: "Tailwind CSS",
        },
      ],
      link:"https://github.com/Suhani-01/Razorpay-clone",
      visit:"https://razorpay-clone-001.netlify.app/"
      
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
