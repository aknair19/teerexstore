import React from "react";
import ProductTile from "./ProductTile";
import { useContext } from "react";
import { ProductsListData } from "../pages/Homepage";


const ProductsList = () => {

const products=useContext(ProductsListData)
console.log(products)
  return (
    <div className="flex flex-wrap border rounded-lg justify-start items-center  w-5/6 h-full gap-4 p-4 ">

{products.map(product=><ProductTile {...product} key={product.id}/>)}





   



    </div>
  );
};

export default ProductsList;
