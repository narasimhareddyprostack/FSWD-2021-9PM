import React from "react";
/* import Login from "./Rendering/Login"; */
import PreferredLoc from "./Rendering/PreferredLoc";
let App = () => {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <a href="/"> React Conditional Rendering</a>
      </nav>
      <PreferredLoc />
    </>
  );
};
export default App;
