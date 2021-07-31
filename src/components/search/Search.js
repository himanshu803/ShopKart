import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterProductList, searchList } from "../../actions/action";
import "./search.scss";

const Search = () => {
  const productList = useSelector(state => state.productList)

  const dispatch = useDispatch();

  const onInputChange = (event) => {
    const text = event.target.value.toLowerCase();
    const data = text
      ? productList.filter((item) => {
          return item.title.toLowerCase().includes(text);
        })
      : productList;

    dispatch(searchList(event.target.value));
    dispatch(filterProductList(data));
  };

  return (
    <div>
      <br />
      <input
        className="product-search"
        placeholder="Search your product"
        onInput={onInputChange}
      />
    </div>
  );
};

export default Search;
