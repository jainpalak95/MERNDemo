
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const DB = process.env.DATABASE;
mongoose.connect(DB,{
    useNewUrlParser:true,
    useCreateIndex:true,
    userfindAndModify:false
  }).then(() =>{
  console.log("connetion successful")
  }).catch((err) => console.log("no conection found"))
  