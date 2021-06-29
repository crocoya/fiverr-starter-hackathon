const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);
const socketIo = require('socket.io');
const cors = require('cors');

const port = process.env.PORT || 4001;

const io = socketIo(server, {
  cors: {
    origins: ['http://localhost:3000', 'http://localhost:3001'],
  },
});

app.use(cors({ origin: ['http://localhost:3000', 'http://localhost:3001'] }));

app.get('/lookForFreelance', (req, res) => {
  console.log('lookforfreelance');
  io.emit('lookForFreelance');
});

app.get('/projectValidatedFromFreelance', (req, res) => {
  console.log('projectValidatedFromFreelance');
  io.emit('projectValidatedFromFreelance');
});

app.get('/projectValidatedFromClient', (req, res) => {
  console.log('projectValidatedFromClient');
  io.emit('projectValidatedFromClient');
});

app.get('/projectRefusedFromClient', (req, res) => {
  console.log('projectRefusedFromClient');
  io.emit('projectRefusedFromClient');
});

app.get('/', (req, res) => console.log('super'));

io.on('connection', (socket) => {
  console.log('New client connected');
  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

server.listen(port, () => console.log(`Listening on port ${port}`));
