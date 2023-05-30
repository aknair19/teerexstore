import React, { useContext } from "react";
import SearchContext from "../context/search/SearchContext";
import ItemsInCart from "./ItemsInCart";
import { BsFillTrashFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
const ItemsInCartList = ({ itemsInCart }) => {
  const navigate=useNavigate
  const { handleClearCart, handleTotalAmount,setItemsInCart,handleOrder } = useContext(SearchContext);
  
  return (
    itemsInCart.length > 0 && (
      <div className="flex-1 p-3   w-full max-w-3xl flex flex-col justify-start items-center overflow-y-auto border ">
        <div className="shadow-lg   w-full h-auto py-5 mt-8 flex px-4 items-baseline justify-between   ">
          <h1 className="text-center font-bold text-xl text-blue-400   underline">
            Items in Cart
          </h1>
          <button
            className="font-semibold text-md rounded-sm text-blue-400 p-1 px-2 text-2xl hover:text-violet-600"
            onClick={() => handleClearCart()}
          >
            <BsFillTrashFill />
          </button>
        </div>
        <div className=" flex flex-col w-full items-center ">
          {itemsInCart.map((item) => (
            <ItemsInCart item={item} key={item.id} />
          ))}
        </div>

        <div className="flex flex-col  items-start justify-start    w-full p-4 gap-y-2">
          <p className="font-extrabold  text-medium">
            TOTAL AMOUNT:{handleTotalAmount()}
          </p>
         
            {" "}
            <button className=" text-white bg-blue-400 hover:bg-violet-600 rounded-lg font-bold text-md p-1" onClick={()=>handleOrder()}>
              PLACE ORDER
            </button>
        
        </div>
      </div>
    )
  );
};

export default ItemsInCartList;
