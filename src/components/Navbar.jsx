import { useState } from "react";

function Navbar({ activeSection }) {
  const [sideBarActive,setSideBarActive]=useState(false);
  const [closingSideBar,setClosingSideBar]=useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container ">
          {/***********   Logo *************/}

          <a href="#about" style={{ textDecoration: "none" }}>
            <div className="logo-container">
              <div className="logo"> SN </div>
              <div className="logo-text">Suhani</div>
            </div>
          </a>

          <div className="sections nav-bar-sections">
            <a style={{ textDecoration: "none" }} href="#about">
              <div
                style={{
                  color: activeSection == "about" ? "black" : "",
                  fontWeight: activeSection === "about" ? "bold" : "normal",
                }}
              >
                {" "}
                About Me{" "}
              </div>
            </a>
            <a style={{ textDecoration: "none" }} href="#skill">
              <div
                style={{
                  color: activeSection == "skill" ? "black" : "",
                  fontWeight: activeSection === "skill" ? "bold" : "normal",
                }}
              >
                {" "}
                Skills{" "}
              </div>
            </a>
            <a style={{ textDecoration: "none" }} href="#education">
              <div
                style={{
                  color: activeSection == "education" ? "black" : "",
                  fontWeight: activeSection === "education" ? "bold" : "normal",
                }}
              >
                {" "}
                Education{" "}
              </div>
            </a>
            <a style={{ textDecoration: "none" }} href="#project">
              <div
                style={{
                  color: activeSection == "project" ? "black" : "",
                  fontWeight: activeSection === "project" ? "bold" : "normal",
                }}
              >
                {" "}
                Project{" "}
              </div>
            </a>
            <a style={{ textDecoration: "none" }} href="#experience">
              <div
                style={{
                  color: activeSection == "experience" ? "black" : "",
                  fontWeight:
                    activeSection === "experience" ? "bold" : "normal",
                }}
              >
                {" "}
                Experiences{" "}
              </div>
            </a>

            <a style={{ textDecoration: "none" }} href="#certificate">
              <div
                style={{
                  color: activeSection == "certificate" ? "black" : "",
                  fontWeight:
                    activeSection === "certificate" ? "bold" : "normal",
                }}
              >
                {" "}
                Certifications{" "}
              </div>
            </a>
          </div>

          <div className="nav-right">
            { !sideBarActive && 
              <a style={{ textDecoration: "none" }} href="#contact">
              <div className="contact-button">
                <p>Contact Me</p>
                <div className="contact-arrow">↓</div>
              </div>
            </a>
            }
            

            <button onClick={()=>{
              setSideBarActive(true)
            }} className="navbar-menue">☰</button>
          </div>
        </div>
      </nav>


      <div style={{display : sideBarActive?"grid":"none" , backgroundColor : closingSideBar?"transparent":""}} className="nav-over">
        {/* Black Overlay: Background shadow ke liye */}
        <div onClick={()=>{
          setSideBarActive(false)
        }} className="overlay-shadow"></div>

        {/* Sidebar: Right half content ke liye */}
        <div className={`sidebar-container ${closingSideBar ? "hide" : ""}`}>
          <button onClick={()=>{
            setClosingSideBar(true);
            setTimeout(()=>{
              setClosingSideBar(false);
              setSideBarActive(false);
            },300)
            
          }} className="close-navbar">❮ Back</button>
          <div className="sidebar-links">
            <a href="#about" style={{
                  color: activeSection == "about" ? "black" : "",
                  fontWeight: activeSection === "about" ? "bold" : "normal",
                }}>About Me</a>
            <a href="#skill" style={{
                  color: activeSection == "skill" ? "black" : "",
                  fontWeight: activeSection === "skill" ? "bold" : "normal",
                }}>Skills</a>
            <a href="#education" style={{
                  color: activeSection == "education" ? "black" : "",
                  fontWeight: activeSection === "education" ? "bold" : "normal",
                }}>Education</a>
            <a href="#project" style={{
                  color: activeSection == "project" ? "black" : "",
                  fontWeight: activeSection === "project" ? "bold" : "normal",
                }}>Projects</a>
            <a href="#experience" style={{
                  color: activeSection == "experience" ? "black" : "",
                  fontWeight: activeSection === "experience" ? "bold" : "normal",
                }}>Experiences</a>
            <a href="#certificate" style={{
                  color: activeSection == "certificate" ? "black" : "",
                  fontWeight: activeSection === "certificate" ? "bold" : "normal",
                }}>Certifications</a>
            <a href="#contact" style={{
                  color: activeSection == "contact" ? "black" : "",
                  fontWeight: activeSection === "contact" ? "bold" : "normal",
                }}>Contact Me</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
