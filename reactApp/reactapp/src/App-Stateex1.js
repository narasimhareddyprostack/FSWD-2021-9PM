import React, { Component } from "react";

class App extends Component {
  state = {
    messge: "Hello",
  };
  sayGM = () => {
    this.setState({ messge: "Good Mornig" });
  };
  sayGA = () => {
    this.setState({ messge: "Good Afternoon" });
  };
  sayGN = () => {
    this.setState({ messge: "Good Night" });
  };
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
          <a href="/" className="navbar-brand">
            React Basics - Props and State, Event Handling
          </a>
        </nav>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="card m-4">
                <div className="card-header">Message : {this.state.messge}</div>
                <div className="card-body">
                  <button onClick={this.sayGM} className="btn btn-success mr-2">
                    Good Morning
                  </button>
                  <button onClick={this.sayGA} className="btn btn-danger mr-2">
                    Good Afternoon
                  </button>
                  <button onClick={this.sayGN} className="btn btn-primary">
                    Good Night
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
