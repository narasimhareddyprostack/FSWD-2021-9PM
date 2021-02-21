// we should never modify the state directly.
// UI is not re-rendering

//Sol: setState({})
import React from "react";
class App extends React.Component {
  state = {
    name: "Test Data",
    size: [10, 20],
  };
  changeNameHandler = () => {
    console.log("Testing inside changeNameHandler");

    this.setState({
      name: "Narasimha",
      size: 40,
    });
  };
  render() {
    return (
      <>
        <h1> React State Example - Name : {this.state.name}</h1>
        <h2>{this.state.size}</h2>
        <button onClick={this.changeNameHandler}> Change Name</button>
      </>
    );
  }
}
export default App;
