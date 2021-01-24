class Customer {
  default_Amount = 500;
  constructor(a, b, c, d) {
    this.acc_Number = a;
    this.acc_Name = b;
    this.acc_Email = c;
    this.acc_Mobile = d;
  }
  openAccount() {
    console.log(
      `Account is Opened ${this.acc_Name} and Acc No: ${this.acc_Number} `,
      this.acc_Number
    );
  }
  deposit() {}
  getBal() {}
  withDraw() {}
  getState() {}
  closeAccount() {}
}

let acc_Narasimha = new Customer(
  91101,
  "narsimha",
  "greetlabs@gmail.com",
  959161991
);
acc_Narasimha.openAccount();

console.log(acc_Narasimha.default_Amount);

let acc_Jai = new Customer(91102, "Jai", "Jai@gmail.com", 9544343434);

acc_Jai.openAccount();
let acc_Ravi = new Customer(11, "Ravi");
acc_Ravi.openAccount();
