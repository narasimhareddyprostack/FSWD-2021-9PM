import React from "react";
import Header from "./Header/Header";
class App extends React.Component {
  emp_Name = "Narasimha";
  emp_Loc = ["USA", "IN", "SG"];
  emp = {
    fullname: "Narasimha K",
    address: "#96, Marathahalli, Bangalroe",
  };
  empDetails() {
    console.log("Hello.. Testing");
  }
  render() {
    return (
      <React.Fragment>
        <h1> Welcome to React Js World</h1>
        <Header
          one={this.emp_Name}
          two={this.emp_Loc}
          three={this.emp}
          four={this.empDetails}
        />
      </React.Fragment>
    );
  }
}
export default App;
