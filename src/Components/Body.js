import React from "react";
import Header from "./Header";
import SearchBar from "./SearchBar";

const Body = () => {
  return (
    <div className="h-[100vh] static">
      <Header />
      <div className="flex justify-center items-center mt-20 h-[70vh]">
        <div className="flex justify-center items-center bg-amber-500 h-[400px] w-[800px] rounded-full bg-opacity-10 ">
          <p className="font-semibold text-3xl text-center px-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quae
            quidem repellat aperiam laborum possimus eaque quo quaerat.
            Consequatur, magni ipsam nemo nesciunt est iste sit tempore eos fuga
            temporibus?
          </p>
        </div>
      </div>
      <SearchBar />
    </div>
  );
};

export default Body;
