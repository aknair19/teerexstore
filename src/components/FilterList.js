import React from "react";

const FilterList = () => {
  return (
    <div className=" w-1/4 max-w-[250px]    ml-4">
      <div className="flex flex-col px-6 py-4 gap-2 `  shadow-lg">
        <p className="font-semibold text-blue-400">Color</p>
        <ul>
          <li className="px-1">
            {" "}
            <input
              type="checkbox"
              className=" text-lg accent-blue-400 mr-1"
            />{" "}
            Red
          </li>
          <li className="px-1">
            <input type="checkbox" className=" text-lg accent-blue-400 mr-1" />{" "}
            Blue
          </li>
          <li className="px-1">
            <input type="checkbox" className=" text-lg accent-blue-400 mr-1" />
            Green
          </li>
        </ul>
        <p className="font-semibold text-blue-400 ">Gender</p>
        <ul>
          <li className="px-1">
            <input type="checkbox" className=" text-lg accent-blue-400 mr-1" />
            Men
          </li>
          <li className="px-1">
            <input type="checkbox" className=" text-lg accent-blue-400 mr-1" />
            Women
          </li>
        </ul>
        <p className="font-semibold text-blue-400 ">Price</p>
        <ul>
          <li className="px-1">
            <input type="checkbox" className=" text-lg accent-blue-400 mr-1" />
            0-₹250
          </li>
          <li className="px-1">
            <input type="checkbox" className=" text-lg accent-blue-400 mr-1" />
            ₹250-₹400
          </li>
          <li className="px-1">
            <input type="checkbox" className=" text-lg accent-blue-400 mr-1" />
            ₹450 and Above
          </li>
        </ul>
        <p className="font-semibold text-blue-400 ">Type</p>
        <ul>
          <li className="px-1">
            <input type="checkbox" className=" text-lg accent-blue-400 mr-1" />
            Polo
          </li>
          <li className="px-1">
            <input type="checkbox" className=" text-lg accent-blue-400 mr-1" />
            Hoodie
          </li>
          <li className="px-1">
            <input type="checkbox" className=" text-lg accent-blue-400 mr-1" />
            Basic
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FilterList;
