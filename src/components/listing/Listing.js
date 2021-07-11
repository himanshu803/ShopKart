import React from "react";

// const onTappedMe = (data) => {
// console.log("i am tapped", data);
// };

const Listing = (props) => {
  return (
    <div>
      <div>This is listing component</div>
      <input
        className="header-input"
        placeholder="Search for your name"
        value={props.username}
        onInput={props.onInputChange}
      />
      {/* <Input inputValue={this.state.username} onTapMe={onTappedMe} /> */}
      <button onClick={props.onSubmit}>Submit</button>
      {/* <div>{this.state.username}</div> */}

      <ul>
        {props.todoList.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default Listing;
