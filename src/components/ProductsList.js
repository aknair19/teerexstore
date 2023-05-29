import React from "react";
import ProductTile from "./ProductTile";
import { useContext } from "react";
import SearchContext from "../context/search/SearchContext";
import FilterContext from "../context/filter/FilterContext";
const ProductsList = () => {
  const {searchData} = useContext(SearchContext);
//  const filter=useContext(FilterContext);

  return (
    <div className="flex flex-wrap border rounded-lg justify-start items-center  w-5/6 h-full gap-4 p-4 ">
      {searchData.map((product) => (
        <ProductTile {...product} key={product.id} />
      ))}
    </div>
  );
};

export default ProductsList;
