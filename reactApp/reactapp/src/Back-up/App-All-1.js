import React from "react";
import Header from "./Header/Header";
function App() {
  let emp_Name = "Narasimha";
  let emp_Loc = ["IN", "USA", "SG"];
  let emp = {
    fullname: "Narasimha K",
    sal: 150000,
  };
  function empDetails() {
    console.log("Hello.. Testing");
  }
  return (
    <>
      <h2> Sending Props</h2>
      <Header one={emp_Name} two={emp_Loc} three={emp} four={empDetails} />
    </>
  );
}
export default App;
