import React from "react";
import EducationBox from "./EducationBox";

const Experience = () => {

  // //     {
  //     logo:"/images/kv-logo.png",
  //     title:"High School",
  //     institute:"Kendriya Vidyalaya No.2 Roorkee",
  //     board:"CBSE",
  //     percent:"87.4%",
  //     description:"Completed Class 10th from Kendriya Vidyalaya No.2, Roorkee (Uttarakhand). Built a strong foundation in Science and Mathematics while strengthening problem-solving abilities, and actively engaged in co-curricular activities that contributed to overall academic development.",
  //     start:"2019",
  //     end:"2020",
  //   },

  const allExperience = [
    {
      logo:"/images/codSoft.png",
      title:"Web Developer",
      institute:"CodSoft",
      board:"Internship",
      description:"Developed a responsive landing page “Uttrakhand Travels” using HTML & CSS with navigation, services, tour packages, and a contact form. Developed a personal portfolio website showcasing skills, projects, and resume with a clean layout. Built a functional calculator using HTML, CSS & JavaScript to perform arithmetic operations with an interactive UI.",
      start:"Aug",
      end:"Sep (2023)",

    },
      {
      logo:"/images/Oasis.png",
      title:"Web Developer",
      institute:"Oasis Infobyte",
      board:"Internship",
      description:"Developeed a tribute page with structured landing, about, and multimedia sections to enhance user engagement; and built a dynamic to-do list web app using HTML, CSS, and JavaScript, enabling users to efficiently add, delete, and track tasks with an intuitive interface.",
      start:"June",
      end:"July (2024)",

    }
  ];

  return (
    <section id="experience" className="experience-outer">
      <div className="view-port">
        {/* headeing */}
        <div className="section-heading">
          <h1>Experience</h1>
          <p>Here are my Internships so far 💼</p>
        </div>

        {/* experince timeline */}
        <div>
          <div className="all-experience">
            <div className="timeline-line"></div>

            <div className="experience-container">
              {
              allExperience.map((exp,index)=>(
                <EducationBox key={index} educationDetails={exp} />
              ))  
            }
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
