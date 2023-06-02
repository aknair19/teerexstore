import React, { useEffect, useState } from "react";
import { useContext } from "react";
import useFetch from "../utils/hooks/useFetch";
import { REACT_APP_FETCH_PRODUCTS } from "../utils/constants";
import SearchContext from "../context/search/SearchContext";
import {
  filterProductByColorList,
  filterProductByGenderList,
  filterProductByPriceList,
  filterProductByTypeList,
} from "../utils/constants";

const FilterList = () => {
  const { apiData } = useFetch(REACT_APP_FETCH_PRODUCTS);
  const { searchData, setSearchData } = useContext(SearchContext);
  const initialState = {
    gender: [],
    color: [],
    price: [],
    type: [],
  };
  const [selectedFilters, setSelectedFilters] = useState(initialState);
  useEffect(() => {
    updatedResults();
  }, [selectedFilters]);
  const handleClearAllFilters = () => {
    setSelectedFilters(initialState);
  };

  const handleFilterSelection = (filterCategory, filterValue) => {
    setSelectedFilters((prevSelectedFilters) => {
      const isFilterSelected =
        prevSelectedFilters[filterCategory].includes(filterValue);
      if (isFilterSelected) {
        return {
          ...prevSelectedFilters,
          [filterCategory]: prevSelectedFilters[filterCategory].filter(
            (value) => value !== filterValue
          ),
        };
      } else {
        return {
          ...prevSelectedFilters,
          [filterCategory]: [
            ...prevSelectedFilters[filterCategory],
            filterValue,
          ],
        };
      }
    });
  };
  const updatedResults = () => {
    const filteredResults = searchData.filter((item) => {
      const { gender, color, price, type } = selectedFilters;
      return (
        (gender.length === 0 || gender.includes(item.gender.toLowerCase())) &&
        (color.length === 0 || color.includes(item.color.toLowerCase())) &&
        (price.length === 0 || price.includes(item.price)) &&
        (type.length === 0 || type.includes(item.type.toLowerCase()))
      );
    });
    setSearchData(filteredResults);
  };

  return (
    <div className=" flex    w-full  md:h-[550px]  md:w-1/5 md:max-w-[250px]    ml-4">
      <div className="flex flex-wrap w-screen  md:w-full  md:flex-col px-6 py-4 gap-2    shadow-lg">
        <button
          className="font-semibold   text-start    rounded-lg cursor-pointer font-semibold text-sm text-red-400 hover:text-gray-400 hidden"
          onClick={() => handleClearAllFilters()}
        >
          Clear All Filters
        </button>
        <div className="flex md:flex-col flex space-x-5 md:space-x-1">
          <p className="font-semibold text-blue-400">Color</p>
          <ul className=" flex md:flex-col">
            {filterProductByColorList.map((option) => (
              <li key={option.id} className="px-1 ">
                {" "}
                <input
                  type="checkbox"
                  value={option.value}
                  className=" text-lg accent-blue-400 mr-1"
                  checked={selectedFilters.color.includes(option.value)}
                  onChange={() => handleFilterSelection("color", option.value)}
                />{" "}
                {option.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex md:flex-col flex space-x-2 md:space-x-1">
          <p className="font-semibold text-blue-400 ">Gender</p>
          <ul className=" flex md:flex-col">
            {filterProductByGenderList.map((option) => (
              <li key={option.id} className="px-1">
                <input
                  type="checkbox"
                  value={option.value}
                  className=" text-lg accent-blue-400 mr-1"
                  checked={selectedFilters.gender.includes(option.value)}
                  onChange={() => handleFilterSelection("gender", option.value)}
                />
                {option.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex space-x-6 md:space-x-1 md:flex-col ">
          <p className="font-semibold text-blue-400 ">Price</p>
          <ul className=" flex md:flex-col">
            {filterProductByPriceList.map((option) => (
              <li className="px-1" key={option.id}>
                <input
                  type="checkbox"
                  value={option.value}
                  checked={selectedFilters.price.includes(option.value)}
                  className=" text-lg accent-blue-400 mr-1"
                  onChange={() => handleFilterSelection("price", option.value)}
                />
                {option.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex md:flex-col flex space-x-6 md:space-x-1">
          <p className="font-semibold text-blue-400 ">Type</p>
          <ul className=" flex md:flex-col">
            {filterProductByTypeList.map((option) => (
              <li key={option.id} className="px-1">
                <input
                  type="checkbox"
                  className=" text-lg accent-blue-400 mr-1"
                  value={option.value}
                  checked={selectedFilters.type.includes(option.value)}
                  onChange={() => handleFilterSelection("type", option.value)}
                />
                {option.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FilterList;
