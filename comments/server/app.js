const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');

const commentRoutes = require('./routes/comment');

const app = express();

mongoose
  .connect(
    'mongodb+srv://taqibibrahim:BzV0m06gCIGYyrt9@cluster0.8hmijl4.mongodb.net/comments?retryWrites=true&w=majority'
  )
  .then(() => {
    console.log('Connected to MongoDB!');
  })
  .catch((err) => {
    console.log(err);
    console.log('Connection failed!');
  });

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173'); // * means any origin
  res.setHeader('Access-Control-Allow-Headers', ' Content-Type, Authorization');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, PUT, DELETE, OPTIONS'
  );
  next();
});

// app.use('comments', commentRoutes);

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
