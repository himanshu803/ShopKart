import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./header.scss";

const Header = React.memo(() => {
  const cartItems = useSelector((state) => state.cartItems);

  return (
    <header className="header">
      <Link data-testid="shop-kart" className="header-title" to="/">
        ShopKart
      </Link>
      <Link className="header-cart-count" to="/cart">
        Cart ({cartItems.length})
      </Link>
    </header>
  );
});

export default Header;
