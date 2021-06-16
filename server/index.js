
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const app = express();
dotenv.config({path: './config.env'});
require('./db/connection');
const PORT = process.env.PORT;
//const PORT = 3000;
console.log(`port no ${PORT}`);
//app.use(require)
app.use(express.json());
//const User = require('./model/user_schema')
app.use(require('./router/auth'))

// app.get('/', (req,res) => {

//   res.send(`Hello world from app.js`)
// });
app.listen(PORT, () => {
  console.log(`serevr is running at ${PORT}`);
})

