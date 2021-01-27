class BankCustomer {
  min_Bal = 500;
  constructor(name, num) {
    this.acc_Name = name;
    this.acc_Num = num;
    console.log("Account is created");
  }
  getAccountDetails() {
    console.log("Account Details:", this.acc_Name);
    return null;
  }
}

let acc1 = new BankCustomer("narasimha", 4781);
console.log(acc1.getAccountDetails());
//console.log(new BankCustomer("Leena", "5678"));

/*
    constructor - is a special method in class
    and it will invoke only once @ object creation
    - to initilize values.
*/
