const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');

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

app.use('/comments', commentRoutes);

mongoose
  .connect(
    'mongodb+srv://taqibibrahim:BzV0m06gCIGYyrt9@cluster0.8hmijl4.mongodb.net/comments?retryWrites=true&w=majority'
  )
  .then(() => {
    app.listen(3000), console.log('Connected to MongoDB!');
  })
  .catch((err) => {
    console.log(err);
    console.log('Connection failed!');
  });
