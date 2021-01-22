let employees = [
  { name: "narasimha", email: "greetlabs@gmail.com", loc: "IN" },
  { name: "Jai", email: "jai@gmail.com", loc: "IN" },
  { name: "Harisha", email: "harisha@gmail.com", loc: "USA" },
  { name: "David", email: "david@gmail.com", loc: "SN" },
  { name: "Leena", email: "leena@gmail.com", loc: "UK" },
  { name: "Roma", email: "roma@gmail.com", loc: "USA" },
  { name: "John", email: "john@gmail.com", loc: "SN" },
];

//let newEmp = employees.filter((x) => x.loc === "IN");

let newEmp = employees.filter((x) => {
  return x.loc === "SN";
});
console.log(newEmp);

/*
        array.filter()   1. expecting callback fun/ arrow fun
                         2. callback fun iterate all array values
                         3. return the new array based on condition.
*/