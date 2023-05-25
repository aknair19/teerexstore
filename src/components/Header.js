import React from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
const Header = () => {
  return (
    <div className="border h-24 flex justify-center bg-blue-400 ">
      <div className=" w-5/6 flex justify-between items-center text-white ">
        <Link to='/'><h4 className="font-bold text-2xl ">  Teerex Store</h4></Link>
        <div className="flex  gap-6">
        <Link to='/'><p className="font-semibold text-lg">Products</p></Link>
        <Link to='cart'><p className="font-semibold text-3xl"><FiShoppingCart/></p></Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
