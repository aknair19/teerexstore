import React from "react";

const ProductTile = ({ imageURL, price, name }) => {
  return (
  
      <div className="  container  flex flex-col rounded-md border  w-48 h-60 hover:shadow-md shadow-inner  relative  ">
        <img className="w-full h-5/6 p-2" alt={name} src={imageURL} />

        <div className="p-2 font-semibold text-sm flex justify-between items-center h-1/6">
          <p className="font-semibold text-sm">₹{price}</p>
          <button className="p-1 px-2 bg-blue-400 text-white border-none  rounded-sm ">
            Add to Cart
          </button>
        </div>
        <div className="absolute top-1 left-0 inline-block p-1 px-3 bg-yellow-400 font-semibold text-sm rounded-sm"> {name}</div>
      </div>
      
  
  );
};

export default ProductTile;
