import React from "react";
import "./listing.scss";
// import productImage from "../../assets/images/download.jpg";

const Listing = (props) => {
  return (
    <div className="product-list">
      {props.products.map((item) => {
        let isInCart = props.cartItems.find((cartItem) => {
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
                onClick={() => props.addToCart(item)}
              >
                Add to cart
              </button>
            ) : (
              <button
                className="product-remove-btn"
                onClick={() => props.removeFromCart(item)}
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
