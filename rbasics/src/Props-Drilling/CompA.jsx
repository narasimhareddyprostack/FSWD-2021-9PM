import React from "react";
import CompB from "./CompB";
function CompA(props) {
  return (
    <React.Fragment>
      <div className="card">
        <div className="card-header">Componet A:</div>
        <div className="card-body"></div>
        <CompB userInfo={props.userInfo} />
      </div>
    </React.Fragment>
  );
}

export default CompA;
