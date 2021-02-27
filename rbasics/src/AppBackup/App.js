import React from "react";
/* import ParentComp from "./components/ParentComp"; 
import CompA from "./Props-Drilling/CompA"; */

import CompA from "./ContextAPI/CompA";
import UserContext from "./ContextAPI/UserContext";

let App = () => {
  let userInfo = {
    userName: "Kartik",
    email: "karthik@tcs.com",
  };
  return (
    <>
      <h1> App Component</h1>
      <pre>{JSON.stringify(userInfo)}</pre>
      <hr />
      {/*  <ParentComp /> */}
      <UserContext.Provider value={userInfo}>
        <CompA />
      </UserContext.Provider>
    </>
  );
};

export default App;
