import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Listing from "./components/listing/Listing";
import Search from "./components/search/Search";
import { connect } from "react-redux";
import {
  addItemsToCart,
  fetchProductList,
  removeItemsFromCart,
  filterProductList,
  searchList
} from "./actions/action";

class App extends React.Component {
  addToCart = (item) => {
    this.props.addItemsToCart(item);
  };

  removeFromCart = (item) => {
    this.props.removeItemsFromCart(item);
  };

  onInputChange = (event) => {
    const text = event.target.value.toLowerCase();
    const data = text
      ? this.props.productList.filter((item) => {
          return item.title.toLowerCase().includes(text);
        })
      : this.props.productList;

    this.props.searchList(event.target.value);
    this.props.filterProductList(data);
  };

  render() {
    return (
      <div className="App">
        <div className="App-Header">
          <Header cartCount={this.props.cartItemCount} />
          <Search onInputChange={this.onInputChange} />
          <Listing
            products={this.props.filteredProductList}
            cartItems={this.props.cartItems}
            addToCart={this.addToCart}
            removeFromCart={this.removeFromCart}
          />
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.props.fetchProductList();
  }
}

const mapStateToProps = (state) => {
  return {
    cartItemCount: state.cartItems.length,
    productList: state.productList,
    cartItems: state.cartItems,
    filteredProductList: state.filteredProductList
  };
};

const mapDispatchToProps = {
  addItemsToCart,
  fetchProductList,
  removeItemsFromCart,
  filterProductList,
  searchList
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
