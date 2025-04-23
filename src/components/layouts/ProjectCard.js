import React from "react";
import "../../styles/ProjectCard.css";

const ProjectCard = ({
  title,
  image,
  description,
  technologies,
  liveLink,
  githubLink,
}) => {
  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-img" />
      <div className="project-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="tech-stack">
          {technologies.map((tech, i) => (
            <span key={i} className="tech">
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="project-link">
        <a href={liveLink} target="_blank" rel="noopener noreferrer">
        Explore
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
