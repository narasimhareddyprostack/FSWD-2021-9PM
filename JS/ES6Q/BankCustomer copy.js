class BankCustomer {
  minBal = 500;
  constructor(acc_No, acc_Name, acc_Mobile) {
    this.acc_No = acc_No;
    this.acc_Name = acc_Name;
    this.acc_Mobile = acc_Mobile;
  }
}
//console.log(new BankCustomer().minBal)
let obj1 = new BankCustomer(101, "narsimha", 9591619191);
console.log(obj1);

let obj2 = new BankCustomer(102, "jai", 953434343);
console.log(obj2);

//how to initilize values
/*
    constructor
*/

/*
construcotr special method, It  will execute only once, at time of object creation..
1. Main purpose - to initilize the obj value
*/