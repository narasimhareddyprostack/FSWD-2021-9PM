import React from "react";
import mobieOne from "../../../assets/img/products/Mobiles/mobile2.jpeg";
import mobieTwo from "../../../assets/img/products/Mobiles/mobile3.jpeg";
import mobieThree from "../../../assets/img/products/Mobiles/mobile4.jpeg";
import mobieFour from "../../../assets/img/products/Mobiles/mobile5.jpeg";
let Mobiles = () => {
  return (
    <React.Fragment>
      <section className="bg-warning p-3">
        <div className="container">
          <div className="row">
            <div className="col">
              <h4> Mobiles</h4>
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
                    src={mobieOne}
                    alt="Mobile Data"
                    height="50%"
                    width="80%"
                  />
                </div>
                <div className="card-body">
                  <ul className="list-group">
                    <li className="list-group-item"> Mobile One</li>
                    <li className="list-group-item"> 6000</li>
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
                    src={mobieTwo}
                    alt="Mobile Data"
                    height="50%"
                    width="80%"
                  />
                </div>
                <div className="card-body">
                  <ul className="list-group">
                    <li className="list-group-item"> Mobile One</li>
                    <li className="list-group-item"> 6000</li>
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
                    src={mobieThree}
                    alt="Mobile Data"
                    height="50%"
                    width="80%"
                  />
                </div>
                <div className="card-body">
                  <ul className="list-group">
                    <li className="list-group-item"> Mobile One</li>
                    <li className="list-group-item"> 6000</li>
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
                    src={mobieFour}
                    alt="Mobile Data"
                    height="50%"
                    width="80%"
                  />
                </div>
                <div className="card-body">
                  <ul className="list-group">
                    <li className="list-group-item"> Mobile One</li>
                    <li className="list-group-item"> 6000</li>
                    <li className="list-group-item">
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
export default Mobiles;
