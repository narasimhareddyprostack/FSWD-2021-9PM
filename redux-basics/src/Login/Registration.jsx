import React, { useState } from "react";
let Registrtion = () => {
  let [newUser, setNewUser] = useState({
    name: "",
    email: "____@gmail.com",
    password: "",
  });

  let inputUpdate = (e) => {
    //For input field, we have one handler capture the user value
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };
  let submitHandler = (event) => {
    alert(JSON.stringify(newUser));
    event.preventDefault();
  };
  return (
    <React.Fragment>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <form onSubmit={submitHandler}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  onChange={inputUpdate}
                  name="name"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email"
                  value={newUser.email}
                  onChange={inputUpdate}
                  name="email"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Password"
                  onChange={inputUpdate}
                  name="password"
                />
              </div>
              <button className="btn btn-primary" type="submit">
                Registraion
              </button>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Registrtion;
