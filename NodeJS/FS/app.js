//reading data from file.

const fs = require("fs");

let data = fs.readFileSync("dummy.txt", "utf-8");
console.log(data);
