import React, { useState, useEffect, useReducer } from "react";
import useFetch from "../../utils/hooks/useFetch";
import SearchContext from "./SearchContext";
import { REACT_APP_FETCH_PRODUCTS } from "../../utils/constants";
import { useNavigate } from "react-router-dom";
const SearchState = ({ children }) => {
  const { apiData, isLoading, serverError } = useFetch(
    REACT_APP_FETCH_PRODUCTS
  );
  const navigate = useNavigate();
  const [searchData, setSearchData] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  const [itemsInCart, setItemsInCart] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");
  useEffect(() => {
    setSearchData(apiData);
  }, [apiData]);

  const handleSearch = () => {
    const searchResults = apiData.filter((data) =>
      data.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    setSearchData(searchResults);
    console.log(searchResults);
    setSearchInput("");
  };

  const handleAddToCart = (product) => {
    const itemIndex = itemsInCart.findIndex((item) => item.id === product.id);

    if (itemIndex !== -1) {
      //item already in cart
      const updatedCart = [...itemsInCart];
      const item = updatedCart[itemIndex];
      if (item.addToCart < item.quantity) {
        item.addToCart += 1;
      } else {
        alert("MAX LIMIT REACHED");
      }
      setItemsInCart(updatedCart);
    } else {
      // const newItem = searchData.find((item) => item.id === product.id);
      if (product) {
        setItemsInCart((prevCart) => [
          ...prevCart,
          { ...product, addToCart: 1 },
        ]);
      }
    }
  };
  const handleRemoveItem = (id) => {
    const filteredProducts = itemsInCart.filter((data) => data.id !== id);
    console.log(filteredProducts);
    setItemsInCart(filteredProducts);
  };

  const handleCartItemChange = (e) => {
    setSelectedOption(e.target.value);
    console.log(selectedOption);
  };
  const handleClearCart = () => {
    setItemsInCart([]);
  };
  const handleTotalAmount = () => {
    const amountArr = itemsInCart.map((item) => item.price * item.addToCart);
    return amountArr.reduce((a, b) => a + b, 0);
  };
  const handleOrder = () => {
    alert("ORDER PLACED SUCCESSFULLY");
    setItemsInCart([]);
    navigate("/");
  };

  return (
    <SearchContext.Provider
      value={{
        searchData,
        setSearchData,
        handleSearch,
        setSearchInput,
        searchInput,
        itemsInCart,
        setItemsInCart,
        handleAddToCart,
        handleRemoveItem,
        handleCartItemChange,
        handleClearCart,
        handleTotalAmount,
        handleOrder,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchState;
