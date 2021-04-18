import React, { useState } from "react";

let Login = () => {
  let [user, setUser] = useState({ email: "", password: "" });
  let inputHandler = (event) => {
    /*  console.log(event);
    console.log(event.target.name);
    console.log(event.target.value); */
    setUser({ ...user, [event.target.name]: event.target.value });
  };
  let submitHandler = (event) => {
    console.log(user);
    //dispatch - Redux action to consume Login API/ backend API
    event.preventDefault();
  };
  return (
    <React.Fragment>
      <section className="bg-warning p-2">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="h3">
                <p>Login Details</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container m-4">
          <div className="row">
            <div className="col-md-5 m-auto">
              <div className="card">
                <div className="card-header">
                  <h4> Login Form</h4>
                  <pre>{JSON.stringify(user)}</pre>
                </div>
                <div className="card-body">
                  <form onSubmit={submitHandler}>
                    <div className="form-group">
                      <input
                        type="email"
                        placeholder="Email"
                        className="form-control"
                        onChange={inputHandler}
                        name="email"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        placeholder="Password"
                        className="form-control"
                        onChange={inputHandler}
                        name="password"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="submit"
                        className="form-control btn btn-success"
                      />
                    </div>
                  </form>
                  <small>
                    Don't <a href="/signup">Have Account</a>
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
export default Login;
