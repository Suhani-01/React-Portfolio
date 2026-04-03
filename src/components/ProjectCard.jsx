import React from 'react'

const ProjectCard = ({projectDetails}) => {
  return (
    <div className='project-card-container'>
        <div className='project-card'>
            {/* left part */}
            <div className='project-card-left'>
                <h2>{projectDetails.heading}</h2>
                <div className='line'></div>
                <p>{projectDetails.content}</p>

                <div className='group-skills'>
                    {
                        projectDetails.techStack.map((tech,index)=>(
                            <div className='skill' key={index}>
                                <span className='skill-icon'>{tech.icon}</span>
                                <span>{tech.name}</span>
                            </div>
                        ))
                    }
                </div>
            </div>


            {/* rightpart */}
            <div className='project-card-right'>
                <div className='project-image'>
                    <img src={projectDetails.image}/>
                </div>
                
                <a style={{textDecoration:"none"}} href={projectDetails.link}><button>View Code ➔</button></a>
            </div>
            
        </div>
      
    </div>
  )
}

export default ProjectCard
