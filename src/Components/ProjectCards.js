import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";

const ProjectCards = () => {
  const filteredProjects = useSelector(
    (state) => state.projects.filteredProjects
  );

  return (
    <div className="flex flex-wrap justify-evenly mt-8 p-4">
      {filteredProjects && filteredProjects.length > 0 ? (
        filteredProjects.map((project) => (
          <Link
            to={"/project-details/" + project.projectId}
            key={project.projectId}
          >
            <ProjectCard {...project} />
          </Link>
        ))
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default ProjectCards;
