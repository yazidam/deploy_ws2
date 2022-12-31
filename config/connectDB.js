const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://ahmed:ahmed@cluster0.ol449ez.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("database is connected");
  } catch (err) {
    console.log("err", err);
  }
};

module.exports = connectDB;
