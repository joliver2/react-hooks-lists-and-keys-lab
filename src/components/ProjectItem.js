import React from "react";

function ProjectItem({ name, about, technologies }) {
  const projectTech = technologies.map(technology => (
    <span key={technology}>{technology}</span>
  ));
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        <span>{projectTech}</span>
      </div>
    </div>
  );
}

export default ProjectItem;
