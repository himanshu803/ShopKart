import { combineReducers } from "redux";
import cartReducer from "./cart";
import {
  productReducer,
  filteredProductListReducer,
  searchTextReducer,
} from "./product";

export default combineReducers({
  productList: productReducer,
  cartItems: cartReducer,
  filteredProductList: filteredProductListReducer,
  searchText: searchTextReducer,
});
