import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import Search from "../search/Search";
import configureMockStore from "redux-mock-store";
import { storeWithCartItems } from "../../constants";
import Listing from "../listing/Listing";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore(storeWithCartItems);

test("render Search Component", () => {
  render(
    <Provider store={store}>
      <Search />
    </Provider>
  );
  const searchElement = screen.getByRole("searchbox");
  expect(searchElement).toBeInTheDocument();
});

test("render Listing Component", () => {
  render(
    <Provider store={store}>
      <Listing />
    </Provider>
  );
  const searchElement = screen.getByTestId("product-list");
  expect(searchElement).toBeInTheDocument();
});
