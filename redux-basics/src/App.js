import React from "react";
import Login from "./Login/Login";
import Registrtion from "./Login/Registration";
function App() {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="/home">
          React Hooks Example
        </a>
      </nav>
      <div className="conatiner">
        <div className="row">
          <div className="col-md-5">
            <h1 className="text-center"> Login</h1>
            <Login />
          </div>
          <div className="col-md-5">
            <h1 className="text-center"> Registraion</h1>
            <Registrtion />
          </div>
        </div>
      </div>

      <hr />
    </>
  );
}
export default App;
