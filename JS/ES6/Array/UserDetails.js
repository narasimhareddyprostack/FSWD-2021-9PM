let user = {
  name: "Narasimha",
  email: "greetlabs@gmail.com",
};

let details = {
  user_id: 101,
  email_New: "info@psa.com",
  address: "Marathahalli, Bangalore,IN",
};

// copy the values/propeteis
let userDetails = { ...user, ...details };
console.log(userDetails);
