import React, { Component } from "react";

export class Footer extends Component {
  render() {
    let { one, two, three, four } = this.props;
    return (
      <div>
        <pre> {JSON.stringify(this.props)}</pre>
        <h2> {this.props.one}</h2>
        <h3>{three.fullName}</h3>
        <h1>Invoking method: {this.props.four()}</h1>
      </div>
    );
  }
}

export default Footer;
