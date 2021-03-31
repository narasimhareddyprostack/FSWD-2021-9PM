//read text data
//Node JS - fs module

// running Synchronous methods
const fs = require("fs");
/*

let data = fs.readFileSync("data.txt", "utf-8");
console.log(data);

fs.writeFileSync("dataone.txt", data);
*/
fs.readFile("data.txt", "utf-8", (err, data) => {
  fs.writeFile("datatwo.txt", data, (err) => {
    if (err) throw err;
    console.log("write file successfully");
  });
});
console.log("Hello, Good Morning")