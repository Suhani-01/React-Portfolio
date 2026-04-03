import React from 'react'

const CertificateCard = ({certDetails}) => {
  return (
    <div className='cert-card'>
      

      {/* //icon portion */}
      <div className='cert-icon'>
            <img src={certDetails.icon}/>
      </div>


      {/* //content portion */}
      <div className='cert-content'>
            <h3>{certDetails.title}</h3>
           
            <p>Issued by {certDetails.issuedBy}</p>

            <div>
                <span>{certDetails.date}</span> 
                <a target='blank' href={certDetails.link}>View Certificate</a>
            </div>
      </div>
    </div>
  )
}

export default CertificateCard
