import React from "react";
import laptopOne from "../../../assets/img/products/laptops/acer.jpeg";
import laptopTwo from "../../../assets/img/products/laptops/hp.jpeg";
import laptopThree from "../../../assets/img/products/laptops/hp-original.jpeg";
import laptopFour from "../../../assets/img/products/laptops/nokia-x14-thin.jpeg";
let Laptops = () => {
  return (
    <React.Fragment>
      <section className="bg-warning p-3">
        <div className="container">
          <div className="row">
            <div className="col">
              <h4> Laptops</h4>
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
                    src={laptopOne}
                    alt="Mobile Data"
                    height="50%"
                    width="80%"
                  />
                </div>
                <div className="card-body">
                  <ul className="list-group">
                    <li className="list-group-item"> Laptop One</li>
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
                    src={laptopTwo}
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
                    src={laptopThree}
                    alt="Mobile Data"
                    height="50%"
                    width="80%"
                  />
                </div>
                <div className="card-body">
                  <ul className="list-group">
                    <li className="list-group-item"> SONY Laptop</li>
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
                    src={laptopFour}
                    alt="Mobile Data"
                    height="50%"
                    width="80%"
                  />
                </div>
                <div className="card-body">
                  <ul className="list-group">
                    <li className="list-group-item"> laptop Acer</li>
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
export default Laptops;
