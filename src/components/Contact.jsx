import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [sendingMessage,setSendingMessage]=useState(false);

  //Email JS
  const sendEmail = async(e) => {
    e.preventDefault();
    setSendingMessage(true);
    try{
        await emailjs.sendForm("service_ir6w8kd", "template_34ibeem", form.current, {
            publicKey: "-R3S2gW4k0cwCQd_V",
        });
        alert("Message sended sucessfully 🙂 ");
        
        
    }catch(error){
        alert("Failed...😵 to send your message");
        console.log(error.text);
    }

    form.current.reset();
    setSendingMessage(false);
      
  };

  return (
    <section id="contact" className="contact-outer">
      <div className="view-port">
        <img className="contact-vector" src="/images/contact-vector.png"/>

        <div className="section-heading">
          <h1>Contact Me</h1>
          <p>Let’s build something amazing together 🚀</p>
        </div>

        {/* contact content  */}

        <div className="contact-content">
          <div className="contact-image">
            <img className="contact-avatar" src="/images/contactbg.png" />
            
          </div>

          <div className="contact-form-wrapper">
            <form ref={form} onSubmit={sendEmail} className="contact-form">
              <label htmlFor="user_name">Your Name</label>
              <input disabled={sendingMessage} type="text" name="user_name" required />
               
              <label htmlFor="user_email" >Email Id</label>
              <input disabled={sendingMessage} type="email" name="user_email" required />
               

              <label htmlFor="user_phone">Phone Number</label>
              <input disabled={sendingMessage} type="tel" name="user_phone"/>
              

              <label htmlFor="message">Message</label>
              <textarea disabled={sendingMessage} name="message" rows="4" required />
               
              <button disabled={sendingMessage} type="submit">{sendingMessage ? "Sending..." : "Send Message"}</button>
            </form>
          </div>
        </div>
      </div>

      <div className="happy-outer">
        <img src="/images/smile.png"  className="happy"/>
      </div>
      
    </section>
  );
};

export default Contact;
