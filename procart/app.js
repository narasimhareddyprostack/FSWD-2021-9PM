const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");

const dotenv = require("dotenv");
dotenv.config({ path: "./config/config.env" });
/*
 API URL : localhost:7000/
 Method : Get
 Fields: not - required
*/
// read and accept the form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send(`<h1>Node and Express Server App is working fine</h1>`);
});
/*
 API URL : localhost:7000/about
 Method : Get
 Fields: not - required
*/
app.get("/About", (req, res) => {
  res.send(`<h2> About Page</h2>`);
});

app.use("/user", require("./routes/userRouter"));

//mongoose.connect().then().catch()
mongoose
  .connect(process.env.MONGO_DB_LOCAL_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => {
    console.log(`MongoDB connection Successfull`);
  })
  .catch((err) => {
    console.err(err);
  });
app.listen(process.env.PORT, (err) => {
  if (err) throw err;
  console.log(`Server Running on PORT No: ${process.env.PORT}`);
});
