import React, { Component } from "react";

class App extends Component {
  state = {
    name: "Test Name",
  };

  TestMethod = () => {
    this.setState({
      name: "Narasimha",
    });
    console.log("Testing....");
  };
  render() {
    return (
      <div>
        <h1> React Js - State </h1>
        <h2> Name: {this.state.name}</h2>
        <button onClick={this.TestMethod}> Test</button>
      </div>
    );
  }
}

export default App;
