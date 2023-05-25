import { useContext } from "react";
import { ProductsDummyData } from "../constants";
import SearchComponent from "../components/SearchComponent";
import ProductsListAndFilterComponent from "../components/ProductsListAndFilterComponent";

const Homepage = () => {
  return (
    <main className="flex-1   w-full  overflow-y-auto flex justify-center items-start ">
      <div className=" flex   flex-col w-full  justify-center items-center space-y-3 ">
        <SearchComponent />
        <ProductsListAndFilterComponent />
      </div>
    </main>
  );
};

export default Homepage;
