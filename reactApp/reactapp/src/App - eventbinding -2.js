import React from "react";
class App extends React.Component {
  state = {
    emp_Sal: 30000,
  };
  btnHandler(value) {
    console.log("Reading button Data ...", value);
    this.setState({
      emp_Sal: 30000 + value,
    });
  }
  render() {
    return (
      <>
        <h1> Employee Sal : {this.state.emp_Sal}</h1>
        <button onClick={this.btnHandler.bind(this, 50000)}> Hike 50k </button>
        <hr />
        <button onClick={this.btnHandler.bind(this, 100000)}> Hike 100K</button>
        <hr />
        <button onClick={this.btnHandler.bind(this, 0)}> Hike 0</button>
      </>
    );
  }
}
export default App;
