import React, { useState } from "react";
function App() {
  let [msg, setMsg] = useState("Hello");
  //useState hook method return - two value , one is variable has default value
  // second one , setter method
  let changeMessageOne = () => {
    setMsg("Good Evening");
  };
  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="/home">
          React Hooks Example
        </a>
      </nav>
      <hr />
      <h1>Wish Message:{msg}</h1>
      <button
        className="btn btn-success"
        onClick={() => {
          setMsg("Good Morning");
        }}
      >
        Change Message
      </button>
      <button
        className="btn btn-info ml-4"
        onClick={() => {
          setMsg("Good Night......");
        }}
      >
        Good Night
      </button>
      <button className="btn btn-danger ml-4" onClick={changeMessageOne}>
        Good Evening
      </button>
    </>
  );
}
export default App;
//We cant change the state dirctly in component(clss or functional)
/*
.setState({})  - class component
useState() - React hook
*/
