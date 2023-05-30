import React, { useContext } from "react";

import SearchContext from "../context/search/SearchContext";

const ItemsInCart = ({item}) => {
const{imageURL,name,price,id,addToCart}=item
const {handleRemoveItem,handleCartItemChange,handleClearCart}=useContext(SearchContext)
  return (
    <div className="flex justify-between items-center border w-full mt-4">
      <div className="flex items-center w-1/2 gap-2 p-2">
        <img
          src={imageURL}
          alt="cart-img"
          width="120px"
        />
        <div className="flex flex-col font-semibold text-sm">
          <h1>{name}</h1>
          <p>{price}</p>
        </div>
      </div>
      <div className="flex justify-end items-center gap-6  w-1/2 px-8">
        <div className="border  rounded-sm p-1 text-gray-400">
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
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
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
