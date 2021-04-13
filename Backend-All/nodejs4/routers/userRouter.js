const express = require("express");
const router = express.Router();
//implementing all usre related routes

//API - localhost:8000/users
router.get("/", (req, res) => {
  res.send(`<h3> Displaying all users</h3>`);
});

//API - localhost:8000/users/login

router.post("/login", (req, res) => {
  res.send(`<h2> User Login Successfully  </h2>`);
});

//API - localhost:8000/users/signup

router.post("/signup", (req, res) => {
  res.send(`<h5> Registration successful</h5>`);
});
module.exports = router;
