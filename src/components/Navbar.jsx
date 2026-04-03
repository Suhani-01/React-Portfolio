 

function Navbar({activeSection}) {

  // //active section state
  // const [activeSection,setActiveSection]=useState('about');

  // useEffect(()=>{
  //   const sections=document.querySelectorAll('section');

  //   const options={
  //     root:null , // viewport will maintain
  //     threshold:0.6, // 60% percent section visible
  //   }

  //   const observer=new IntersectionObserver((entries)=>{
  //     entries.forEach((entry)=>{
  //       if(entry.isIntersecting){
  //         setActiveSection(entry.target.id);
  //       }
  //     })
  //   },options);

  //   sections.forEach(section=> observer.observe(section));
  //   return ()=>observer.disconnect();


  // },[])

  return (
    <nav className="navbar">
      <div className="navbar-container ">
        {/***********   Logo *************/}

       <a href="#about" style={{textDecoration:"none"}}>
        <div className="logo-container">
          <div className="logo"> SN </div>
          <div className="logo-text">Suhani</div>
        </div>
       </a>
        

        <div className="sections">
          <a style={{ textDecoration: "none" }} href="#about">
            <div style={{color:activeSection=="about"?"black":"" , fontWeight: activeSection === "about" ? "bold" : "normal"}}> About Me </div>
          </a>
          <a style={{ textDecoration: "none" }} href="#skill">
            <div style={{color:activeSection=="skill"?"black":"" , fontWeight: activeSection === "skill" ? "bold" : "normal"}}> Skills </div>
          </a>
          <a style={{ textDecoration: "none" }} href="#education">
            <div style={{color:activeSection=="education"?"black":"", fontWeight: activeSection === "education" ? "bold" : "normal"}}> Education </div>
          </a>
          <a style={{ textDecoration: "none" }} href="#project">
            <div style={{color:activeSection=="project"?"black":"", fontWeight: activeSection === "project" ? "bold" : "normal"}}> Project </div>
          </a>
          <a style={{ textDecoration: "none" }} href="#experience">
            <div style={{color:activeSection=="experience"?"black":"", fontWeight: activeSection === "experience" ? "bold" : "normal"}}> Experiences </div>
          </a>

          <a style={{ textDecoration: "none" }} href="#certificate">
            <div style={{color:activeSection=="certificate"?"black":"", fontWeight: activeSection === "certificate" ? "bold" : "normal"}}> Certifications </div>
          </a>
        </div>

        <a style={{textDecoration:"none"}} href="#contact">
          <div className="contact-button">
          <p>Contact Me</p>
          <div className="contact-arrow">↓</div>
        </div>
        </a>
        
      </div>
    </nav>
  );
}

export default Navbar;
