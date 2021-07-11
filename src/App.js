import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Listing from "./components/listing/Listing";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "Himanshu",
      todoList: [],
    };
  }

  onSubmit = () => {
    this.setState({
      todoList: [...this.state.todoList, this.state.username],
      username: '',
    });
  };

  onInputChange = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  render() {
    return (
      <div className="App">
        <div className="App-Header">
          <Header />
          <Listing
            todoList={this.state.todoList}
            username={this.state.username}
            onSubmit={this.onSubmit}
            onInputChange={this.onInputChange}
          />
        </div>
      </div>
    );
  }
}

export default App;
