import React from "react";
class Message extends React.Component {
  constructor() {
    super();
    console.log("Inside Constructor");
  }
  componentDidMount() {
    console.log("Inside componetDidMount ...");
  }
  componentWillUnmount() {
    console.log("Component  will unmount");
  }
  render() {
    return (
      <React.Fragment>
        <h1>Message Comp</h1>
      </React.Fragment>
    );
  }
}

export default Message;
