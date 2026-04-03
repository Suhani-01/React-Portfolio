import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="footer-outer">
      <div className="footer-container">
       
        <h3>Suhani</h3>
        <p className="hero">Bit by bit , byte by byte - growth never stops .</p>
        <p>suhaninegi124@gmail.com</p>

        <div className="footer-icons">
          <a target="blank" href="https://github.com/Suhani-01"><FaGithub color="#000" size={26} /></a>
          
          <a target="blank" href="https://www.linkedin.com/in/suhani01/"><FaLinkedin color="#0077b5" size={26} /></a>
          <a target="blank" href="https://wa.me/919389917601"><FaWhatsapp color="#25D366" size={26} /></a>
          <a target="blank" href="mailto:suhaninegi124@gmail.com"><MdEmail color="#0088ff" size={26} /></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
