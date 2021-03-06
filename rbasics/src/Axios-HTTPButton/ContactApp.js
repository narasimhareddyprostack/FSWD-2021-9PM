import React, { Component } from "react";
import Axios from "axios";

class ContactApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: null,
    };
  }

  getData = () => {
    let API_URL =
      "https://gist.githubusercontent.com/narasimhareddyprostack/7e344f346f47bc53a889d78b5258d0c9/raw/56d531cb936d9c79e2417e5d0e5d8c9c876800f2/contactlist";

      Axios
      .get(API_URL)
      .then((resonse) => {
        this.setState({
          contacts: resonse.data,
        });
      })
      .catch();
  };
  render() {
    return (
      <div>
        <h1> Consuming HTTP Rest API</h1>
        <button className="btn btn-primary" onClick={this.getData}>
          {" "}
          Get Data
        </button>
        <pre>{JSON.stringify(this.state.contacts)}</pre>
      </div>
    );
  }
}

export default ContactApp;
