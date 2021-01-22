// Arrow function?
/*
        ()=>{}
1. short code/ consice code
2. Arrow/fat arrow return - empty obj.
3. implicit return
*/
let emp = [
  { name: "narasimha", email: "greetlabs@gmail.com", loc: "IN" },
  { name: "Jai", email: "jai@gmail.com", loc: "IN" },
  { name: "Harisha", email: "harisha@gmail.com", loc: "USA" },
  { name: "David", email: "david@gmail.com", loc: "SN" },
  { name: "Leena", email: "leena@gmail.com", loc: "UK" },
  { name: "Roma", email: "roma@gmail.com", loc: "USA" },
  { name: "John", email: "john@gmail.com", loc: "SN" },
];

//wap to print employee belongs to SN?
// == eqality
// === strict eqality
let emptyEmp = [];
for (var i = 0; i <= emp.length - 1; i++) {
  if (emp[i].loc === "SN") {
    emptyEmp[i] = emp[i];
    //console.log(emp[i].name, emp[i].email);
  }
}

console.log(emptyEmp);
