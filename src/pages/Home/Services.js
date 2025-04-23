import React from "react";
import { Container , Row ,Col} from "react-bootstrap";
import Cards from "../../components/layouts/Cards";
import code from '../../assest/code-slash-svgrepo-com(1).svg'
import design from '../../assest/recive-square-svgrepo-com.svg'
import speed from '../../assest/speedometer-needle-svgrepo-com.svg'
import { useNavigate } from "react-router-dom"; 
import '../../styles/Services.css'

const Services_Cards = [
    {
      id: 0,
      icon: code,
      title: "Front-End Development",
      paragraph:
        "I build responsive and interactive interfaces using React, focusing on clean code, fast performance, and full device compatibility.",
    },
    {
      id: 2,
      icon: design,
      title: "UI/UX Design Implementation",
      paragraph:
        "I turn UI/UX designs into functional front-end code with attention to detail, responsiveness, and optimized user experience.",
    },
    {
      id: 2,
      icon: speed,
      title: "Web Performance Optimization",
      paragraph:
        "I improve site speed, responsiveness, and accessibility by applying best practices to deliver a smooth and fast experience.",
    },
  ];
  
    
function Services(){
  const navigate = useNavigate();

  const openProjects = () => {
    navigate("/projects");
  };

    return(
    
    <section id="services_section">
        <Container>
        <div className="services">
              <h4>What I Do</h4>
              <h2>
                My Services
              </h2>
              </div>
            
            <Row className="row-cards">
            {Services_Cards.map((cardData,index)=>(
                <Cards
                    key={index}
                    id={index } 
                    icon={cardData.icon}
                    title={cardData.title}
                    paragraph={cardData.paragraph}
                />
            )
            )}
        </Row>

      <div className="btn_container">  <button  className="proj-button"onClick={openProjects}>Explore My Projects</button> </div>

        </Container>
    </section>
    
    )
}
export default Services;