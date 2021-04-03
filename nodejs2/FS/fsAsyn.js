// read json data in async
const fs = require("fs");

fs.readFile("employee.json", "utf-8", (err, data) => {
  if (err) throw err;
  let employees = JSON.parse(data);
  console.log(employees);

  fs.writeFile("customer.json", JSON.stringify(employees), (err) => {
    if (err) throw console.log("data is written in JSON file");
  });
});

//fs.readFile("employee.json", 'utf-8',()=>{})
