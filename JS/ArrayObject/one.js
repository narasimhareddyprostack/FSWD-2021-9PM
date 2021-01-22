let size = [];

let shirt_Size = [38, 40, 42, 44];

let emp_Names = ["leena", "roma", "jai", "harisha", "narasimha", " "];
//                  0      1                                      n-1
console.log(emp_Names.length);
console.log(emp_Names[0]);

let emp = [
  { name: "narasimha", email: "greetlabs@gmail.com", loc: "IN" },
  { name: "Jai", email: "jai@gmail.com", loc: "IN" },
  { name: "Harisha", email: "harisha@gmail.com", loc: "USA" },
  { name: "Leena", email: "leena@gmail.com", loc: "UK" },
  { name: "Roma", email: "roma@gmail.com", loc: "USA" },
  { name: "John", email: "john@gmail.com", loc: "SN" },
];

console.log(emp.length);
console.log(emp[emp.length - 1]);

console.log(emp[emp.length - 1].loc);

console.log(emp[emp.length - 1].sal());

// if you access a property , which is not existed in object, it will return undefined
// if you access/ invoke a method, which is not exited in object, it will throw error

// Js - Every this Object. - properties and methods

// Obj.prep
//obj.method()