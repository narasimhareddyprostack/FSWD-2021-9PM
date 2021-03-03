import React, { Component } from "react";
import { customerData } from "./customerData";
class Customer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customers: customerData,
    };
  }
  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col">
              <p className="h2 text-success"> Employee List</p>
              <p className="lead">
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
                  {this.state.customers.map((customer) => {
                    return (
                      <tr>
                        <td>{customer.login.uuid}</td>
                        <td>
                          <img
                            src={customer.picture.large}
                            width="70"
                            height="70"
                          />
                        </td>
                        <td>
                          {customer.name.fist}
                          {customer.name.last}
                        </td>
                        <td>{customer.registered.age}</td>
                        <td>{customer.gender}</td>
                        <td>{customer.email}</td>
                        <td>{customer.location.city}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Customer;
