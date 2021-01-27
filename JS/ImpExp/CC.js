//import Address from "./Address";

const Address = require("./Address");
class CC {
  constructor(address) {
    this.cardHolderAddress = address;
  }
}

let cc = new CC(new Address(21, "RJ Garden", "London", "UK"));
console.log(cc);
