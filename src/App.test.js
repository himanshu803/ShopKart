import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import App from "./App";
import configureMockStore  from "redux-mock-store";
import thunk from "redux-thunk";
import { storeWithCartItems } from "./constants";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares)
const store = mockStore(storeWithCartItems);

test("renders ShopKart Application", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  // const linkElement = screen.getByText(/ShopKart/);
  const element = screen.getByTestId("shop-kart");
  expect(element).toBeInTheDocument();
});
