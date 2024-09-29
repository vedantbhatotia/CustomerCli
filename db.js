require('dotenv').config();
const mongoose = require("mongoose");
const uri = process.env.MONGO_URI;
const connectDB = async () =>{
  try {
    console.log(uri);
    await mongoose.connect(uri);
    console.log("Pinged your deployment. You successfully connected to DB!");
  } catch(err) {
    console.log(err);
  }
}

module.exports = connectDB;