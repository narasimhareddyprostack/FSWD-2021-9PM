const bcrypt = require("bcryptjs");
let userdetails = {
  name: "kavitha",
  password: "ABC123",
  pin: 4455,
};

let salt = bcrypt.genSaltSync(10);

newPassword = bcrypt.hashSync(userdetails.password, salt);
console.log(newPassword);

userdetails = { ...userdetails, password: newPassword };
console.log(userdetails);

if (bcrypt.compareSync("ABC1234", userdetails.password)) {
  console.log("Password Match");
} else {
  console.log("Password doesn't match");
}
