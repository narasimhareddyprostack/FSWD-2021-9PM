import React from "react";
import Footer from "./Footer";
class Navbar extends React.Component {
  name = "Ramya";
  loc = ["chennai", "bangalore", "Hyd"];
  emp = {
    fullName: "Ramya Kumari",
    age: 25,
  };
  getDetails = () => {
    console.log("Employee Details are ", this.name, this.emp.age);
  };
  render() {
    return (
      <>
        <Footer
          one={this.name}
          two={this.loc}
          three={this.emp}
          four={this.getDetails}
        />
      </>
    );
  }
}
export default Navbar;
