import React, { Component } from "react";
class App extends Component {
  state = {
    counter: 0,
  };
  btnHandler = (value) => {
    if (value == "incr") {
      this.setState({ counter: this.state.counter + 1 });
    } else {
      this.setState({ counter: this.state.counter - 1 });
    }
  };

  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
          <a href="/" className="navbar-brand">
            React Basics - Props and State, Event Handling
          </a>
        </nav>
        <h1>Counter Value:{this.state.counter}</h1>
        <button
          className="btn btn-success mr-5"
          onClick={this.btnHandler.bind(this, "incr")}
        >
          Increment
        </button>
        <button
          className="btn btn-primary"
          onClick={this.btnHandler.bind(this, "decr")}
        >
          Decrement
        </button>
      </div>
    );
  }
}

export default App;
