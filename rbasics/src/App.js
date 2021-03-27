import React from "react";
import Navbar from "./Routing/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ContactTable from "./Routing/Data";
import Message from "./Routing/Message";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/data" exact component={ContactTable} />
          <Route path="/message" exact component={Message} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
