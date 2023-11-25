import React from "react";
import { useParams } from "react-router-dom";
import { PDF_LOGO } from "../Utils/Constants";
import useProjectDetails from "../hooks/useProjectDetails";
import ProjectCards from "./ProjectCards";

const ProjectsDetail = () => {
  const { projectId } = useParams();
  // console.log(typeof projectId);
  const project = useProjectDetails(projectId);

  return (
    <div>
      <div className="mt-24 m-4 flex border p-8 justify-center">
        <div className="w-[30%] self-center">
          <img className="w-full h-96 " src={PDF_LOGO} alt="" />
          <div className="flex justify-evenly w-full">
            <button className="border border-black rounded-lg m-2 p-2 w-32 font-bold bg-orange-300">
              Add to Cart
            </button>
            <button className="border border-black rounded-lg m-2 p-2 w-32 font-bold bg-green-300">
              Buy Now
            </button>
          </div>
        </div>
        <div className="w-[60%]">
          {project ? (
            <>
              <h1 className="font-bold text-4xl m-4 flex self-center w-full ">
                {project.name}
              </h1>
              <p className="font-semibold text-2xl m-4 ">
                Subject: {project.subject}
              </p>
              <p className="font-semibold text-2xl m-4 ">
                Degree: {project.degree}
              </p>
              <p className="font-semibold text-2xl m-4 ">
                University: {project.university}
              </p>
              <p className="font-semibold text-2xl m-4 ">
                {project.plagiarism ? (
                  <div>Plagiarism Free: Yes</div>
                ) : (
                  <div>Plagiarism Free: No</div>
                )}
              </p>
              <div className="text-lg font-semibold m-4 text-justify">
                <span className="font-bold text-xl">About the Project:</span>
                <p>{project.description}</p>
              </div>
            </>
          ) : (
            <p>Project not found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectsDetail;
