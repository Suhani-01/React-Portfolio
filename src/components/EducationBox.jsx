import React from "react";

const EducationBox = ({ educationDetails }) => {
  return (
    <div style={{
        borderColor:educationDetails.end=="Present"?"#452dc6":""
    }} className="education-box">

        {educationDetails.end=="Present" && <div className="education-tag">Currently pursuing</div>}

        {/* time details */}
      <div className="time-box">
        <div  className="timeline-circle">
          <div className={`${educationDetails.end === "Present"?"blinking":""}`}            style={{
              backgroundColor:
                educationDetails.end === "Present" ? "orangered" : "",
            }}
          ></div>
        </div>
        <div style={{
              color:
                educationDetails.end === "Present" ? "orangered" : "",
            }} className="time-time">
          {educationDetails.start} - {educationDetails.end}
        </div>
      </div>

      {/* main education box */}

      <div className="edu-head">

        

        {/* Institute logo */}
        <img src={educationDetails.logo} />

        <div>
          <h3>{educationDetails.title}</h3>

          <span></span>

          <ul className="point">
            <li>{educationDetails.institute}</li>
          </ul>

          <p>
            {educationDetails.board}{" "}
            {educationDetails.percent && <>| {educationDetails.percent} </>}
          </p>
        </div>
      </div>

      <p className="edu-desc">{educationDetails.description}</p>
    </div>
  );
};

export default EducationBox;
