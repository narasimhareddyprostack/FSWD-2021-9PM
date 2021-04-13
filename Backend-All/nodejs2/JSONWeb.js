const jwt = require("jsonwebtoken");

//how to creaate Json Web Token
let user = {
  id: "1234",
  name: "kavitha",
  email: "kavitha@gmail.com",
};

let payload = {
  id: user.id,
  name: user.name,
};
let secretKey = "aaabbcc";
let token = jwt.sign(payload, secretKey, { expiresIn: 60 * 60 });
console.log(token);

//how to verify token
jwt.verify(token, secretKey, (err, newpayloadData) => {
  if (err) throw err;
  console.log(newpayloadData);
});
