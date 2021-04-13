const express = require("express");
const router = express.Router();
router.get("/", (req, res) => {
  res.end("Payment Done");
});
module.exports = router;
