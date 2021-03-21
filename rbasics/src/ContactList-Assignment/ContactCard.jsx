import React, { Component } from "react";

class ContactCard extends Component {
  render() {
    let { selectedContact } = this.props;
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="card">
                <div className="card-header">
                  {/* <pre>{JSON.stringify(this.props.selectedContact)}</pre> */}
                  <p className="h5"> Detailed Contact</p>
                  <img src={selectedContact.picture.large} />
                </div>
                <div className="card-body">
                  <ul className="list-group">
                    <li className="list-group-item">
                      {selectedContact.name.last}
                    </li>
                    <li className="list-group-item">
                      {selectedContact.dob.age}
                    </li>
                    <li className="list-group-item">
                      {selectedContact.gender}
                    </li>
                    <li className="list-group-item">
                      {selectedContact.location.city}
                    </li>
                    <li className="list-group-item">
                      {selectedContact.location.country}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ContactCard;
