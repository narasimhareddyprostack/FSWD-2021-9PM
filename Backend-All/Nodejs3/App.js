//ES5 code
//create server using express

//const express = require("express");  //ES5

import express from "express";   //es6
const app = express();
app.get("/", (request, response) => {
  response.send("Express Server Running Successfully!");
});

app.listen(8000, (err) => {
  if (err) throw err;
  console.log(`Server is running on Port: ${8000}`);
});
