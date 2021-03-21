import React, { useState } from "react";
let Login = () => {
  let [user, setUser] = useState({ email: "", password: "" });
  //  default value, and setter method to update default value.
  let updateEmail = (event) => {
    setUser({ ...user, email: event.target.value });
    //How to get user entered data?
    //with help of event.target.value
  };
  let updatePassword = (event) => {
    setUser({ ...user, password: event.target.value });
  };
  let submitHandler = (event) => {
    console.log(user);
    event.preventDefault();
  };
  return (
    <React.Fragment>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-5">
            <form onSubmit={submitHandler}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Please Enter Email/User Name"
                  value={user.email}
                  onChange={updateEmail}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Please Enter Password"
                  value={user.password}
                  onChange={updatePassword}
                />
              </div>
              <div className="form-group">
                <input
                  type="submit"
                  className="form-control btn btn-primary"
                  value="Login"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;

/*
    How to avoid, losing the data after submitting/clicking buttin in Forms?
    event.preventDefault()
*/
