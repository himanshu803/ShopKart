import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cart from "./components/cart/Cart";
import Home from "./components/home/Home";

const App = () => {
  const { cartItemCount } = useSelector((state) => ({
    cartItemCount: state.cartItems.length,
  }));

  return (
    <Router>
      <div>
        <Header cartCount={cartItemCount} />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
