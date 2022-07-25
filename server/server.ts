import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

async function run() {
  const app = express();
  const port = 3000;

  app.use(cors());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(express.json());

  await mongoose.connect('mongodb://localhost:27017/Quasar');

  // app.use([]);

  app.listen(port, () =>
    console.log(`
  Example app listening on port ${port}!
  `)
  );
}

run();
