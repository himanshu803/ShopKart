import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Listing from "./components/listing/Listing";
import Search from "./components/search/Search";
import { useDispatch, useSelector } from "react-redux";
import {
  addItemsToCart,
  fetchProductList,
  removeItemsFromCart,
  filterProductList,
  searchList,
} from "./actions/action";

const App = () => {
  const { cartItemCount, productList, cartItems, filteredProductList } =
    useSelector((state) => ({
      cartItemCount: state.cartItems.length,
      productList: state.productList,
      cartItems: state.cartItems,
      filteredProductList: state.filteredProductList,
    }));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductList());
    // return () => {
    //   cleanup
    // }
  }, [dispatch]);

  const addToCart = (item) => {
    dispatch(addItemsToCart(item));
  };

  const removeFromCart = (item) => {
    dispatch(removeItemsFromCart(item));
  };

  const onInputChange = (event) => {
    const text = event.target.value.toLowerCase();
    const data = text
      ? productList.filter((item) => {
          return item.title.toLowerCase().includes(text);
        })
      : productList;

    dispatch(searchList(event.target.value));
    dispatch(filterProductList(data));
  };

  return (
    <div className="App">
      <div className="App-Header">
        <Header cartCount={cartItemCount} />
        <Search onInputChange={onInputChange} />
        <Listing
          products={filteredProductList}
          cartItems={cartItems}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      </div>
    </div>
  );
};

export default App;
