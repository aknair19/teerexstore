import React, { useState, useEffect } from "react";
import useFetch from "../../utils/hooks/useFetch";
import SearchContext from "./SearchContext";
import { REACT_APP_FETCH_PRODUCTS } from "../../utils/constants";
const SearchState = ({ children }) => {
  const { apiData, isLoading, serverError } = useFetch(
    REACT_APP_FETCH_PRODUCTS
  );
  const [searchData, setSearchData] = useState(null);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    setSearchData(apiData);
  }, [apiData]);

  const handleSearch = () => {
    const searchResults = apiData.filter((data) =>
      data.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    setSearchData(searchResults);
    console.log(searchResults);
    setSearchInput("");
  };



  return <SearchContext.Provider value={{searchData,handleSearch,setSearchInput,searchInput}}>
    {children}
  </SearchContext.Provider>;
};

export default SearchState;
