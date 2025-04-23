import React from "react";
import "../../styles/Contact.css"
import { Container } from "react-bootstrap";

function Contact(){
    
const inputs = [
    { placeholder: "Your Name...", type: "text" },
    { placeholder: "Your Phone...", type: "tel" },
    { placeholder: "Your Email...", type: "email" },
    { placeholder: "Your Message...", type:"textarea"}
  ];

    return(
        <section id="contact_section">
            <Container>
            <div className="contact">
              <h4>Get In Toucha</h4>
              <h2>
                Contact Me
              </h2></div>
              <p class="first-line">Great design, smooth performance, and clean development — all it takes is a message to get started</p>
              <p class="second-line">Let’s bring your vision to life, together</p>
              <div className="btn_container">  <a
  href="https://wa.me/972593230201"
  className="btn"
  target="_blank"
  rel="noopener noreferrer"
>
  <i className="bi bi-whatsapp"></i> Chat on WhatsApp
</a></div>
            </Container>
            </section>
    )
};
export default Contact;