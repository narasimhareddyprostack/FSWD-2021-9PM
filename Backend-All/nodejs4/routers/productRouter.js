//routig in express , we have to use exprss router

const express = require("express");
const router = express.Router();

//implementing product routes

//API - localhost:8000/proudcts
router.get("/", (req, res) => {
  res.send(`<h2> Product Details - Root Products Route</h2>`);
});
//API - localhost:8000/products/tvs
router.get("/tvs", (req, res) => {
  res.send(`<h2> All Tv Details - Product TV Route</h2>`);
});

//API Name : localhost:8000/product/laptops
router.get("/laptops", (req, res) => {
  res.send(`<h2> All Laptops Details - Product Laptops Route</h2>`);
});
module.exports = router;
