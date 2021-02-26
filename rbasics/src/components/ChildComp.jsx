import React from "react";

class ChildComp extends React.Component {
  childData = "100000 USD";
  sendDataToParent = () => {
    this.props.data(this.childData);
  };
  render() {
    return (
      <React.Fragment>
        <pre>{JSON.stringify(this.props)}</pre>
        <h2> Child Component Data:{this.childData}</h2>
        <h3> Data from Parent - Property:{this.props.asset}</h3>
        <button onClick={this.sendDataToParent}> Send2Parent</button>
    
      </React.Fragment>
    );
  }
}

export default ChildComp;
