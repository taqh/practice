const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const commentRoutes = require('./routes/comment');

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // * means any origin
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, PUT, DELETE'
  );
  res.setHeader('Access-Control-Allow-Headers', ' Content-Type, Authorization');

  next();
});

app.use('/', commentRoutes);

const url = process.env.MONGODB_URI

mongoose
  .connect(url)
  .then(() => {
    console.log('Connected to MongoDB!');
  })
  .catch((err) => {
    console.log(err);
    console.log('Connection failed!');
  });

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server Running at http://localhost:${port}/comments`);
});
