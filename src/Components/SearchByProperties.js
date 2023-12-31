import React, { useState, useEffect } from "react";
import { filterProjects } from "../Utils/helperFunctions";
import { useDispatch, useSelector } from "react-redux";
import { addFilteredProjects } from "../Utils/projectsSlice";

const SearchByProperties = () => {
  const projects = useSelector((store) => store.projects.projects);
  const filteredProjects = useSelector(
    (state) => state.projects.filteredProjects
  );
  console.log(filteredProjects);

  const [selectedDegree, setSelectedDegree] = useState("All");
  const [selectedUniversity, setSelectedUniversity] = useState("All");
  const [selectedSubject, setSelectedSubject] = useState("All");
  const [plagiarismFree, setPlagiarismFree] = useState(true);
  const dispatch = useDispatch();

  const handleSelectorChange = (name, value) => {
    switch (name) {
      case "degree":
        setSelectedDegree(value);
        break;
      case "subject":
        setSelectedSubject(value);
        break;
      case "university":
        setSelectedUniversity(value);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    const selectedFilters = {
      degree: selectedDegree,
      subject: selectedSubject,
      university: selectedUniversity,
      plagiarism: plagiarismFree,
    };

    const filteredProjects = filterProjects(selectedFilters, projects);
    dispatch(addFilteredProjects(filteredProjects));
  }, [
    selectedDegree,
    selectedSubject,
    selectedUniversity,
    plagiarismFree,
    dispatch,
    projects,
  ]);

  return (
    <div className="h-[100vh] inline-block fixed bg-white shadow-lg p-4 w-[20%]">
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
            onChange={(e) => handleSelectorChange("degree", e.target.value)}
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
            onChange={(e) => handleSelectorChange("subject", e.target.value)}
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
            onChange={(e) => handleSelectorChange("university", e.target.value)}
          >
            <option value="All">All</option>
            <option value="JNU">JNU</option>
            <option value="SRM">SRM</option>
            <option value="VIT">VIT</option>
          </select>
        </li>
        <li className="my-4">
          <label
            className="p-2 m-2 w-16 font-semibold"
            htmlFor="plagiarism-free"
          >
            Plagiarism Free:
          </label>
          <input
            className="h-5 w-5"
            type="checkbox"
            name="plagiarism"
            value={plagiarismFree}
            defaultChecked
            onChange={() => setPlagiarismFree(!plagiarismFree)}
          />
        </li>
      </ul>
    </div>
  );
};

export default SearchByProperties;
