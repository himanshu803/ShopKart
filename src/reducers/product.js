export default function productReducer(state = [], action) {
    switch (action.type) {
      case "PRODUCT_LIST_FETCH":
        return [...action.data];
      default:
        return state;
    }
  }