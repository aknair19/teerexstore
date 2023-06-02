import React from "react";
import FilterList from "./FilterList";
import ProductsList from "./ProductsList";
const ProductsListAndFilterComponent = () => {
  
  return (
    <div className=" flex flex-col  md:flex md:flex-row   gap-3   justify-between w-full   ">
      <FilterList />
      <ProductsList />
    </div>
  );
};

export default ProductsListAndFilterComponent;
