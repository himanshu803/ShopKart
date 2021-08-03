import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { storeWithCartItems, storeWithoutCartItems } from "../../constants";
import Cart from "./Cart";

const applyMiddlewares = [thunk];
const mockStore = configureMockStore(applyMiddlewares);

test("Cart with items", () => {
  const store = mockStore(storeWithCartItems);
  render(
    <Provider store={store}>
      <Cart />
    </Provider>
  );
  const CartWithItems = screen.getByText(/items in the cart/i);
  expect(CartWithItems).toBeInTheDocument();
});


test("Empty cart items", () => {
    const store = mockStore(storeWithoutCartItems);
    render(
      <Provider store={store}>
        <Cart />
      </Provider>
    );
    const CartWithOutItems = screen.getByText(/cart is empty/i);
    expect(CartWithOutItems).toBeInTheDocument();
  });