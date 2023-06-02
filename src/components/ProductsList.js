import React from "react";
import ProductTile from "./ProductTile";
import { useContext } from "react";
import SearchContext from "../context/search/SearchContext";

const ProductsList = () => {
  const { searchData } = useContext(SearchContext);

  return (
    <div className="flex  flex-1  flex-wrap border rounded-lg justify-center items-center w-full md:w-5/6 h-full gap-4 p-4 ">
      {searchData.map((product) => (
        <ProductTile {...product} key={product.id} />
      ))}
    </div>
  );
};

export default ProductsList;
