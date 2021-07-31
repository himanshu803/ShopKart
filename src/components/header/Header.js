import React from "react";
import { Link } from "react-router-dom";
import './header.scss';

const Header = React.memo((props) => {
  return (
    <header className="header">
      <Link className="header-title" to="/">ShopKart</Link>
      <Link className="header-cart-count" to="/cart">Cart ({props.cartCount})</Link>
    </header>
  );
});

export default Header;
