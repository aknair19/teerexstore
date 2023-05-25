import React from "react";
import { FaSearch } from "react-icons/fa";
const SearchComponent = () => {
  return (
    <div className="flex w-full  justify-center items-center p-4 h-18">
      <input
        type="text"
        
        className="border-b-2  w-64 p-1  border-b-blue-400 outline-none placeholder:italic placeholder:font-thin placeholder:text-sm placeholder:text-gray-400 "
        placeholder="Search for products.."
      />

      <button className=" border-b-blue-400 text-2xl text-blue-400">
        <FaSearch />
      </button>
    </div>
  );
};

export default SearchComponent;
