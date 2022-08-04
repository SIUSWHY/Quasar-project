import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import { Server } from 'socket.io';

async function run() {
  const app = express();
  const port = 3000;
  const io = new Server();

  app.use(cors());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(express.json());

  await mongoose.connect('mongodb://localhost:27017/Quasar');

  // app.use([]);

  io.on('connection', socket => {
    console.log('a user connected');
    socket.on('disconnect', () => {
      console.log('user disconnected');
    });
  });

  io.listen(port);

  // app.listen(port, () =>
  //   console.log(`
  // Example app listening on port ${port}!
  // `)
  // );
}

run();
