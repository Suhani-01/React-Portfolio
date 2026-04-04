import React from "react";
import star from "../assets/star.png";
import suhani from "../assets/SuhaniPic.png";
import Typewriter from "typewriter-effect";

//icon from react-icon
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="section about-outer">
      <div className="view-port about-container">
        {/* left portion */}
        <div className="about-left">
          <div className="about-heading">
            <img className="hide-star" src={star} />
            <h1>About Me</h1>
            <img src={star} />
          </div>

          <div className="about-details">
            <div className="who-am-I">
              <div className="name">
                <h1>I'm Suhani</h1>
                <img alt="smile" src="/images/smile.png" />
              </div>

              <p>
                Passionate about web development and love building interactive,
                dynamic websites. With a strong foundation in Data Structures
                and Algorithms, I enjoy solving problems efficiently and
                exploring innovative solutions.
              </p>
            </div>

            <div className="about-detail-bottom">
              <div className="about-static-dynamic">
                <span className="about-static">I am a passionate</span>
                <span className="about-dynamic">
                  <Typewriter
                    options={{
                      strings: [
                        "Problem Solver",
                        "Team Player",
                        "Learner",
                        "Web Developer",
                      ],
                      autoStart: true,
                      loop: true,
                      cursor: "_",
                      delay: 50,
                      deleteSpeed: 30,
                      pauseFor: 900,
                    }}
                  />
                </span>
              </div>
              <a href="images/Suhani BTech CSe 2026 Resume.pdf" download>
                <button>Download Resume</button>
              </a>
            </div>
          </div>
        </div>

        {/* right portion */}
        <div className="about-right">
          {/* profile container */}

          <div className="profile-container">
            {/* vector 1 */}
            <img
              alt="spring vector"
              src="/images/semi-spring.png"
              className="spring-vector"
            />
            {/* vector 2 */}
            <img
              alt="sparkle vector"
              src="/images/sparkle.png"
              className="sparkle-vector"
            />

            {/* top part */}
            <div className="profile-top">
              <div className="circle"></div>

              <div className="profile-name">Student</div>

              {/* three dots */}
              <div className="dot-container">
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
              </div>
            </div>

            {/* profile part */}
            <div className="about-profile">
              <img src={suhani} />
            </div>

            {/* contact part */}
            <div className="profile-bottom">
              <div className="circle">
                <a href="https://github.com/Suhani-01" target="blank">
                  <FaGithub size={20} />
                </a>
              </div>

              <div className="circle">
                <a href="https://www.linkedin.com/in/suhani01/" target="blank">
                  <FaLinkedin size={20} />
                </a>
              </div>

              <div className="circle">
                <a href="mailto:suhaninegi124@gmail.com" target="blank">
                  <FaEnvelope size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
