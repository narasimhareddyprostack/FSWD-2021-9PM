import React from "react";

function Contact() {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-5">
                <div className="card">
                  <div className="card-body">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.1497620577056!2d77.69902171467751!3d12.962267090861998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae11e6982ac5df%3A0xb52fcb3ad37e0ec3!2sPro%20Stack%20Academy%20-%20Full%20Stack%20Web%20Developer%2C%20Python%20Full%20Stack%20Developer%20Training!5e0!3m2!1sen!2sin!4v1614523377956!5m2!1sen!2sin"
                      width="400"
                      height="300"
                      allowFullScreen=""
                      style={{ border: 0 }}
                      loading="lazy"
                    ></iframe>
                  </div>
                </div>
              </div>
              <div className="col-md-7">
                <div className="card">
                  <div className="card-header">
                    <h4> Contact Form</h4>
                  </div>
                  <div className="card-body">
                    <form className="form">
                      <div className="form-group">
                        <input
                          type="text"
                          placeholder="Name"
                          className="form-control"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          placeholder="Email"
                          className="form-control"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          placeholder="Mobile"
                          className="form-control"
                        />
                        <div className="form-group mt-2">
                          <input
                            type="submit"
                            value="Submit"
                            className="btn btn-primary form-control"
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
