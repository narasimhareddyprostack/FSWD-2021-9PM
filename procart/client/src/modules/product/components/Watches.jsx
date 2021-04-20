import React from "react";
import watchOne from "../../../assets/img/products/watches/watch_1.jpg";
import watchTwo from "../../../assets/img/products/watches/watch_2.jpg";
import watchThree from "../../../assets/img/products/watches/watch_3.jpg";
import watchFour from "../../../assets/img/products/watches/watch_4.jpg";
let Watches = () => {
  return (
    <React.Fragment>
      <section className="bg-warning p-3">
        <div className="container">
          <div className="row">
            <div className="col">
              <h4> Watches</h4>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container mt-3">
          <div className="row">
            <div className="col-md-3">
              <div className="card">
                <div className="card-header">
                  <img
                    src={watchOne}
                    alt="watch one"
                    height="200px"
                    width="100%"
                  />
                </div>
                <div className="card-body">
                  <ul className="list-group">
                    <li className="list-group-item"> Rolex Watch</li>
                    <li className="list-group-item"> 50000</li>
                    <li className="list-group-item">
                      <button className="btn btn-success">Add Cart</button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <div className="card-header">
                  <img
                    src={watchTwo}
                    alt="watch one"
                    height="200px"
                    width="100%"
                  />
                </div>
                <div className="card-body">
                  <ul className="list-group">
                    <li className="list-group-item"> Rolex Watch</li>
                    <li className="list-group-item"> 50000</li>
                    <li className="list-group-item">
                      <button className="btn btn-success">Add Cart</button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <div className="card-header">
                  <img
                    src={watchThree}
                    alt="watch one"
                    height="200px"
                    width="100%"
                  />
                </div>
                <div className="card-body">
                  <ul className="list-group">
                    <li className="list-group-item"> Rolex Watch</li>
                    <li className="list-group-item"> 50000</li>
                    <li className="list-group-item">
                      <button className="btn btn-success">Add Cart</button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <div className="card-header">
                  <img
                    src={watchFour}
                    alt="watch one"
                    height="200px"
                    width="100%"
                  />
                </div>
                <div className="card-body">
                  <ul className="list-group">
                    <li className="list-group-item"> Rolex Watch</li>
                    <li className="list-group-item"> 50000</li>
                    <li className="list-group-item">
                      {" "}
                      <button className="btn btn-success">Add Cart</button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};
export default Watches;
