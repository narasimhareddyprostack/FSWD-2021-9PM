/* //path
//dotenv
const path = require("path");

console.log(__dirname);
console.log(__filename);

//let construct path

console.log(path.join(__dirname, "employee", "employee.json"));
 */

//Read - .env values

const dotenv = require("dotenv");

dotenv.config({ path: "./config/config.env" });

console.log(process.env.PORT);
