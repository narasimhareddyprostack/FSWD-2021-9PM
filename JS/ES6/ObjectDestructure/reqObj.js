let emp = {
  name: "Narasimha",
  loc: ["Bangalroe", "Mangalroe", "dublin"],
  address: { street: "MG Road", city: "Bangalore" },
  sal: "",
};

let { sal = 70000 } = emp;

console.log(sal);
