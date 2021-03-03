import React from "react";
import EmployeeList from "./ListRendering/EmployeeList";
import Customer from "./ListRendering/Customer";
function App() {
  return (
    <React.Fragment>
      <nav className="navbar navabar-dark bg-dark">
        <a href="/"> React List Rending</a>
      </nav>
      {/*       <EmployeeList /> */}
      <Customer />
    </React.Fragment>
  );
}

export default App;
