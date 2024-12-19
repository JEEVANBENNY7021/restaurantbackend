// Load .env
require("dotenv").config();


// Import express
const express = require("express");


// Import cors
const cors = require("cors");


const connectDB = require("./DB/connection");

const menuRoutes= require("./routes/menu");


const app = express();

// Middleware configuration
app.use(cors()); // Enable CORS for all requests
app.use(express.json()); // Parse JSON requests


// Connect to the database
connectDB(); // This function will manage the database connection


app.use("/api/menu", menuRoutes);

// Port configuration
const port = process.env.PORT || 5000;


// Start the application
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
  