import React, { useState } from "react";

let Product = () => {
  let [Product, setProduct] = useState({
    product_Name: "APPLE Watch Series 6 GPS 44 mm Blue Aluminium",
    price: 43900,
    qty: 1,
    image:
      "https://rukminim1.flixcart.com/image/224/224/kfeamq80/smartwatch/g/h/4/ios-m00j3hn-a-apple-original-imafvvggyswtz7yu.jpeg?q=90",
  });

  let decrHandler = () => {
    setProduct({ ...Product, qty: Product.qty - 1 });
  };
  let incrHandler = () => {
    setProduct({ ...Product, qty: Product.qty + 1 });
  };
  return (
    <>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-9">
            <table className="table table-hover table-striped ">
              <thead className="thead-dark">
                <tr>
                  <th>Product Name</th>
                  <th>Image</th>
                  <th>QTY</th>
                  <th>Price</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{Product.product_Name}</td>
                  <td>
                    <img src={Product.image} height="80px" width="80px" />
                  </td>
                  <td>
                    <i className="fa fa-minus-circle" onClick={decrHandler}></i>
                    {Product.qty}
                    <i className="fa fa-plus-circle" onClick={incrHandler}></i>
                  </td>
                  <td>{Product.price}</td>
                  <td>{Product.qty * Product.price}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
export default Product;
