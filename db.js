require('dotenv').config();
const mongoose = require("mongoose");
const uri = (process.env.MONGO_URI);
const connectDB = async () =>{
  try {
    console.log(process.env.MONGO_URI);
    await mongoose.connect(uri);
    console.log("Pinged your deployment. You successfully connected to DB!");
  } catch(err) {
    console.log(err);
  }
}

module.exports = connectDB;

// const mongoose = require('mongoose');

// const connectDB = async () => {
//     try {
//         const conn = await mongoose.connect(process.env.MONGO_URI, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         });
//         console.log(`MongoDB Connected: ${conn.connection.host}`);
//     } catch (error) {
//         console.error(`Error: ${error.message}`);
//         process.exit(1); // Exit process with failure
//     }
// };

// module.exports = connectDB;
