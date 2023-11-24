import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";

const ProjectCards = () => {
  const filteredProjects = useSelector(
    (state) => state.projects.filteredProjects
  );

  // console.log();

  return (
    <div className=" flex flex-wrap justify-evenly mt-8 p-4 ">
      {!filteredProjects ? (
        <div>Loading...</div>
      ) : (
        filteredProjects?.map((project) => (
          <Link
            to={"/project-details/" + project.projectId}
            key={project.projectId}
          >
            <ProjectCard {...project} />
          </Link>
        ))
      )}
    </div>
  );
};

export default ProjectCards;
