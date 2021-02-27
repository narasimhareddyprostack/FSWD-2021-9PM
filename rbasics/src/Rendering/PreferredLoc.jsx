import React, { Component } from "react";

export class PreferredLoc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chennai: false,
      bangalore: false,
      kochi: false,
    };
  }
  updateInput = (event) => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.checked,
    });
  };
  render() {
    return (
      <React.Fragment>
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-8">
              <pre>{JSON.stringify(this.state)}</pre>
              <div className="card"></div>
              <div className="card-header bg-secondary">
                <h4> Preferred Location </h4>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-4">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        value=""
                        className="form-check-input"
                        onChange={this.updateInput}
                        name="chennai"
                      />
                      <label className="form-check-label">Chennai</label>
                    </div>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        value=""
                        onChange={this.updateInput}
                        className="form-check-input"
                        name="bangalore"
                      />
                      <label className="form-check-label">Bangalore</label>
                    </div>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        value=""
                        onChange={this.updateInput}
                        className="form-check-input"
                        name="kochi"
                      />
                      <label className="form-check-label">Kochi</label>
                    </div>
                  </div>
                  <div className="col-md-8">
                    {this.state.chennai ? (
                      <React.Fragment>
                        <div className="card">
                          <div className="card-body bg-success">
                            <p>
                              Chennai, on the Bay of Bengal in eastern India, is
                              the capital of the state of Tamil Nadu.
                            </p>
                          </div>
                        </div>
                      </React.Fragment>
                    ) : null}

                    {this.state.bangalore ? (
                      <React.Fragment>
                        <div className="card">
                          <div className="card-body bg-primary">
                            <p>
                              {" "}
                              Chennai, on the Bay of Bengal in eastern India, is
                              the capital of the state of Tamil Nadu.
                            </p>
                          </div>
                        </div>
                      </React.Fragment>
                    ) : null}

                    {this.state.kochi ? (
                      <React.Fragment>
                        <div className="card">
                          <div className="card-body bg-warning">
                            <p>
                              Chennai, on the Bay of Bengal in eastern India, is
                              the capital of the state of Tamil Nadu.
                            </p>
                          </div>
                        </div>
                      </React.Fragment>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default PreferredLoc;
