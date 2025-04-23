// src/pages/Projects.jsx
import React from "react";
import ProjectCard from "../../components/layouts/ProjectCard";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import proj1 from '../../assest/proj1.png'
import proj2 from '../../assest/proj2.png'
import proj4 from '../../assest/proj4.png'
import proj3 from'../../assest/proj3.png'
import '../../styles/Projects.css'
const Projects = () => {
  const projectsData = [
    {
      id: 1,
      title: "Beauty Center Website",
      image: proj1 , 
      description: "Beauty Center is a responsive web app built with React.js. It features styled pages, smooth navigation, and a simple login system using localStorage.",
      technologies: ["React.js", "Styled Components", "React Router", "localStorage"],
      liveLink: "https://beautycenterwebsite.vercel.app/",
    },
    {
      id: 2,
      title: "Business Website",
      image: proj2,
      description: "A responsive React.js web application dedicated to providing customized marketing and promotional services for business owners and companies",
      technologies: ["React.js", "Responsive Design" , "React Router"],
      liveLink: "https://business-website-lac.vercel.app/",
    },
    {
      id: 4,
      title: "Insta Gallery",
      image: proj4,
      description: "A simple and responsive React.js application that allows users to enter a keyword and search for related images through an external API (such as Pexels).",
      technologies: ["React.js", "Context API"],
      liveLink: "https://insta-gallery-project.vercel.app/",
    },
    {
      id: 3,
      title: "Image Editor",
      image: proj3,
      description: "A simple web application that allows users to upload an image and apply preset filters (such as brightness, contrast, saturation, etc.) through an interactive interface built with React.",
      technologies: ["React.js", "Styled Components"],
      liveLink: "https://insta-gallery-project.vercel.app/",
    },
  ];

  return (
    <section id="projects_page">
        <Container>
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
      
      </Container>
    </section>
  );
};

export default Projects;
