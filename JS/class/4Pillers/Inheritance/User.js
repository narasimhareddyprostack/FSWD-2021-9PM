class User {
  constructor(name, email, mobile) {
    this.name = name;
    this.email = email;
    this.mobile = mobile;
  }
  login() {}
  logout() {}
}
class Admin extends user {
  deleteUser() {}
}
let user_Jai = new User("Jai", "Jai@gmail.com", 9988776655);
let user_Ravi = new User("Ravi", "Ravi@gmail.com", 987654321);

console.log(user_Jai);
console.log(user_Ravi);

//how to initilize the object values ? with help of constructor
