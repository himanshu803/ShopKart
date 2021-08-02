import React from "react";

const Header = React.memo((props) => {
    return (
      <header className="header">
        <div>My App</div>
        <div>Cart ({props.cartCount})</div>
      </header>
    );
});

export default Header;
