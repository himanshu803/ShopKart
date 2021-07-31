import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addItemsToCart,
  fetchProductList,
  removeItemsFromCart,
} from "../../actions/action";
import Listing from "../listing/Listing";
import Search from "../search/Search";
import "./home.scss";

const Home = () => {
  const { filteredProductList, cartItems } = useSelector(
    (state) => ({
      cartItems: state.cartItems,
      filteredProductList: state.filteredProductList,
      productList: state.productList,
    })
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductList());
  }, [dispatch]);

  const addToCart = (item) => {
    dispatch(addItemsToCart(item));
  };

  const removeFromCart = (item) => {
    dispatch(removeItemsFromCart(item));
  };

  return (
    <div className="home">
      <div className="home-Header">
        <Search />
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

export default Home;
