import React from "react";
class Wish extends React.Component {
  render() {
    return (
      <>
        <div className="card m-4">
          <div className="card-header">
            React Props - Class Comp - {JSON.stringify(this.props)}
          </div>
          <div className="card-body">{this.props.message}</div>
        </div>
      </>
    );
  }
}

export default Wish;
