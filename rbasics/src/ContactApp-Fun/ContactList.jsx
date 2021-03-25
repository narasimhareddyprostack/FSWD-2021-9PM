import React from "react";

function ContactList(props) {
  let pushData = (contact) => {
    props.getData(contact);
  };
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col">
            <pre>{JSON.stringify(props.contacts)}</pre>
            <table className="table table-hover striped">
              <thead>
                <tr>
                  <td>Name</td>
                  <td>Email</td>
                  <td>Image</td>
                  <td>Loc</td>
                </tr>
              </thead>
              <tbody>
                {props.contacts.length > 0 ? (
                  <React.Fragment>
                    {props.contacts.map((contactData) => {
                      return (
                        <tr onClick={pushData.bind(this, contactData)}>
                          <th> {contactData.name.first}</th>
                          <th> {contactData.email}</th>
                          <th>
                            <img src={contactData.picture.medium} alt="" />
                          </th>
                          <th> {contactData.location.city}</th>
                        </tr>
                      );
                    })}
                  </React.Fragment>
                ) : null}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ContactList;
