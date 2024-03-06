const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const taskRouter = require('./route/taskRoute')
require('dotenv').config()

const app = express();
app.use(cors());
app.use(express.json());
app.use('/task',taskRouter)

const port = process.env.PORT

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log('server is running',port);
});

// connect mongooes
const connect = async()=>{
  try {
   await mongoose.connect(process.env.MONGODB_URI)
    console.log('connect sussfull');
  } catch (err) {
    console.log('mongooes connect error',err);
  }
}
connect()