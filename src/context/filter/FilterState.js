import React, { useEffect, useState } from "react";
import FilterContext from "./FilterContext";
const FilterState = ({ children }) => {
  const [filterInputByColor, setFilterInputByColor] = useState([]);
  const [filterInputByGender, setFilterInputByGender] = useState([]);
  const [filterInputByPrice, setFilterInputByPrice] = useState([]);
  const [filterInputByType, setFilterInputByType] = useState([]);

  const handleCheckBoxChange = (event, state, setState) => {
    const { value, checked } = event.target;
    if (checked) {
      setState([...state, value]);
    } else {
      setState(state.filter((s) => s !== value));
    }
  };




  return (
    <FilterContext.Provider
      value={{
        handleCheckBoxChange,
        filterInputByColor,
        setFilterInputByColor,
        filterInputByGender,
        setFilterInputByGender,
        filterInputByPrice,
        setFilterInputByPrice,
        filterInputByType,
        setFilterInputByType,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export default FilterState;
