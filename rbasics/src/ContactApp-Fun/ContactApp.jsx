import React, { useEffect, useState } from "react";
import Axios from "axios";
import ContactList from "./ContactList";
import ContactCard from "./ContactCard";
let ContactApp = () => {
  let [contact, setContact] = useState({
    contacts: [],
    errMessag: null,
    selectedContact: {},
  });
  useEffect(() => {
    let contactURL =
      "https://gist.githubusercontent.com/narasimhareddyprostack/7e344f346f47bc53a889d78b5258d0c9/raw/56d531cb936d9c79e2417e5d0e5d8c9c876800f2/contactlist";
    Axios.get(contactURL)
      .then((response) => {
        //console.log(response.data);
        setContact({ ...contact, contacts: response.data });
      })
      .catch((err) => {
        setContact({ ...contact, errMessage: err });
      });
  }, []);
  let pullData = (contactData) => {
    //console.log(contactData.name.last);
    setContact({ ...contact, selectedContact: contactData });
  };
  return (
    <React.Fragment>
      <pre>{JSON.stringify(contact.contacts)}</pre>
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <ContactList contacts={contact.contacts} getData={pullData} />
          </div>
          <div className="col-md-4">
            {Object.keys(contact.selectedContact).length > 0 ? (
              <>
                <ContactCard selectedContact={contact.selectedContact} />
              </>
            ) : null}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ContactApp;
