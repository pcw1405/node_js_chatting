const express = require("express");
const mongoose = require('mongoose');
require("dotenv").config(); // 이게있어야  process
const cors =require("cors");
const app= express();
app.use(cors());
// 테스트를 위해서 

console.log("DB connection string:", process.env.DB);
 mongoose
    .connect(process.env.DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("connected to database"))
    .catch((err) => console.error("Could not connect to database:", err));
   //  .then(() => console.log("connected to database"))
   //  .catch(err => console.error("Could not connect to database:", err)); // 오류 처리

 module.exports=app

 // 몽고디비가 로컬에 설치되어야한다 
 //brew install mongodb-atlas