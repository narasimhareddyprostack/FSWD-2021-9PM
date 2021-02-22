import React, { Component } from "react";

class App extends Component {
  state = {
    userName: "",
  };
  userNameHanlder = (event) => {
    this.setState({
      userName: event.target.value,
    });
  };
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
          <a href="/" className="navbar-brand">
            React Basics - Form Handling
          </a>
        </nav>
        <h1>Testing</h1>
        <form onSubmit={this.formHandler}>
          <label> User Name</label>
          <br />
          <input
            type="text"
            name="userName"
            value={this.state.userName}
            onChange={this.userNameHanlder}
          />{" "}
          <br />
          <button type="submit"> Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
