import React, { Component } from "react";
import { Fragment } from "react";
import Axios from "axios";
import ContactList from "./ContactList";

class ContactApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      errMessage: null,
      selectedContact: null,
    };
  }
  componentDidMount() {
    let API_URL =
      "https://gist.githubusercontent.com/narasimhareddyprostack/7e344f346f47bc53a889d78b5258d0c9/raw/56d531cb936d9c79e2417e5d0e5d8c9c876800f2/contactlist";
    Axios.get(API_URL)
      .then((response) => {
        console.log(response.data);
        this.setState({
          contacts: response.data,
        });
      })
      .catch((err) => {
        this.setState({ errMessage: err });
      });
  }
  render() {
    return (
      <Fragment>
        {this.state.contacts ? (
          <>
            <ContactList contacts={this.state.contacts} />
          </>
        ) : null}
      </Fragment>
    );
  }
}

export default ContactApp;
