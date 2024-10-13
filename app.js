const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config(); // 이게있어야  process
const cors =require("cors");

const app= express();
app.use(cors());
// 테스트를 위해서 

 mongoose
    // .connect(process.env.DB,{ //DB를 읽어오란 뜻
    //     useNewUrlParser : true,
    //     useUnifiedTopology: true,
    .connect(process.env.DB) // DB를 읽어오란 뜻
    // }).then(()=>console.log("connected to database"));
    .then(() => console.log("connected to database"))
    .catch(err => console.error("Could not connect to database:", err)); // 오류 처리

 module.exports=app