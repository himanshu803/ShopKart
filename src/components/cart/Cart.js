import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItemsFromCart } from "../../actions/action";
import "./Cart.scss";

const Cart = () => {
  const cartItems = useSelector((state) => state.cartItems);

  const dispatch = useDispatch();

  const removeFromKart = (item) => {
    dispatch(removeItemsFromCart(item));
  };

  if (cartItems.length > 0) {
    return (
      <div className="cart-list">
        <div className="cart-list-header">Items in the Cart</div>
        <div className="cart-list-items">
          {cartItems.map((item) => {
            return (
              <div className="cart-list-item" key={item.id}>
                <img
                  className="cart-list-item-image"
                  src={item.image}
                  alt="item"
                />

                <div className="cart-list-item-info">
                  <div className="cart-list-item-info-title">
                    <b>{item.title}</b>
                  </div>
                  <div className="cart-list-item-info-description">
                    {item.description}
                  </div>
                  <div className="cart-list-item-info-price">
                    <div>₹{item.price}</div>
                    <div>
                      <button
                        className="remove-btn"
                        onClick={() => removeFromKart(item)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="cart-list-place-order-section">
          <button className="place-order-btn">Place Order</button>
        </div>
      </div>
    );
  } else {
    return <div className="cart-list-empty">Cart is empty</div>;
  }
};

export default Cart;
