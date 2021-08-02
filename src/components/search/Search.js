import React from "react";
import "./search.scss";

const Search = (props) => {
  return (
    <div>
      <br />
      <input className="product-search" placeholder="Search your product" onInput={props.onInputChange}/>
    </div>
  );
};

export default Search;
