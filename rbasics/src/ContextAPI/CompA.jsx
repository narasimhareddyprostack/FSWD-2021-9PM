import React from "react";
import CompB from "./CompB";
function CompA() {
  return (
    <React.Fragment>
     <h1> Component A:</h1>
      <CompB />
    </React.Fragment>
  );
}

export default CompA;
