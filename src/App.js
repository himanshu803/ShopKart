import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Listing from "./components/listing/Listing";
import Search from "./components/search/Search";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: [],
      productData: [],
      filteredProductData: [],
      searchText: "",
    };
  }

  addToCart = (itemId) => {
    let cartItems = this.state.cartItems;
    let cartItem = this.state.productData.filter(
      (product) => product.id === itemId
    );
    cartItems.push(cartItem[0]);
    this.setState({
      cartItems: cartItems,
    });
  };

  removeFromCart = (itemId) => {
    this.setState({
      cartItems: this.state.cartItems.filter(
        (cartItem) => cartItem.id !== itemId
      ),
    });
  };

  onInputChange = (event) => {
    const text = event.target.value.toLowerCase();
    const data = text
      ? this.state.productData.filter((item) => {
          return item.title.toLowerCase().includes(text);
        })
      : this.state.productData;
    this.setState({
      searchText: event.target.value,
      filteredProductData: data,
    });
  };

  render() {
    return (
      <div className="App">
        <div className="App-Header">
          <Header cartCount={this.state.cartItems.length} />
          <Search onInputChange={this.onInputChange} />
          <Listing
            products={this.state.filteredProductData}
            cartItems={this.state.cartItems}
            addToCart={this.addToCart}
            removeFromCart={this.removeFromCart}
          />
        </div>
      </div>
    );
  }

  componentDidMount() {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      this.setState({
        productData: response.data,
        filteredProductData: response.data,
      });
    });
  }
}

export default App;
