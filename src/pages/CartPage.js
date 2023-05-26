import React from "react";
import { Link } from "react-router-dom";
import CartEmpty from "../components/CartEmpty";
import ItemsInCartList from "../components/ItemsInCartList";
const CartPage = () => {
  return (
    <div className="flex-1 p-3   w-full flex flex-col justify-start items-center overflow-y-auto ">
      {/* <CartEmpty/> */}
     <ItemsInCartList/>
   
     
    </div>
  );
};

export default CartPage;
