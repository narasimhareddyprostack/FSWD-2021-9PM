import React, { Component } from "react";

class App extends Component {
  state = {
    email: "",
    password: "",
  };
  emailHandler = (event) => {
    console.log(event.target.value);
    this.setState({ email: event.target.value });
  };
  passwordHandler = (event) => {
    console.log(event.target.value);
    this.setState({
      password: event.target.value,
    });
  };
  getDataHandler = (event) => {
    console.log(this.state.email, this.state.password);
    event.preventDefault();
  };
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark">
          <a className="navbar-brand" href="/">
            React Form Example
          </a>
        </nav>
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-4">
              <form>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="User Email"
                    value={this.state.email}
                    onChange={this.emailHandler}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    onChange={this.passwordHandler}
                  />
                </div>
                <div className="form-group">
                  <button
                    className="btn btn-success"
                    onClick={this.getDataHandler}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <form></form>
      </div>
    );
  }
}

export default App;
