//ES5 formart - 100 % compatibility

// how to read file data using node js FS module

const fs = require("fs");
let data = fs.readFileSync("data.txt", "utf-8");
console.log(data);

fs.writeFileSync("node.txt", data, "utf-8");
console.log("data is written");
