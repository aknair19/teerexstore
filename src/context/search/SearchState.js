import React, { useState, useEffect, useReducer } from "react";
import useFetch from "../../utils/hooks/useFetch";
import SearchContext from "./SearchContext";
import { REACT_APP_FETCH_PRODUCTS } from "../../utils/constants";

const SearchState = ({ children }) => {
  const { apiData, isLoading, serverError } = useFetch(
    REACT_APP_FETCH_PRODUCTS
  );

  const [searchData, setSearchData] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  const [itemsInCart, setItemsInCart] = useState([]);
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

  const handleAddToCart = (id, productList) => {
    const addedProducts = productList.find((product) => product.id === id);

    setItemsInCart((prevState) => [...prevState, addedProducts]);
    console.log(itemsInCart);
  };
  const handleRemoveItem = (id) => {
   const filteredProducts=itemsInCart.filter((data)=>data.id !==id)
   console.log(filteredProducts)
   setItemsInCart(filteredProducts)
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
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchState;
