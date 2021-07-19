import { combineReducers } from "redux";
import cartReducer from "./cart";
import productReducer from "./product";

export default combineReducers({
  productList: productReducer,
  cartItems: cartReducer,
});
