import React from "react";

import CompC from "./CompC";
import UserContext from "./UserContext";
function CompB(props) {
  return (
    <div>
      <h1> Component B</h1>
      <UserContext.Consumer>
        {(userInfo) => <span>{JSON.stringify(userInfo)}</span>}
      </UserContext.Consumer>
      <CompC />
    </div>
  );
}

export default CompB;
