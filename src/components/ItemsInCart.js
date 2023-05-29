import React, { useContext } from "react";

import SearchContext from "../context/search/SearchContext";

const ItemsInCart = ({item}) => {
const{imageURL,name,price,id}=item
const {handleRemoveItem}=useContext(SearchContext)
  return (
    <div className="flex justify-between items-center border w-3/4 mt-4">
      <div className="flex items-center w-1/2 gap-2">
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
      <div className="flex justify-center items-center gap-6  w-1/2">
        <div className="border  rounded-sm p-1">
          <label htmlFor="item-quantity" className="font-semibold text-sm">
            {" "}
            Qty:
          </label>
          <select
            name="item-quantity"
            id=""
            className="text-sm font-semibold outline-none"
          >
            <option value="1">1</option>
            <option value="1">2</option>
            <option value="1">3</option>
            <option value="1">4</option>
            <option value="1">5</option>
            <option value="1">6</option>
            <option value="1">7</option>
            <option value="1">8</option>
            <option value="1">9</option>
            <option value="1">10</option>
          </select>
        </div>
        <button className="font-semibold text-md rounded-sm bg-red-600 text-white p-1 px-2" onClick={()=>handleRemoveItem(id)}>
          REMOVE
        </button>
      </div>
    </div>
  );
};

export default ItemsInCart;
