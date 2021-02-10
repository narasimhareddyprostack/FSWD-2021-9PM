class BankRules {
  // minBal = 500;
  /* constructor(adhar) {
    this.adhar = adhar;
  } */
}
class BankCustomer extends BankRules {
  constructor(acc_No, acc_Name, acc_Mobile) {
    super();
    this.acc_No = acc_No;
    this.acc_Name = acc_Name;
    this.acc_Mobile = acc_Mobile;
  }
}

let obj1 = new BankCustomer(101, "narsimha", 9591619191);
console.log(obj1);
