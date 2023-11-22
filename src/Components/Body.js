import React from "react";
import Header from "./Header";
import { SEARCH_LOGO } from "../Utils/Constants";
import { Link } from "react-router-dom";

const Body = () => {
  return (
    <div className="h-[100vh]">
      <Header />
      <div className="flex justify-center items-center h-[70vh]">
        <div className="flex justify-center items-center bg-amber-500 h-[400px] w-[800px] rounded-full bg-opacity-10 ">
          <p className="font-semibold text-3xl text-center px-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quae
            quidem repellat aperiam laborum possimus eaque quo quaerat.
            Consequatur, magni ipsam nemo nesciunt est iste sit tempore eos fuga
            temporibus?
          </p>
        </div>
      </div>
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

export default Body;
