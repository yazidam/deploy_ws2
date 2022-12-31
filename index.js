const express = require("express");
const User = require("./models/User");
const Prooduct = require("./models/Product");

const app = express();

const router = express.Router();

const connectDB = require("./config/connectDB");
connectDB();
const port = 5500;

app.get("/all", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

app.get("/allProduct", async (req, res) => {
  const products = await Prooduct.find();
  res.json(products);
});

app.listen(port, (err) => {
  err
    ? console.log("erroor", err)
    : console.log(`this server is running on ${port}`);
});
