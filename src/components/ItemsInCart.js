import React, { useContext } from "react";

import SearchContext from "../context/search/SearchContext";

const ItemsInCart = ({item}) => {
const{imageURL,name,price,id,addToCart}=item
const {handleRemoveItem,handleCartItemChange,handleClearCart}=useContext(SearchContext)
  return (
    <div className="flex justify-between items-center border w-full mt-4 ">
      <div className=" flex-col  md:flex  items-center w-1/2 gap-2 p-2  justify-center">
        <div className="">
        <img
          src={imageURL}
          alt="cart-img"
          width="120px"
        />
        </div>
        <div className="flex  space-x-4 flex font-semibold text-sm">
          <h1>{name}</h1>
          <p>₹{price}</p>
        </div>
      </div>
      <div className="flex flex-col md:flex md:flex-row justify-center items-center md:justify-end md:items-baseline space-y-2 md:space-x-2  w-1/4 px-8 ">
        <div className="border flex rounded-sm p-2  text-gray-400  ">
          <label htmlFor="item-quantity" className="font-semibold text-sm">
            {" "}
            Qty:
          </label>
          <select
            name="item-quantity"
            disabled
            value={addToCart}
            onChange={(e)=>handleCartItemChange(e)}
            className="text-sm font-semibold outline-none"
          >
            <option value="1">1</option>
            
          </select>
        </div>
        <button className="font-semibold text-md rounded-sm bg-red-600 text-white p-1 px-2 hover:bg-violet-600" onClick={()=>handleRemoveItem(id)}>
          REMOVE
        </button>
      </div>
    </div>
  );
};

export default ItemsInCart;
