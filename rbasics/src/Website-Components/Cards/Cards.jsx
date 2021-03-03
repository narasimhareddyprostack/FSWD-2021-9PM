import React from "react";
import imageOne from "../../assets/img/card_1.jpg";
import imageTwo from "../../assets/img/card_2.jpg";
import imageThree from "../../assets/img/card_3.jpg";
import imageFour from "../../assets/img/card_4.jpg";
function Cards() {
  return (
    <>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-3">
            <div className="card">
              <img src={imageOne} alt="" />
              <div className="card-body">
                <h2> Paris</h2>
                <p> More About Paris</p>
                <button className="btn btn-primary"> Book Now</button>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <img src={imageTwo} alt="" />
              <div className="card-body">
                <h2> Paris</h2>
                <p> More About Paris</p>
                <button className="btn btn-primary text-center">
                  Book Now
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <img src={imageThree} alt="" />
              <div className="card-body">
                <h2> Paris</h2>
                <p> More About Paris</p>
                <button className="btn btn-primary"> Book Now</button>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <img src={imageFour} alt="" />
              <div className="card-body">
                <h2> Paris</h2>
                <p> More About Paris</p>
                <button className="btn btn-primary"> Book Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
