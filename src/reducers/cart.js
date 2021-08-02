export default function cartReducer(state = [], action) {
  switch (action.type) {
    case "ADD_CART_ITEM":
      return [...state, action.data];
    case "REMOVE_CART_ITEM":
      return state.filter((item) => item.id !== action.data.id);
    default:
      return state;
  }
}
