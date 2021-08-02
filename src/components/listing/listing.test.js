import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import Listing from "./Listing";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { storeWithCartItems, storeWithoutCartItems } from "../../constants";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

test("Display Add item to cart button", () => {
  const store = mockStore(storeWithoutCartItems);
  render(
    <Provider store={store}>
      <Listing />
    </Provider>
  );

  const addButton = screen.getAllByRole("button", { name: /Add to cart/i });

  addButton.forEach((button) => {
    expect(button).toBeInTheDocument();
  });
});

test("Display Remove item from cart button", () => {
  const store = mockStore(storeWithCartItems);
  render(
    <Provider store={store}>
      <Listing />
    </Provider>
  );

  const removeButton = screen.getAllByRole("button", {
    name: /Remove from cart/i,
  });

  removeButton.forEach((button) => {
    expect(button).toBeInTheDocument();
  });
});
