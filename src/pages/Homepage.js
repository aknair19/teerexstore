import { useContext,createContext } from "react";
import { REACT_APP_FETCH_PRODUCTS } from "../constants";
import SearchComponent from "../components/SearchComponent";
import ProductsListAndFilterComponent from "../components/ProductsListAndFilterComponent";
import useFetch from "../hooks/useFetch";

export const ProductsListData=createContext()
const Homepage = () => {
  const { apiData, isLoading, serverError } = useFetch(
    REACT_APP_FETCH_PRODUCTS
  );

  return apiData === null ? (
    <div className="flex-1 ">LOADING</div>
  ) : (
    <main className="flex-1   w-full  overflow-y-auto flex justify-center items-start ">
      <div className=" flex   flex-col w-full  justify-center items-center space-y-3 ">
        <ProductsListData.Provider value={apiData}>
        <SearchComponent />
        <ProductsListAndFilterComponent />
        </ProductsListData.Provider>
      </div>
    </main>
  );
};

export default Homepage;
