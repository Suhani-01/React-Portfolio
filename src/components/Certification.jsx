import React from 'react'
import CertificateCard from './CertificateCard'
import Profiles from './Profiles';

const Certification = () => {
  const allCertificates=[
    {
      icon:"/images/SIH2024.png",
      title:"Smart India Hackathon Finalist",
      issuedBy:"Ministry of Education,Government of India",
      date:"Dec 2024",
      link:"https://drive.google.com/file/d/1KDEjiKLM-5Ctti3K98lTW5XvQrxox44f/view",
    },
    {
      icon:"/images/GFG.png",
      title:"160 Days of Problem Solving",
      issuedBy:"Issued by GeeksForGeeks",
      date:"April 2025",
      link:"https://media.geeksforgeeks.org/courses/certificates/bd284b88e4fa61177e527701491cc07d.pdf",
    },
    {
      icon:"/images/HackerRank.png",
      title:"Problem Solving (Intermediate)",
      issuedBy:"HackerRank",
      date:"Nov 2025",
      link:"https://www.hackerrank.com/certificates/9bccd9984f0b",
    },
    {
      icon:"/images/freecodecamp.png",
      title:"Responsive Web Design",
      issuedBy:"freeCodeCamp",
      date:"Aug 2025",
      link:"https://www.freecodecamp.org/certification/suhani1/responsive-web-design",
    },
  ]
  // https://www.hackerrank.com/profile/suhaninegi124

  const profiles=[
    {
      icon:"/images/leetcode.png",
      profile:"LeetCode",
      userName:"Suhani_01",
      profileimg:"/images/profile.jpg",
      description:"Solved 500+ problems",
      link:"https://leetcode.com/u/Suhani_01/",
    },
    {
      icon:"/images/HRlogo.png",
      profile:"HackerRank",
      userName:"suhaninegi124",
      profileimg:"/images/profile.jpg",
      link:"https://www.hackerrank.com/profile/suhaninegi124",
    },

   
   
  ];



  return (
    <section id='certificate' className='cert-outer'>
      <div className='view-port cert-section'>
            <div className='cert-line'></div>

            <div className='section-heading'>
                <h1>Certification & Accomplishment</h1>
                <p>Recently earned certifications and achievements 🏆</p>
            </div>


            <div className='certificate-container'>

                  {/* certificates */}
                  <div className='cert-card-container'>
                      {
                        allCertificates.map((cert,index)=>(
                          <CertificateCard key={index} certDetails={cert} />
                        ))
                      }
                  </div>


                  <div className='profile-card-container'>
                      {
                        profiles.map((prof,index)=>(
                          <Profiles key={index} profileDetails={prof} />
                        ))
                      }
                  </div>
            </div>
      </div>
    </section>
  )
}

export default Certification
