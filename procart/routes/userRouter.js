const express = require("express");

const router = express.Router();
/*
 API URL : localhost:7000/user/
 Method : Get
 Fields: not - required
*/
router.get("/", async (req, res) => {
  try {
    //business logic later
  } catch (error) {
    console.log(error);
    res.statusCode(500).json({ errors: "server error" });
  }
});
/*
 API URL : localhost:7000/user/login
 Method : POST
 Fields: email, password
*/
router.post("/login", async (req, res) => {
  try {
    let { email, password } = req.body;
    console.log(email);
  } catch (error) {
    console.log(error);
    res.statusCode(500).json({ errors: "server error" });
  }
});
/*
 API URL : localhost:7000/user/registration
 Method : POST
 Fields: username, email, password
*/
router.post("/registration", (req, res) => {});

module.exports = router;
