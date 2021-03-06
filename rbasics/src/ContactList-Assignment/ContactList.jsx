import React, { Component } from "react";

class ContactList extends Component {
  constructor(props) {
    super(props);
  }
  ClickContact = () => {};
  render() {
    return (
      <>
        <pre>{JSON.stringify(this.props.contacts)}</pre>
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              <table className="table table-hover table-primary table-striped">
                <thead className="bg-primary text-white">
                  <tr>
                    <th>ID</th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Location</th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.contacts != null ? (
                    <>
                      {this.props.contacts.map((contact) => {
                        return (
                          <>
                            <tr onClick={this.ClickContact.bind(this, contact)}>
                              <td>{contact.login.uuid}</td>
                              <td>
                                <img src={contact.picture.medium} />
                              </td>
                              <td>{contact.name.first}</td>
                              <td>{contact.dob.age}</td>
                              <td>{contact.location.city}</td>
                            </tr>
                          </>
                        );
                      })}
                    </>
                  ) : null}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ContactList;
