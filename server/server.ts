import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import { createServer } from 'http';
import { Server } from 'socket.io';

async function run() {
  const app = express();
  const httpServer = createServer(app);
  const io = new Server(httpServer, {
    cors: {
      origin: ['http://localhost:8080', 'http://192.168.88.47:8080'],
    },
    /* options */
  });
  const port = 3000;

  app.use(cors());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(express.json());

  await mongoose.connect('mongodb://localhost:27017/Quasar');

  // app.use([]);

  io.on('connection', socket => {
    console.log('a user connected');
    socket.on('disconnect', () => {
      console.log('a user disconnected');
    });

    socket.on('message', data => {
      console.log(data);

      // save to DB

      socket.emit('ok', { AAA: false });
    });
  });

  httpServer.listen(port, () =>
    console.log(`
  Example app listening on port ${port}!
  `)
  );

  // app.listen(port, () =>
  //   console.log(`
  // Example app listening on port ${port}!
  // `)
  // );
}

run();
