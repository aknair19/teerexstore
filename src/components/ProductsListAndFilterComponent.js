import React from "react";
import FilterComponent from "./FilterComponent";
import ProductsList from "./ProductsList";
const ProductsListAndFilterComponent = () => {
  return (
    <div className="flex gap-3   justify-between w-full   ">
      <FilterComponent />
      <ProductsList />
    </div>
  );
};

export default ProductsListAndFilterComponent;
