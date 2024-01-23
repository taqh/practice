const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const { Server } = require('socket.io');
const http = require('http');
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

const url = process.env.MONGODB_URI;

mongoose
  .connect(url)
  .then(() => {
    console.log('Connected to MongoDB!');
  })
  .catch((err) => {
    console.log(err);
    console.log('Connection failed!');
  });

// Socket.io Connection
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: `http://localhost:5173`,
  },
});

io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('createComment', (newComment) => {
    console.log(newComment);
    io.emit('commentCreated', newComment);
  });

  socket.on('updateComment', (updatedComment) => {
    io.emit('commentUpdated', updatedComment);
  });

  socket.on('deleteComment', (commentId) => {
    io.emit('commentDeleted', commentId);
  });

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server Running at http://localhost:${port}/comments`);
});
