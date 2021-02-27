import React from "react";
import UserContext from "./UserContext";
function CompC() {
  return (
    <div>
      <hr />
      <h1> Component C</h1>
      <UserContext.Consumer>
        {(userInfo) => <span>{JSON.stringify(userInfo)}</span>}
      </UserContext.Consumer>
      <span> App Comp: </span>
    </div>
  );
}

export default CompC;
