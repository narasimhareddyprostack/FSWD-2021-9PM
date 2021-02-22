import React, { Component } from "react";

class App extends Component {
  state = {
    message: "Hello",
  };
  wishHandler = (value) => {
    console.log("Testing");
    this.setState({
      message: value,
    });
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
                <div className="card-header">
                  Message : {this.state.message}
                </div>
                <div className="card-body">
                  <button
                    onClick={this.wishHandler.bind(this, "Good Morning")}
                    className="btn btn-success mr-2"
                  >
                    Good Morning
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={this.wishHandler.bind(this, "Good AfterNoon")}
                  >
                    {" "}
                    Good Afternoon
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
