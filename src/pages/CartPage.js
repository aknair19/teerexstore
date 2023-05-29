import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartEmpty from "../components/CartEmpty";
import ItemsInCartList from "../components/ItemsInCartList";
import SearchContext from "../context/search/SearchContext";
const CartPage = () => {
  const { itemsInCart } = useContext(SearchContext);

  return itemsInCart.length === 0 ? (
    <CartEmpty />
  ) : (
    <ItemsInCartList itemsInCart={itemsInCart} />
  );
};

export default CartPage;
