import React from 'react';
import { useParams } from 'react-router-dom';
import useProjectDetails from "../hooks/useProjectDetails";

const ViewProject = () => {
  const { projectId } = useParams();
  const project = useProjectDetails(projectId);
  console.log(project)
  return (
    <div>
      {project && (
        <div>
          <div>{project.title}</div>
          <div><iframe title="project-pdf" src={project.pdfUrl} frameBorder="0"></iframe></div>
        </div>
      )}
    </div>
  );
};

export default ViewProject;
