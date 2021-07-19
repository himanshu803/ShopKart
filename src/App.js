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
} from "./actions/action";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredProductData: [],
      searchText: "",
    };
  }

  addToCart = (itemId) => {
    // let cartItem = this.props.productList.filter(
    //   (product) => product.id === itemId
    // );
    // this.setState({
    //   cartItems: cartItems,
    // });
    this.props.addItemsToCart(itemId);
  };

  removeFromCart = (itemId) => {
    this.props.removeItemsFromCart(itemId);
  };

  onInputChange = (event) => {
    const text = event.target.value.toLowerCase();
    const data = text
      ? this.props.productList.filter((item) => {
          return item.title.toLowerCase().includes(text);
        })
      : this.props.productList;
    this.setState({
      searchText: event.target.value,
      filteredProductData: data,
    });
  };

  render() {
    console.log(this.props);
    return (
      <div className="App">
        <div className="App-Header">
          <Header cartCount={this.props.cartItemCount} />
          <Search onInputChange={this.onInputChange} />
          <Listing
            products={this.props.productList}
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
  };
};

const mapDispatchToProps = {
  addItemsToCart,
  fetchProductList,
  removeItemsFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
