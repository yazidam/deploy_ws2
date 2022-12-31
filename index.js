const express = require("express");
const User = require("./models/User");
const Prooduct = require("./models/Product");
const bcrypt = require("bcryptjs");
const app = express();
app.use(express.json());

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

app.post("/add", async (req, res) => {
  const user = new User(req.body);

  const email = req.body.email;
  const password = req.body.password;
  const existe = await User.findOne({ email });

  if (existe) {
    return res.status(400).json("user existe");
  }

  const hashedPsw = await bcrypt.hash(password, 10);
  const newUser = await User.create({
    name: user.name,
    email: user.email,
    phone: user.phone,
    password: hashedPsw,
  });
  return res.status(201).json(newUser);
});

const getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

app.listen(port, (err) => {
  err
    ? console.log("erroor", err)
    : console.log(`this server is running on ${port}`);
});
