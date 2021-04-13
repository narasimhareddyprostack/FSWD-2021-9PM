//how to create experss server?  - ES5

const express = require("express");
const morgan = require("morgan");
const app = express();
const productRouter = require("./routers/productRouter");
const userRouter = require("./routers/userRouter");
const xyz = require("./routers/paymentRouter");
//API localhost:8000

app.use(morgan("dev"));
app.get("/", (req, res) => {
  res.send(`<h1> Welcome to Pro Stack</h1>`);
});

app.use("/products/", productRouter);
app.use("/user/", userRouter);
app.use("/payment/", xyz);

app.listen(8000, (err) => {
  if (err) trow;
  console.log("Server running on Post: 8000");
});
