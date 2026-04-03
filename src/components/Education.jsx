import React from "react";
import EducationBox from "./EducationBox";

const Education = () => {
  const allEducation=[
    {
      logo:"/images/kv-logo.png",
      title:"High School",
      institute:"Kendriya Vidyalaya No.2 Roorkee",
      board:"CBSE",
      percent:"87.4%",
      description:"Completed Class 10th from Kendriya Vidyalaya No.2, Roorkee (Uttarakhand). Built a strong foundation in Science and Mathematics while strengthening problem-solving abilities, and actively engaged in co-curricular activities that contributed to overall academic development.",
      start:"2019",
      end:"2020",
    },
    {
      logo:"/images/kv-logo.png",
      title:"Intermediate (PCM + CS)",
      institute:"Kendriya Vidyalaya No.2 Roorkee",
      board:"CBSE",
      percent:"88.4%",
      description:"Completed Class 12th with Physics, Chemistry, Mathematics, and Computer Science under CBSE. Developed a keen interest in Computer Science through programming fundamentals, which inspired me to pursue B.Tech in Computer Science & Engineering to further strengthen my technical expertise and problem-solving abilities.",
      start:"2021",
      end:"2022",
    
    },
    {
      logo:"/images/coer-logo.png",
      title:"B.Tech CSE",
      institute:"Coleege Of Engineering Roorkee ",
      board:"UTU",
      percent:"",
      description:"Currently in the 8th Sem. of B.Tech in Computer Science & Engineering at COER , affiliated with Uttarakhand Technical University. Gained knowledge in core CS subjects . Actively participated in national and internal hackathons, collaborated with teams to strengthen practical problem-solving and technical skills.",
      start:"2022",
      end:"Present",
      
    },
  ]
  return (
    <section id="education" className="education-outer">
      <div className="view-port education-section">
        {/* heading? */}
        <div className="education-header section-heading">
          
          <h1>Education</h1>
          <p>My academic background and qualifications 📜</p>
        </div>

        {/* eduicaiton */}
        <div>
          

          <div className="all-education">
            <div className="timeline-line"></div>

            {/* educaiton 1 */}

            {
              allEducation.map((edu,index)=>(
                <EducationBox key={index} educationDetails={edu}/>
              ))
            }
            

            
          </div>


          
        </div>
      </div>
    </section>
  );
};

export default Education;
