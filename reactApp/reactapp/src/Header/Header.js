import React from "react";
let Header = (props) => {
  return (
    <>
      <h1>Reading Props</h1>
      <jai>{JSON.stringify(props)}</jai>
      <h2>{props.one}</h2>
      <h5> {props.two[1]}</h5>
      <h1>{props.three.fullname}</h1>
      <h2>{props.three.address}</h2>
      <h3>{props.four()}</h3>
    </>
  );
};
export default Header;
