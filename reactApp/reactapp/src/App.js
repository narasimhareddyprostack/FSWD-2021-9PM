import React from "react";

import Navbar from "./NavBar/Navbar";
import Table from "./Table/Table";
//import Footer from './';
class App extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <Table />
        {/*   <Footer/> */}
      </>
    );
  }
}

export default App;
