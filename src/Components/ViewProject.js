import React from "react";
import { useParams } from "react-router-dom";
// import { Document, Page, pdfjs } from "react-pdf";
import useProjectDetails from "../hooks/useProjectDetails";

// pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const ViewProject = () => {
  const { projectId } = useParams();
  const project = useProjectDetails(projectId);

  return (
    project && (
      <div>
        <div className=" mt-4 ml-4 ">
          <div className="text-5xl font-bold">{project.name}</div>
          <div className="font-bold italic text-md">
            {project.subject},{project.university}
          </div>
        </div>
        <div className="flex justify-center items-center">
          <iframe
            src={project.pdfURL}
            frameborder="0"
            className="h-[100vh] w-[100vh]"
          ></iframe>
        </div>
      </div>
    )
  );
};

export default ViewProject;
