require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userRouter = require("./routes/userRoutes");
const connectToDb = require("./config/db");
const cors = require("cors");
// Connect to MongoDB
connectToDb();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(cors());

app.use("/", userRouter);

module.exports = app;
