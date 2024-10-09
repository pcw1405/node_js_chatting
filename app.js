const express = require("express")
const mongoose = require("mongoose")
require('dotenv').config() // 이게있어야  process
const cors =require("cors")
const app= express()
app.use(cors())
// 테스트를 위해서 

 mongoose
    .connect(process.env.DB,{ //DB를 읽어오란 뜻
        userNewUrlParser : true,
        useUnifiedTopology: true,

    }).then(()=>console.log("connected to database"));

 module.exports=app