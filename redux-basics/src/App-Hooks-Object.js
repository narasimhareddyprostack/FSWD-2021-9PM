import React, { useState } from "react";
let App = () => {
  let [emp, setEmp] = useState({
    name: "Narasimha",
    age: 37,
    loc: "Bangalore",
  });

  let changeEmployee = () => {
    setEmp({ ...emp, name: "Narasimha K", age: 38 });
  };
  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="/home">
          React Hooks Example
        </a>
      </nav>
      <hr />
      <pre>{JSON.stringify(emp)}</pre>
      <h3>
        Employee Name: {emp.name}, Employee Age: {emp.age}
      </h3>
      <button className="btn btn-primary" onClick={changeEmployee}>
        Change Employee Name
      </button>
    </>
  );
};

export default App;

/*
In Class Comp
state = {}
.setState({})
Auto Merge happened
*/
