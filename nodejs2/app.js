// create server  - http - core node module
const http = require("http");
const server = http.createServer((req, res) => {
  res.end(`<h1>Hello,Good Night <h1>`);
});
server.listen(7000, () => {
  console.log(`Server is running on Port ${7000}`);
});
