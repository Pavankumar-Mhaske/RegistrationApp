require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const userRouter = require('./routes/userRoutes');

app.get('/', userRouter);

module.exports = app;
