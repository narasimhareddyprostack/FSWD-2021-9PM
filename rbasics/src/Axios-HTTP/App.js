import React from "react";
import ContactApp from "./Axios-HTTP/ContactApp";

function App() {
  return (
    <React.Fragment>
      <nav className="navbar navabar-dark bg-dark">
        <a href="/"> React - Axios Example</a>
      </nav>
      <ContactApp />
    </React.Fragment>
  );
}

export default App;
