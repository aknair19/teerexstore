import { useState, useEffect, useContext } from "react";
import { REACT_APP_FETCH_PRODUCTS } from "../utils/constants";
import SearchComponent from "../components/SearchComponent";
import ProductsListAndFilterComponent from "../components/ProductsListAndFilterComponent";
import useFetch from "../utils/hooks/useFetch";import SearchContext from "../context/search/SearchContext";
import Loader from "../components/Loader";
const Homepage = () => {
  const data = useContext(SearchContext);
  return data.searchData === null ? (
   <Loader/>
  ) : (
    <main className="flex-1   w-full  overflow-y-auto flex justify-center items-start ">
      <div className=" flex   flex-col w-full  justify-center items-center space-y-3 ">
        <SearchComponent />
        <ProductsListAndFilterComponent />
      </div>
    </main>
  );
};

export default Homepage;
