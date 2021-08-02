import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItemsToCart, removeItemsFromCart } from "../../actions/action";
import "./listing.scss";

const Listing = () => {
  const { filteredProductList, cartItems } = useSelector((state) => ({
    filteredProductList: state.filteredProductList,
    cartItems: state.cartItems,
  }));

  const dispatch = useDispatch();

  const addToCart = (item) => {
    dispatch(addItemsToCart(item));
  };

  const removeFromCart = (item) => {
    dispatch(removeItemsFromCart(item));
  };

  return (
    <div data-testid="product-list" className="product-list">
      {filteredProductList.map((item) => {
        let isInCart = cartItems.find((cartItem) => {
          return cartItem.id === item.id;
        });
        return (
          <li className="product-item" key={item.id}>
            <img
              className="product-image"
              alt="product-shirt"
              src={item.image}
            />
            <div>{item.title}</div>
            <div>Rs. {item.price}</div>
            {!isInCart ? (
              <button
                className="product-add-btn"
                onClick={() => addToCart(item)}
              >
                Add to cart
              </button>
            ) : (
              <button
                className="product-remove-btn"
                onClick={() => removeFromCart(item)}
              >
                Remove from cart
              </button>
            )}
          </li>
        );
      })}
    </div>
  );
};

export default Listing;
