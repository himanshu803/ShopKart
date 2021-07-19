function productReducer(state = [], action) {
  switch (action.type) {
    case "PRODUCT_LIST_FETCH":
      return [...action.data];
    default:
      return state;
  }
}

function filteredProductListReducer(state = [], action) {
  switch (action.type) {
    case "FILTER_PRODUCT_LIST":
      return [...action.data];
    default:
      return state;
  }
}

function searchTextReducer(state = [], action) {
  switch (action.type) {
    case "SEARCH_TEXT":
      return action.data;
    default:
      return state;
  }
}

export { productReducer, filteredProductListReducer, searchTextReducer };
