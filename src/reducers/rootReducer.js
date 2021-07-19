const initialState = {
  productList: [],
  cartItems: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "PRODUCT_LIST_FETCH":
      return {
        ...state,
        productList: action.data,
      };
    case "ADD_CART_ITEM":
      return {
        ...state,
        cartItems: [...state.cartItems, ...state.productList.filter((item) => item.id === action.data)],
      };
    case "REMOVE_CART_ITEM":
      return {
        ...state,
        cartItems: [
          ...state.cartItems.filter((cartItem) => cartItem.id !== action.data),
        ],
      };
    default:
      return state;
  }
}
