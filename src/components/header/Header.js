import React from "react";
import Input from "./Input";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "Himanshu",
    };
  }

  onInputChange = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  onSubmit = () => {
    console.log("i am submitted");
  }

  onTappedMe = (data) => {
    console.log("i am tapped", data);
  }

  render() {
    return (
      <header className="header">
        <div>My App</div>
        <input
          className="header-input"
          placeholder="Search for your name"
          value={this.state.username}
          onInput={this.onInputChange}
        />
        <Input inputValue={this.state.username} onTapMe={this.onTappedMe} />
        <button onClick={this.onSubmit}>Submit</button>
        <div>{this.state.username}</div>
      </header>
    );
  }
}

export default Header;
