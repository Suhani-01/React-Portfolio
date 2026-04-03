
import { useEffect, useState } from 'react'
import './App.css'
import About from './components/About'
import Certification from './components/Certification'
import Contact from './components/Contact'
import Education from './components/Education'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'

function App() {

  //current active state
  const [activeSection,setActiveSection]=useState('about');

 
   useEffect(()=>{
    //select all sections
    const sections=document.querySelectorAll('section');

    const options={
      root:null,
      threshold:0.6,  //60% section visible
    }


    const observer=new IntersectionObserver((entries)=>{
      entries.forEach((entry)=>{
        if(entry.isIntersecting){
          setActiveSection(entry.target.id);
        }
      })
    },options);

    sections.forEach((section)=>observer.observe(section));

    return ()=> observer.disconnect();
   },[])



  return (
    <>
      
        <Navbar activeSection={activeSection} />
     

      <About/>
      <Skills/>
      <Education/>
      <Projects/>
      <Experience/>
      <Certification/>
      
      <Contact/>
      <Footer/>

    </>
  )
}

export default App
