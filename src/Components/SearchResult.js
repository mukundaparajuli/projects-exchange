import React from "react";
import Header from "./Header";
import SearchByProperties from "./SearchByProperties";
import SearchBar from "./SearchBar";
import ProjectCards from "./ProjectCards";

const SearchResult = () => {
  return (
    <div>
      <Header />
      <div>
        <div className="mt-24 flex justify-center">
          <SearchBar />
        </div>
        <div className="w-screen flex">
          <SearchByProperties />
          <div className="w-[75%] ml-[20%]">
            <ProjectCards />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
