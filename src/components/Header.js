import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import SearchContext from "../context/search/SearchContext";
const Header = () => {
  const { itemsInCart } = useContext(SearchContext);

  const getTotalCartQty = (productsInCart) => {
    const cartItemArr = productsInCart.map((cartItem) => cartItem.addToCart);
    return cartItemArr.reduce((partialSum, a) => partialSum + a, 0);
  };

  return (
    <header className=" h-24 flex justify-center items-center bg-blue-400 shadow-lg w-full   ">
      <div className=" w-5/6 flex justify-between items-center text-white ">
        <Link to="/">
          <h4 className="font-bold text-2xl "> Teerex Store</h4>
        </Link>
        <div className="flex justify-center items-center  gap-6">
          <Link to="/">
            <p className="font-semibold text-lg hover:text-gray-400">
              Products
            </p>
          </Link>
          <Link to="cart">
            <div className="  static">
              <p className="font-semibold text-3xl inline-block relative  hover:text-gray-400">
                <FiShoppingCart />
              </p>

              <p className="absolute text-sm font-bold top-5   inline-block text-red-400">
                {itemsInCart.length > 0 ? (
                  getTotalCartQty(itemsInCart)
                ) : (
                  <span></span>
                )}
              </p>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
