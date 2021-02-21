import React from "react";
function Greet(xyz) {
  return (
    <>
      <div className="card m-4">
        <div className="card-header">
          React Props - as Function Comp : {JSON.stringify(xyz)}
        </div>
        <div className="card-body">{xyz.one}</div>
      </div>
    </>
  );
}

export default Greet;
