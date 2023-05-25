import React from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
const Header = () => {
  return (
    <nav className="border h-24 flex justify-center bg-blue-400 shadow-lg w-full ">
      <div className=" w-5/6 flex justify-between items-center text-white ">
        <Link to="/">
          <h4 className="font-bold text-2xl "> Teerex Store</h4>
        </Link>
        <div className="flex  gap-6">
          <Link to="/">
            <p className="font-semibold text-lg">Products</p>
          </Link>
          <Link to="cart">
            <div className="  static">
              <p className="font-semibold text-3xl inline-block relative ">
                <FiShoppingCart />
              </p>

              <p className="absolute text-sm font-bold top-4   inline-block">0</p>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
