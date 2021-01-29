class User {
  constructor(name, email, mobile) {
    this.name = name;
    this.email = email;
    this.mobile = mobile;
  }
  login() {
    console.log("User Login as : ", this.name);
  }
  logout() {}
}

class Admin extends User {
  //how to access parent class Methods
  constructor(a, b, c) {
    super(a, b, c);
  }
  getDetails() {
    console.log(this.name, this.email);
  }
}
let adminuser = new Admin("Narasimha", "greetlabs@gmail.com", 9591);
adminuser.getDetails();
adminuser.login();
