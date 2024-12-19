// DB/connection.js
const mongoose = require("mongoose");
require("dotenv").config(); // Load environment variables

const connectionString = process.env.MONGODB_URI; // .env file

const connectDB = async () => {
  try {
    await mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected successfully");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err.message);
    process.exit(1); 
  }
};

module.exports = connectDB;
