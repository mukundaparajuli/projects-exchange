import React from "react";
// import { PDF_LOGO } from "../Utils/Constants";
import { useSelector } from "react-redux";
import ProjectCard from "./ProjectCard";

const ProjectCards = () => {
  const projects = useSelector((state) => state.projects.projects);
  console.log(projects);
  return (
    <div className="w-[75%] ml-[20%] flex flex-wrap justify-evenly mt-8 p-4 ">
      {!projects ? (
        <div>Loading...</div>
      ) : (
        projects.map((project) => (
          <ProjectCard {...project} key={project.index} />
        ))
      )}
    </div>
  );
};

export default ProjectCards;
