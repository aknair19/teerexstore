import React from "react";

import ItemsInCart from "./ItemsInCart";

const ItemsInCartList = ({ itemsInCart }) => {
  return (
    itemsInCart.length > 0 && (
      <div className="flex-1 p-3   w-full flex flex-col justify-start items-center overflow-y-auto ">
        <div className="shadow-lg w-3/4 h-auto py-5 mt-8 flex flex-col items-center   ">
          <h1 className="text-center font-bold text-xl text-blue-400   underline">
            Items in Cart
          </h1>
        </div>
        {itemsInCart.map((item) => (
          <ItemsInCart item={item} key={item.id} />
        ))}
      </div>
    )
  );
};

export default ItemsInCartList;
