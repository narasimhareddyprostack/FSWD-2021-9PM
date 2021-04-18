import React, { useState } from "react";
let Signup = () => {
  let [user, setUser] = useState({ name: "", email: "", password: "" });
  let inputHandler = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };
  let submitHandler = (event) => {
    console.log(user);
    event.preventDefault();
  };
  return (
    <React.Fragment>
      <section className="bg-warning p-2">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="h3">
                <p>Registration Details Details</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-4">
        <div className="container">
          <div className="row">
            <div className="col-md-5 m-auto">
              <div className="card">
                <div className="card-header">
                  <h4> Signup - Form</h4>
                  <pre>{JSON.stringify(user)}</pre>
                </div>
                <div className="card-body">
                  <form onSubmit={submitHandler}>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="User Name"
                        name="name"
                        onChange={inputHandler}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Email"
                        name="email"
                        onChange={inputHandler}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Password"
                        name="password"
                        onChange={inputHandler}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Confirm Password "
                        name="password"
                        onChange={inputHandler}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="submit"
                        className="form-control btn btn-primary"
                      />
                    </div>
                  </form>
                  <small>
                    Already have account?
                    <i className="fa fa-sign-in-alt"></i>
                    Please click
                    <a href="/login"> Login</a>
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};
export default Signup;
