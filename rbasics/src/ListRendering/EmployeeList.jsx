import React, { Component } from "react";

export class EmployeeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [
        {
          id: 101,
          name: "Narasimha",
          age: 38,
          loc: "Bangalroe",
        },
        {
          id: 102,
          name: "Jai",
          age: 23,
          loc: "Gandhi Nagar",
        },
        {
          id: 103,
          name: "Harisha",
          age: 24,
          loc: "Bangalroe",
        },
      ],
    };
  }
  render() {
    return (
      <div>
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
              <table className="table table-hover text-center table-striped table-success">
                <thead className="bg-primary text-white">
                  <tr>
                    <th> Employee ID</th>
                    <th> Name </th>
                    <th> Age</th>
                    <th> Location</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.employees.map((employee) => {
                    return (
                      <tr>
                        <td>{employee.id}</td>
                        <td>{employee.name}</td>
                        <td>{employee.age}</td>
                        <td>{employee.loc}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EmployeeList;
