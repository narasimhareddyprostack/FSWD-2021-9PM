import React from "react";
let ContactCard = (props) => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-header">
                <div className="center">
                  <img src={props.selectedContact.picture.large} alt="" />
                </div>
              </div>
              <div className="card-body">
                <ul>
                  <li>{props.selectedContact.name.last}</li>
                  <li>{props.selectedContact.dob.age}</li>
                  <li>{props.selectedContact.phone}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ContactCard;
