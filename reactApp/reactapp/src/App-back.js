import React, { Component } from "react";

export class App extends Component {
  state = {
    name: "Test Name",
  };
  TestMethod = () => {
    this.setState({ name: "Narasimha" });
    console.log("Testing.....", this.state.name);
  };
  render() {
    return (
      <div>
        <button onClick={this.TestMethod}>Test</button>
      </div>
    );
  }
}

export default App;
