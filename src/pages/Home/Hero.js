import React from "react";
import "../../styles/Hero.css";
import reham from "../../assest/WhatsApp Image 2025-03-30 at 4.23.17 AM.jpeg";
import { Link } from "react-router-dom";
function Hero() {
  return (
    <section id="hero_section">
      <div className="img_container">
        {" "}
        <img src={reham} alt="img" className="personal_img" />
      </div>
      <h3 className="title">Reham Magharee</h3>
      <p className="personal-bio">
        Aspiring Creative Front-End Developer specializing in React.js
      </p>
      <div className="btn_container">
        <a
          href="https://wa.me/972593230201"
          className="btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}
export default Hero;
