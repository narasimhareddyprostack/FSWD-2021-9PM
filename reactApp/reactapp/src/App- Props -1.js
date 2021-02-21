import React from "react";
import Wish from "./Component/Wish";
import Greet from "./Component/Greet";
function App() {
  let message = "Good Morning";
  return (
    <React.Fragment>
      <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
        <a href="/" className="navbar-brand">
          React Basics - Props and State, Event Handling
        </a>
      </nav>
      {/* class Comp */}
      <Wish message={message} />
      {/* Funciton Comp */}
      <Greet one={message} />
    </React.Fragment>
  );
}

export default App;
