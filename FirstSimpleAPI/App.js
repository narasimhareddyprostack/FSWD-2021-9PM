//create express server
import express from "express";
import fs from "fs";
import path from "path";

import dotenv from "dotenv";
import morgan from "morgan";

const app = express();
dotenv.config({ path: "./config/config.env" });
app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.send("Hello, Welcome to Pro Stack Academy");
});

app.get("/employee", (req, res) => {
  //we are going to json
  fs.readFile(
    path.join(__dirname, "employee", "employee.json"),
    "utf-8",
    (err, data) => {
      if (err) throw err;
      res.status(200).json(JSON.parse(data));
    }
  );
});
app.listen(8000, (err) => {
  if (err) throw err;
  console.log(`Server is  running on Port No: 8000`);
});
