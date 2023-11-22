import React from "react";
import { PDF_LOGO } from "../Utils/Constants";

const ProjectCard = ({ name, degree, subject, university }) => {
  return (
    <div className="h-64 w-56 shadow-xl m-2 p-4">
      <div>
        <img className="h-24" src={PDF_LOGO} alt="pdf Logo" />
      </div>
      <div>
        <h1 className="font-bold text-xl">{name}</h1>
        <p className="font-semibold text-lg">{subject}</p>
        <p className="font-semibold text-lg">{university}</p>
        <p className="font-semibold italic">{degree}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
