import { React, useState, useEffect } from "react";
import arrow from "../../assest/design-svgrepo-com(1).svg";
import "../../styles/Footer.css";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../../assest/__لقطة_الشاشة__50_-removebg-preview.png";

function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const listenToScroll = () => {
    const heightToHidden = 250;
    const windowScroll = window.scrollY || document.documentElement.scrollTop;

    if (windowScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);

    return () => {
      window.removeEventListener("scroll", listenToScroll);
    };
  }, []);
  return (
    <section id="footer_section">
      {isVisible && (
        <div className="scroll_top" onClick={scrollToTop}>
          <i className="bi bi-arrow-up custom-arrow"></i>{" "}
        </div>
      )}
      <Container>
        <Row className="footer-content align-items-center">
          
          <Col md={3} className="footer-logo">
          <div className="logo-container"> 
            <img src={logo} alt="Logo" />
            </div>
          </Col>

          <Col md={6} className="footer-links">
            <ul>
              <li>
                <a href="#hero_section">Home</a>
              </li>
              <li>
                <a href="#about_section">About</a>
              </li>
              <li>
                <a href="#services_section">Services</a>
              </li>
              <li>
                <a href="#contact_section">Contact</a>
              </li>
            </ul>
          </Col>

          <Col md={3} className="footer-social">
            <a
              href="https://wa.me/+97259230201"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-whatsapp"></i>
            </a>
            <a
              href="https://github.com/RehamRaed"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-github"></i>
            </a>
            <a
              href="https://twitter.com/RehamRaed03"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-twitter"></i> 
            </a>
          </Col>
        </Row>
        <Row className="seconed-row">
          <h4>Copyright © 2025 Reham Portfolio</h4>
        </Row>
      </Container>
    </section>
  );
}
export default Footer;
