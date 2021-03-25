import React from "react";
import Message from "./lifecycle/Message";

let App = () => {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="/home">
          React Life Cycle Methods
        </a>
        
      </nav>
      <Message />
    </>
  );
};
export default App;
