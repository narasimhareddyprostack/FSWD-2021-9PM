import React from "react";
class App extends React.Component {
  state = {
    message: "Hello",
  };

  helloGM = () => {
    console.log("Test - helloGM");
    this.setState({ message: "Good Morning" });
  };
  helloGN = () => {
    this.setState({ message: "Good Night" });
  };
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
          <a href="/" className="navbar-brand">
            React Basics - Props and State, Event Handling
          </a>
        </nav>
        <h1>{this.state.message} </h1>
        <button className="btn btn-primary" onClick={this.helloGM}>
          Good Morning
        </button>
        <button className="btn btn-danger" onClick={this.helloGN}>
          Good Night
        </button>
      </React.Fragment>
    );
  }
}
export default App;
