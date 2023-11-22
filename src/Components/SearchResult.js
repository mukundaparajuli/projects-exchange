import React from "react";
import Header from "./Header";
import { SEARCH_LOGO } from "../Utils/Constants";
import SearchByProperties from "./SearchByProperties";

const SearchResult = () => {
  return (
    <div>
      <Header />
      <div>
        <div className="flex justify-center my-4">
          <input
            className="h-16 text-white bg-gray-600 text-2xl font-semibold w-[700px] border-2 border-black border-r-0 px-4 p-2 rounded-l-full outline-none"
            type="text"
            placeholder="Search for the Project Reports...and more"
          />
          <button>
            <img
              className="h-16 p-3 rounded-r-full border-2 border-black bg-gray-600"
              src={SEARCH_LOGO}
              alt=""
            />
          </button>
        </div>
        <div>
          <SearchByProperties />
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
