import React, { Component } from "react";

class App extends Component {
  state = {
    email: "",
    mobile: "",
  };
  emailHandler = (event) => {
    console.log("Testing..", event.target.value);
    this.setState({ email: event.target.value });
  };
  mobileHanlder = (event) => {
    this.setState({ mobile: event.target.value });
  };
  btnHandler = (e) => {
    alert(`${this.state.email} .... ${this.state.mobile}`);
    e.preventDefault();

    //html - avoid the loosing the form data, we need to prevent.
  };
  render() {
    return (
      <>
        <nav className="navbar navbar-dark bg-dark">
          <a className="navbar-brand" href="/">
            React Form Example
          </a>
        </nav>
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-4">
              <form>
                <label> Email</label>
                <input
                  type="text"
                  value={this.state.email}
                  onChange={this.emailHandler}
                />
                <br />
                <label> Mobile Number</label>
                <input
                  type="text"
                  value={this.state.mobile}
                  onChange={this.mobileHanlder}
                />
                <br />
                <button value="submit" onClick={this.btnHandler}>
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
