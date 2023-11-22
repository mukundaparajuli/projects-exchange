import React from "react";
import { Link } from "react-router-dom";
import { SEARCH_LOGO } from "../Utils/Constants";

const SearchBar = () => {
  return (
    <div>
      <div className="flex justify-center">
        <input
          className="h-16 text-white bg-gray-600 text-2xl font-semibold w-[700px] border-2 border-black outline-none border-r-0 px-4 p-2 rounded-l-full"
          type="text"
          placeholder="Search for the Project Reports...and more"
        />
        <Link to="/search-result">
          <button>
            <img
              className="h-16 p-3 rounded-r-full border-2 border-black bg-gray-600"
              src={SEARCH_LOGO}
              alt=""
            />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SearchBar;
