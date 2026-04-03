import React from 'react'

const SkillCard = ({skillSet}) => {
  return (
    <div className='skill-card'>
      <div className='skill-card-header'>
        <img  className='skill-card-groupIcon' alt='groupIcon' src={skillSet.groupIcon} />
        <h3>{skillSet.heading}</h3>
      </div>

      {/* margin-bottom */}
      <div className='line'></div>


      {/* all sub skills */}
      <div className='group-skills'>
       {
        skillSet.allSkills.map((skill,index)=>(
          <div className='skill' key={index}>
              <div className='skill-icon'>{skill.icon}</div>
              <div>{skill.skillName}</div>
          </div>
        ))
        }
      </div>
    </div>
  )
}

export default SkillCard
