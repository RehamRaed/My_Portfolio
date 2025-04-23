import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../styles/About.css";


function About() {
  const skills = [
    { name: "JavaScript", level: 95 },
    { name: "React.js", level: 80 },
    { name: "Git & GitHub", level: 75 },
    { name: "StyledComp", level: 85 },
  ];
  
  return (
    <section id="about_section">
      <Container>
        <div className="top-about">
          <h4>Discover</h4>
          <h2>About Me</h2>
        </div>
        <Row className="about_row">
          <Col lg={6} sm={12} className="first_col">
            <h5>
              Every line of code reflects my passion, creating smooth,
              interactive, and beautiful experiences
            </h5>
            <p>
              I am a fourth-year Software Engineering student at Palestine
              University, specializing in Front-End Development. Passionate
              about coding and technology, I create user-friendly, visually
              appealing interfaces using JavaScript and React.js <br />
              My journey, shaped by challenges, motivates me to develop interactive and seamless web applications that come to life
            </p>
            <div className="btn_container">
            <a
              href="/CV.pdf"
              download
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download CV
            </a>
          </div>
          </Col>
          <Col lg={6} sm={12} className="seconed_col">
            <div className="info-box">
              <div className="info-wrapper">
                <div className="info-item">
                  <span className="info-title">Name : </span>
                  <span className="info-value">Reham Raed Magharee</span>
                </div>
              </div>

              <div className="info-wrapper">
                <div className="info-item">
                  <span className="info-title">Age : </span>
                  <span className="info-value">22</span>
                </div>
              </div>

              <div className="info-wrapper">
                <div className="info-item">
                  <span className="info-title">Phone : </span>
                  <span className="info-value">+972 593 230 201</span>
                </div>
              </div>

              <div className="info-wrapper">
                <div className="info-item">
                  <span className="info-title">Specialization : </span>
                  <span className="info-value">Front-End Developer</span>
                </div>
              </div>

              <div className="info-wrapper">
                <div className="info-item">
                  <span className="info-title">Experience : </span>
                  <span className="info-value">+1 years</span>
                </div>
              </div>

              <div className="info-wrapper">
                <div className="info-item">
                  <span className="info-title">Email : </span>
                  <span className="info-value">rehammagharee003@gmail.com</span>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        <div className="skills-container">
      {skills.map((skill, index) => (
        <div className="skill-box" key={index}>
          <div
            className="skill-border"
            style={{
              background: `conic-gradient(#ff6600 ${skill.level * 3.6}deg,rgba(255, 255, 255, 0.24) 0deg)`,
            }}
          >
            <div className="skill-content">
              <span className="percent">{skill.level}%</span>
              <span className="skill-name">{skill.name}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
    
   
      </Container>
    </section>
  );
}
export default About;
