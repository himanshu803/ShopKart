import axios from "axios";

export const addItemsToCart = (item) => {
  return {
    type: "ADD_CART_ITEM",
    data: item,
  };
};

export const removeItemsFromCart = (item) => {
    return {
      type: "REMOVE_CART_ITEM",
      data: item,
    };
  };

export const fetchProductList = () => {
  return (dispatch) => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      dispatch({
        type: "PRODUCT_LIST_FETCH",
        data: response.data,
      });
    });
  };
};
