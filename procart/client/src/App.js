//create React Root Component
import React from "react";
import Upload from "./modules/product/components/Upload";
import Navbar from "./modules/layout/components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Mobiles from "./modules/product/components/Mobiles";
import Laptops from "./modules/product/components/Laptops";
import Watches from "./modules/product/components/Watches";
import Login from "./modules/user/components/Login";
import Profile from "./modules/user/components/Profile";
import Signup from "./modules/user/components/Signup";
let App = () => {
  return (
    <React.Fragment>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/mobiles" component={Mobiles}></Route>
          <Route exact path="/laptops" component={Laptops}></Route>
          <Route exact path="/watches" component={Watches}></Route>
          <Route exact path="/upload" component={Upload}></Route>
          <Route exact path="/profile" component={Profile}></Route>
          <Route exact path="/signup" component={Signup}></Route>
          <Route exact path="/login" component={Login}></Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
};

export default App;
