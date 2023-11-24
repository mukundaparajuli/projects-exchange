import React, { useState } from "react";
import { filterProjects } from "../Utils/helperFunctions";
import { useDispatch, useSelector } from "react-redux";
import { addFilteredProjects } from "../Utils/projectsSlice";

const SearchByProperties = () => {
  const projects = useSelector((store) => store.projects);
  const filteredProjects = useSelector(
    (store) => store.projects.filteredProjects
  );
  const [selectedDegree, setSelectedDegree] = useState("");
  const [selectedUniversity, setSelectedUniversity] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");

  const dispatch = useDispatch();

  const handleSelectorChange = (variable, value, name) => {
    variable(value);
    const newfilteredProjects = filterProjects(
      filteredProjects,
      value,
      name,
      projects
    );
    dispatch(addFilteredProjects(newfilteredProjects));
    console.log(value);
  };

  return (
    <div className="h-[100vh] inline-block fixed bg-white shadow-lg p-4  w-[20%]">
      <div>
        <h1 className="font-semibold text-xl italic text-gray-500 p-2 mx-2">
          Categories:
        </h1>
      </div>
      <ul>
        <li className="my-4">
          <label className="p-2 m-2 font-semibold " htmlFor="degree">
            Degree:
          </label>
          <select
            className="border-2 w-28 rounded-lg"
            name="degree"
            value={selectedDegree}
            onChange={(e) =>
              handleSelectorChange(setSelectedDegree, e.target.value, "degree")
            }
          >
            <option value="All">All</option>
            <option value="CSE">CSE</option>
            <option value="ECE">ECE</option>
            <option value="Civil">Civil</option>
            <option value="CS/IT">CS/IT</option>
          </select>
        </li>
        <li className="my-4">
          <label className="p-2 m-2 font-semibold" htmlFor="subject">
            Subjects:
          </label>
          <select
            className="border-2 w-28 rounded-lg"
            name="subject"
            value={selectedSubject}
            onChange={(e) =>
              handleSelectorChange(
                setSelectedSubject,
                e.target.value,
                "subject"
              )
            }
          >
            <option value="All">All</option>
            <option value="Physics">Physics</option>
            <option value="Digital Logic">Digital Logic</option>
          </select>
        </li>
        <li className="my-4">
          <label className="p-2 m-2 font-semibold" htmlFor="university">
            University:
          </label>
          <select
            className="border-2 w-28 rounded-lg"
            name="university"
            value={selectedUniversity}
            onChange={(e) =>
              handleSelectorChange(
                setSelectedUniversity,
                e.target.value,
                "university"
              )
            }
          >
            <option value="All">All</option>
            <option value="CSE">JNU</option>
            <option value="ECE">SRM</option>
            <option value="Civil">VIT</option>
          </select>
        </li>
        <li className="my-4">
          <label
            className="p-2 m-2 w-16 font-semibold"
            htmlFor="plagarism-free"
          >
            Plagiarism Free:
          </label>
          <input className="h-5 w-5" type="checkbox" name="plagiarism" />
        </li>
      </ul>
      {/* {console.log(projects)} */}
    </div>
  );
};

export default SearchByProperties;
