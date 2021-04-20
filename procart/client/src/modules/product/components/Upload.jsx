import React, { useState } from "react";
let Upload = () => {
  let [product, setProduct] = useState({
    productName: "",
    price: "",
    qty: "",
    category: "",
    image: "",
    desc: "",
    usage: "",
  });
  let inputHandler = (event) => {
    setProduct({ ...product, [event.target.name]: event.target.value });
  };
  let imageHandler = (event) => {
    let imageFile = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(imageFile);
    reader.addEventListener("load", () => {
      if (reader.result) {
        setProduct({ ...product, image: reader.result });
      }
    });
  };
  let submitHandler = (event) => {
    // invoke redux action , dispath action
    console.log(product);
    event.preventDefault();
  };
  return (
    <>
      <section className="bg-warning p-3">
        <div className="container">
          <div className="row">
            <div className="col">
              <h4> Upload Product</h4>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <h5> Product Upload</h5>
                  <pre>{JSON.stringify(product)}</pre>
                </div>
                <div className="card-body">
                  <form onSubmit={submitHandler}>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Product Name"
                        name="productName"
                        onChange={inputHandler}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Price"
                        name="price"
                        onChange={inputHandler}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="number"
                        className="form-control"
                        placeholder="QTY"
                        name="qty"
                        onChange={inputHandler}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Category"
                        name="category"
                        onChange={inputHandler}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="file"
                        className="form-control"
                        name="image"
                        onChange={imageHandler}
                      />
                    </div>
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        placeholder="Product Description"
                        name="desc"
                        onChange={inputHandler}
                      ></textarea>
                    </div>
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        name="usage"
                        onChange={inputHandler}
                        placeholder="Product Usage"
                      ></textarea>
                    </div>
                    <div className="form-group">
                      <button className="btn btn-success">
                        Upload Product
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Upload;
