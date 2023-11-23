import React from "react";
// import { useSelector } from "react-redux";

const SearchByProperties = () => {
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
          <select className="border-2 w-28 rounded-lg" name="degree">
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
          <select className="border-2 w-28 rounded-lg" name="subject">
            <option value="Physics">Physics</option>
            <option value="Digital Logic">Digital Logic</option>
          </select>
        </li>
        <li className="my-4">
          <label className="p-2 m-2 font-semibold" htmlFor="university">
            University:
          </label>
          <select className="border-2 w-28 rounded-lg" name="university">
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
