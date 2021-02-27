import React from "react";

function CompC(props) {
  return (
    <div>
      <hr />
      <h1> Component C</h1>

      <span> {JSON.stringify(props.userInfo)}</span>
    </div>
  );
}

export default CompC;
