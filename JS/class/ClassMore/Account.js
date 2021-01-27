class Address {
  constructor(hno, area, city, state) {
    this.houseNo = hno;
    this.area = area;
    this.city = city;
    this.state = state;
  }
}
class Account {
  constructor(name, email, address) {
    this.accountName = name;
    this.accountEmail = email;
    this.address = address;
  }
}
let acc_Narasimha = new Account(
  "narasimha",
  "greetlabs@gmail.com",
  new Address(11, "MGRoad", "Bangalore", "KA")
);

let acc_Jai = new Account(
  "Jai",
  "Jai@gmail.com",
  new Address(12, "11 Road", "CA", "KA")
);

console.log(acc_Narasimha);
console.log(acc_Jai);
