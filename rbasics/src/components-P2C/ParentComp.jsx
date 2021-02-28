import React from "react";

import ChildComp from "./ChildComp";
class ParentComp extends React.Component {
  state = {
    childData: "",
    asset: "",
  };
  inputToChild = () => {
    this.setState({ asset: "5000USD" });
  };
  receiveData = (value) => {
    console.log("Data from Child", value);
    this.setState({ childData: value });
  };

  render() {
    return (
      <React.Fragment>
        <button onClick={this.inputToChild}>50K Send To Child</button>
        <h2> Parent Component - Asset Value :{this.state.asset}</h2>

        <h3> Receiving Data from Child: {this.state.childData}</h3>
        <hr />
        <ChildComp asset={this.state.asset} data={this.receiveData} />
      </React.Fragment>
    );
  }
}

export default ParentComp;
