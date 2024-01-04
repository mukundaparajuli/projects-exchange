import React from "react";
import { Link, useParams } from "react-router-dom";
import { PDF_LOGO } from "../Utils/Constants";
import useProjectDetails from "../hooks/useProjectDetails";
import { useDispatch } from "react-redux";
import { addCart } from "../Utils/projectsSlice";

const ProjectsDetail = () => {
  const dispatch = useDispatch();
  const { projectId } = useParams();
  const project = useProjectDetails(projectId);
  const handleCartClick = (cartedProject) => {
    dispatch(addCart(cartedProject));
    console.log(cartedProject);
  };

  return (
    <div>
      <div className="mt-24 m-4 flex border p-8 justify-center">
        <div className="w-[30%] self-center">
          <Link to={`/project-details/view-pdf/${projectId}`}>
            <img className="w-full h-96 " src={PDF_LOGO} alt="" />
          </Link>
          <div className="flex justify-evenly w-full">
            <button
              className="border border-black rounded-lg m-2 p-2 w-32 font-bold bg-orange-300"
              onClick={() => handleCartClick(project)}
            >
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
