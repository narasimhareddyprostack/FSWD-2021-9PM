const express = require("express");
const app = express();
const morgan = require("morgan");
//Root API URL : localhost:8000/

app.use(morgan("dev"));
app.get("/", (req, res) => {
  res.send(`<h2> Express App Running</h2>`);
});

app.listen(8000, (err) => {
  if (err) throw err;
  console.log(`Server Running on Port No: ${8000}`);
});
