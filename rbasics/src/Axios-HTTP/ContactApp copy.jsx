import React, { Component } from "react";
import Axios from "axios";
class ContactApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: null,
      errorMessage: null,
    };
  }
  componentDidMount() {
    let dataURL =
      "https://gist.githubusercontent.com/narasimhareddyprostack/7e344f346f47bc53a889d78b5258d0c9/raw/56d531cb936d9c79e2417e5d0e5d8c9c876800f2/contactlist";
    Axios.get(dataURL)
      .then((response) => {
        console.log(response);
        this.setState({
          contacts: response.data,
        });
      })
      .catch((err) => {
        this.setState({
          errorMessage: err,
        });
      });
  }

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col">
              <p className="h2"> Contact List - Data from GitHub APi </p>
              <p>
                Employment is a relationship between two parties, usually based
                on contract where work is paid for, where one party, which may
                be a corporation, for profit, not-for-profit organization,
                co-operative or other entity is the employer and the other is
                the employee.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <pre>{JSON.stringify(this.state.contacts)}</pre>
              <table className="table table-hover text-center table-success table-striped">
                <thead className="bg-info text-white">
                  <tr>
                    <th>Id</th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>Email</th>
                    <th>Location</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.contacts === null ? null : (
                    <React.Fragment>
                      {this.state.contacts.map((contact) => {
                        return (
                          <tr>
                            <td>{contact.login.uuid}</td>
                          </tr>
                        );
                      })}
                    </React.Fragment>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ContactApp;
