/* let App = () => {
  let emp_Name = "Narasimha";
  return <h1> Empployee Name : {emp_Name}</h1>;
};

export default App;
 */
import React from "react";
class App extends React.Component {
  emp_Name = "Narasimha";

  render() {
    return <h1>{this.emp_Name}</h1>;
  }
}
export default App;
